import React, { Suspense, forwardRef, useId, useState } from 'react'
import FormTextField from './inputs/FormTextField'
import GradientButton from './inputs/GradientButton'
import { z } from 'zod';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import check from '/assets/icons/tick.svg'
import { axiosInstance } from './utils/axios.instance';
const PhoneInputWithCountry = React.lazy(() => import("react-phone-number-input/react-hook-form"));
import { ACCEPTED_FILE_TYPES, References } from '../constants/FormData';
import 'react-phone-number-input/style.css'
import { cn } from './utils/cn';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/slices/user.slice';
import Loader from './shared/Loader';


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
  }).int().gte(0).safe().positive(),
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
  const { userType, token } = useSelector(selectCurrentUser)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pages: 1,
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

  const onSubmit = async (data: FormFields) => {
    console.log(data)
    const url = 'https://2nhv2211-8080.inc1.devtunnels.ms/customer/query';
    const { files: file, ...values } = data;
    const query = JSON.stringify({
      ...values, customer_id: "UID202405103"
    });
    const formData = new FormData();
    formData.append('query', query);

    formData.append('file', file[0]);
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

  return (
    <div className='bg-rainbow bg-center bg-cover bg-no-repeat mt-10 px-2 xs:px-4 sm:px-10  z-30'>
      <div className='bg-white  relative shadow-form_shadow h-full w-full py-10 px-2 xs:px-6 sm:px-10 md:px-16 xl:px-28 max-w-7xl mx-auto'>
        <h1 className='text-xl lg:text-2xl text-center font-semibold text-secondary-200'>Receive immediate assistance from genuine experts, no AI involved.</h1>
        <form className='mt-16 ' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40'>
            <div className='flex flex-col gap-12'>
              <FormTextField title='Enter Email address'{...register("email")} error={errors.email?.message} />
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
                required: {
                  value: true,
                  message: "total pages is required"
                }
              })} error={errors.pages?.message} type='number' min={1} />
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
                  <select className=' w-full z-10 bg-transparent  px-2 outline-none h-12  placeholder:text-base resize-none' {...register("reference")}>
                    <option hidden defaultValue={""}></option>
                    {
                      References.map((reference, i) => (
                        <option value={reference} key={i}>{reference}</option>
                      ))
                    }
                    <option value="other">other</option>
                  </select>
                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Reference of the assignment</label>
                </div>
                <p className='text-red-500 text-sm mt-1  font-[Nunito] leading-none'> {errors.reference && errors.reference?.message}</p>
              </div>

              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito]'>
                  <textarea className=' w-full z-10 bg-transparent  px-4 outline-none pt-3 pb-10 placeholder:text-base resize-none' {...register("description")} />
                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Order Description <span className='text-[#C5C5C5]'>(write or attach)</span></label>

                  <input type='file' id="fileUpload" {...register("files")} accept={ACCEPTED_FILE_TYPES.join(' ')} className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 left-2 
                      file:text-sm file:font-semibold z-20 file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 absolute bottom-1'/>
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
      </div >

    </div >
  )
}

export default AssignmentForm
