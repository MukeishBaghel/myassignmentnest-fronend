import React, { useState } from 'react'
import FormTextField from './inputs/FormTextField'
import GradientButton from './inputs/GradientButton'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import check from '/assets/icons/tick.svg'
import { axiosInstance } from './utils/axios.instance';

const today = new Date();
const MAX_UPLOAD_SIZE = 1024 * 1024 * 10; // 10MB
const ACCEPTED_FILE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel', // MIME type for Excel sheets (XLS)
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // MIME type for Excel sheets (XLSX)
];

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).trim().toLowerCase(),
  subject: z.string({
  }).min(1, {
    message: "Subject name / course code is required"
  }),
  deadline: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "Invalid date",
  }),
  totalPages: z.number({ message: "Please enter total pages" }).positive().safe(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 characters."),
  reference: z.array(z.string()).or(z.string()),
  description: z.string().min(1, {
    message: "Try to briefly explain your Assignment"
  }).trim(),

  files: z
    .optional(z.nullable(z.instanceof(File)))
    .refine((file) => {
      return !file || (file instanceof File && file.size <= MAX_UPLOAD_SIZE);
    }, {
      message: 'File size must be less than 10MB',
      path: ['files']
    })
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes((file as File).type);
    }, {
      message: 'File must be in valid format',
      path: ['files']
    })
});
type FormFields = z.infer<typeof FormSchema>


const AssignmentForm = () => {
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data)
    // const { data } = await axiosInstance.post('/',)
  }

  return (
    <div className='bg-rainbow bg-center bg-cover bg-no-repeat lg:h-screen mt-10 px-2 xs:px-4 sm:px-10'>
      <div className='bg-white  shadow-form_shadow h-full w-full py-10 px-2 xs:px-6 sm:px-10 md:px-16 xl:px-28 max-w-7xl mx-auto'>
        <h1 className='text-xl lg:text-2xl text-center font-semibold text-secondary-200'>Receive immediate assistance from genuine experts, no AI involved.</h1>
        <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-[5vw] md:gap-[8vw] xl:gap-[15vw]'>
            <div className='flex flex-col gap-12'>
              <FormTextField title='Enter Email address'{...register("email")} error={errors.email?.message} />
              <FormTextField title='Enter Subject / course code' {...register("subject")} error={errors.subject?.message} />
              <FormTextField title='Deadline' type='date' min={today.toISOString().split('T')[0]} {...register("deadline")} error={ errors.deadline?.message} />
              <FormTextField title='Enter the total Pages' {...register("totalPages")} error={errors.totalPages?.message} type='number' min={0} />
            </div>
            <div className='flex flex-col gap-12'>
              <FormTextField title='Enter the Phone no' {...register("phoneNumber")} error={errors.phoneNumber?.message} />
              <FormTextField title='Reference of the assignment' {...register("reference")} error={errors.reference?.message} />
              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito]'>
                  <textarea className=' w-full z-10 bg-transparent  px-4 outline-none pt-3 pb-10 placeholder:text-base resize-none' {...register("description")} />
                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Order Description <span className='text-[#C5C5C5]'>(write or attach)</span></label>
                  <input type='file' {...register("files")} multiple className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 left-2 
      file:text-sm file:font-semibold z-20 file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 absolute bottom-1'/>
                </div>
                <p className='text-red-500 text-sm mt-1 font-[Nunito] leading-none'> {errors.description && errors.description?.message}</p>
              </div>

            </div>
          </div>
          <div className='flex items-center gap-4 mt-10'>
            <button type='button' className='border border-[#242424] h-6 w-6 rounded-md' onClick={() => setAgreeToTerms((prev) => (!prev))}>{agreeToTerms && <img src={check} className='mx-auto w-4 h-4' />}</button>
            <p className='text-[#363636] text-sm '>accept the T&C, agree to receive offer and update</p>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <GradientButton className='mx-auto w-fit sm:px-12 text-xl sm:text-2xl'>Get Assistance</GradientButton>
          </div>
        </form>
      </div>
    </div >
  )
}

export default AssignmentForm
