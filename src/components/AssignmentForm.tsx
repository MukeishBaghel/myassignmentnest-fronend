import React, { ChangeEvent, Suspense, useEffect, useState } from 'react'
import FormTextField from './inputs/FormTextField'
import GradientButton from './inputs/GradientButton'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import check from '/assets/icons/tick.svg'
const PhoneInputWithCountry = React.lazy(() => import("react-phone-number-input/react-hook-form"));
import { ACCEPTED_FILE_TYPES, References } from '../constants/FormData';
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/slices/user.slice';
import Loader from './shared/Loader';
import isTokenExpired from '../constants/Token.expire';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './inputs/Modal';
import { jwtDecode } from 'jwt-decode';
import { UploadCloud } from 'lucide-react';


const today = new Date();
const MAX_UPLOAD_SIZE = 1024 * 1024 * 10; // 10MB


const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).trim().toLowerCase(),
  subject: z.string().min(1, "subject is required"),
  phone: z.string({
    required_error: "Phone number is required",
  }).min(10, { // Ensure at least 1 character is provided (can be adjusted based on your requirements)
    message: "Invalid Phone number",
  }),
  deadline: z.date({
    required_error: "date is required"
  }),
  pages: z.number({
    message: "Value must be greater than 0"
  }).gte(0).int(),
  reference: z.optional(z.nullable(z.array(z.string()).or(z.string()))),
  description: z.string().min(1, {
    message: "Try to briefly explain your Assignment"
  }).trim(),
  files: z
    .optional(z.nullable(
      z.any().refine((FileList) => {
        if (!FileList || !FileList[0]) {
          return true; // Pass validation if no file is selected
        }
        return FileList[0].size <= MAX_UPLOAD_SIZE && ACCEPTED_FILE_TYPES.includes(FileList[0].type);
      }, {
        message: 'Invalid file format or size',
      })
    )),
  agree: z.optional(z.nullable(z.boolean()))
});
type FormFields = z.infer<typeof FormSchema>


const AssignmentForm = () => {
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState(new FormData)
  const [newFormData, setNewFormData] = useState<FormFields | null>(null)
  const [isModelOpen, setIsModelOpen] = useState(false)
  const setModelOpen = () => setIsModelOpen(true)
  const setModelClose = () => setIsModelOpen(false)
  const { userType, token } = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [otherField, setOtherField] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [email, setEmail] = useState(null)
  const [decoded_token, setDecoded_token] = useState<any | undefined>(undefined)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pages: 10,
      phone: "",
    }
  });

  const prepareHeader = () => {

    if (userType === "google_user") {
      return 'Bearer ' + token
    }
    else {
      return 'JWT ' + token
    }
  }

  useEffect(() => {
    try {
      let decodeToken = null;
      if (token) {

        decodeToken = jwtDecode(token);
        if (decodeToken) {
          setDecoded_token(decodeToken);
          // @ts-ignore
          setEmail(decodeToken?.sub)
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [token]);

  useEffect(() => {
    const savedFormData = localStorage.getItem('formQuery');
    console.log(savedFormData)
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      reset(parsedData);
    }
    else {
      reset()
    }
  }, [reset]);


  const onSubmit = async (data: FormFields) => {

    if (!agreeToTerms) {
      toast.error("Accept the T&C")
      return;
    }
    localStorage.setItem("formQuery", JSON.stringify(data))


    if (isTokenExpired()) {
      return navigate('/login')
    }

    let accountId = null;
    if (token && userType === "app_user") {
      accountId = decoded_token.accountId
    }
    const userId = localStorage.getItem("customer_id");

    if (userId && userType === "google_user") {
      accountId = userId
    }

    console.log(data)
    if (!accountId) {
      toast.error("Invalid user")
      return;
    }

    const { files: file, ...values } = data;
    const query = JSON.stringify({
      ...values, customer_id: accountId
    });

    setNewFormData(data)

    const formData = new FormData()

    formData.append('query', query);
    console.log(file)
    if (file) {
      formData.append("file", file[0])
    }
    setFormData(formData)
    console.log(formData.forEach((key, value) => {
      console.log(key, value)
    }))

    setModelOpen()
  }
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName(null);
    }
  };
  const sendQuery = (formData: any) => {
    const url = `${import.meta.env.VITE_BASE_URL}/customer/query`;
    setModelClose()
    setIsLoading(true)
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        "Authorization": prepareHeader(),
      }

    })
      .then(response => {
        if (response.status === 201) {
          toast.success("Form Submitted Successfully")
          localStorage.removeItem("formQuery")
          setFileName(null)
          reset();
        }
        else {
          toast.error("Invalid data format")
        }
        return response.text()
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error)
        toast.error("Something went wrong")
      }).finally(() => setIsLoading(false))
  }

  const filesErrorMessage = errors.files && errors.files.message
  // @ts-ignore
  const filesError: React.ReactNode = filesErrorMessage ? <p>{filesErrorMessage}</p> : null;

  // formData.forEach((value, key) => {
  //   console.log(key, value);
  // });
  const handleReferenceChange = (event: any) => {
    if (event.target.value === 'other') {
      setOtherField(true);
    }
  };
  return (
    <div className='bg-rainbow bg-center bg-cover bg-no-repeat mt-10 px-2 xs:px-4 sm:px-10  z-30' id='assignmentForm'>
      <div className='bg-white  relative shadow-form_shadow h-full w-full py-10 px-2 xs:px-6 sm:px-10 md:px-16 xl:px-28 max-w-7xl mx-auto' >
        <h1 className='text-xl lg:text-2xl text-center font-semibold text-secondary-200'>Receive immediate assistance from genuine experts, no AI involved.</h1>
        <form className='mt-16 ' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-32'>
            <div className='flex flex-col gap-12'>
              {
                email ? <FormTextField title='Your Email address'{...register("email")} className='cursor-not-allowed' value={email || ""} readOnly={email ?? false} />
                  : <FormTextField title='Enter Email address'{...register("email")} error={errors.email?.message} />
              }

              <FormTextField title='Enter Subject / course code' {...register("subject")} error={errors.subject?.message} />
              <FormTextField title='Deadline' type='date' min={today.toISOString().split('T')[0]} {...register("deadline", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "date is required"
                }
              })} error={errors.deadline?.message} />
              <FormTextField title='Enter the total Pages' {...register("pages", {
                valueAsNumber: true,
              })} error={errors.pages?.message} type='number' />

            </div>
            <div className='flex flex-col gap-12'>

              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito] h-12 flex items-center px-4'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <PhoneInputWithCountry
                      name="phone"
                      // @ts-ignore
                      control={control}
                      rules={{
                        required: "Phone number is required", // Set error message directly
                      }}
                      international={true}
                      style={{ height: "100%", outline: "none" }}
                      defaultCountry="IN"
                      limitMaxLength
                    />
                  </Suspense>

                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Phone Number</label>
                </div>
                <p className='text-red-500 text-sm mt-1 font-[Nunito] leading-none'> {errors.phone && errors.phone?.message}</p>
              </div>
              {/* <p className='text-red-500 text-sm mt-1 font-[Nunito] leading-none'> {errors.reference && errors.reference?.message}</p> */}

              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito] h-12'>
                  {
                    otherField ? <input type="text" className='w-full z-10 bg-transparent  px-2 outline-none h-12  placeholder:text-base ' placeholder='Enter assignment name' {...register("reference")} /> : <select className=' w-full z-10 bg-transparent  px-2 outline-none h-12  placeholder:text-base ' {...register("reference")} onChange={handleReferenceChange}>
                      <option hidden defaultValue={""}></option>
                      {
                        References.map((reference, i) => (
                          <option value={reference} key={i}>{reference}</option>
                        ))
                      }
                      <option value="other">other</option>
                    </select>
                  }
                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Reference of the assignment</label>
                </div>
                <p className='text-red-500 text-sm mt-1  font-[Nunito] leading-none'> {errors.reference && errors.reference?.message}</p>
              </div>

              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito]'>
                  <textarea className=' w-full z-10 bg-transparent  px-4 outline-none pt-3 pb-10 placeholder:text-base resize-none' {...register("description")} />
                  <span className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Order Description <span className='text-[#C5C5C5]'>(write or attach)</span></span>

                  <label htmlFor="fileUpload" {...register("files")} className='cursor-pointer max-w-[200px] inline-block border-2 rounded border-purple-500 m-1'>
                    <div className='px-2 py-1'>
                      {!fileName && <>
                        <p className="font-semibold text-primary-200 flex gap-2"><span>Upload File </span><span className='text-black'><UploadCloud className='w-6 text-secondary-foreground' /></span></p> <p className="text-xs text-gray-500 dark:text-gray-400 truncate">SVG, PNG, JPG, PDf, XLSX</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Max Size: 10 MB</p></>}
                      {fileName && <p className=" text-sm text-gray-700 w-[180px] truncate">{fileName}</p>}

                    </div>
                    <input type='file' id="fileUpload" {...register("files")} accept={ACCEPTED_FILE_TYPES.join(' ')} className='file:mr-4 hidden file:py-2 file:px-4 file:rounded-full file:border-0 left-2 ' onChange={handleFileChange} />
                  </label>
                </div>
                <p className='text-red-500 text-sm mt-1 font-[Nunito] leading-none'> {errors.description && errors.description?.message}</p>
                <p className='text-red-500 text-sm mt-1 font-[Nunito] leading-none'> {filesError}</p>
              </div>
            </div>

          </div>
          <div className='flex items-center gap-4 mt-10'>
            <button type='button' className='border border-[#242424] h-6 w-6 rounded-md' onClick={() => setAgreeToTerms((prev) => (!prev))}>{agreeToTerms && <img src={check} className='mx-auto w-4 h-4' />}</button>
            <p className='text-[#363636] text-sm'>accept the T&C, agree to receive offer and update</p>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <GradientButton className='mx-auto w-fit sm:px-12 text-xl sm:text-2xl' bgClassName='disabled:pointer-events-none disabled:opacity-70' disabled={isLoading}
              type='submit'>Get Assistance</GradientButton>
          </div>
        </form>
        {isLoading && <Loader />}
        {
          newFormData && <Modal isOpen={isModelOpen} onClose={setModelClose} >
            <div className='p-4'>
              <div className='text-3xl sm:text-4xl font-medium gradient-text text-center'>Are you sure ?</div>
              <div className='flex flex-col space-y-4 mt-8'>
                <div className='grid grid-cols-2 gap-4 '>
                  <div className='space-y-4'>
                    <FormTextField title='Email address' value={newFormData?.email} readOnly />
                    <FormTextField title='Deadline' type='text' value={newFormData?.deadline as any} readOnly />
                    <FormTextField title='Total Pages' value={newFormData?.pages} readOnly />
                  </div>

                  <div className='space-y-4'>
                    <FormTextField title='Subject' value={newFormData.subject} readOnly />
                    <FormTextField title='Phone' value={newFormData.phone} readOnly />
                    <FormTextField title='Reference' value={newFormData.reference as string} readOnly />
                  </div>
                </div>
                <FormTextField title='File Name' value={fileName as string} readOnly placeholder={fileName ? "" : "No file selected"} />
                <br />
                <GradientButton onClick={() => formData ? sendQuery(formData) : null}>Submit & Connect with Experts</GradientButton>
                <GradientButton className=''> <Link to={"https://wa.me/message/TWMAGNZXPVLQG1"} >Get instant Quotation now</Link></GradientButton>
              </div>
            </div>
          </Modal>
        }
      </div >

    </div >
  )
}

export default AssignmentForm
