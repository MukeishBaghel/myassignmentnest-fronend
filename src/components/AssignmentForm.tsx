import React, { useState } from 'react'
import FormTextField from './inputs/FormTextField'
import GradientButton from './inputs/GradientButton'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import check from '/assets/icons/tick.svg'

const today = new Date();
const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
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
    message: "Write few words that describing your assignment"
  }).trim()

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

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div className='bg-rainbow bg-center bg-cover bg-no-repeat lg:h-screen mt-10 px-4 sm:px-10'>
      <div className='bg-white  shadow-form_shadow h-full w-full py-10 px-10 md:px-28 max-w-7xl mx-auto'>
        <h1 className='text-xl lg:text-2xl text-center font-semibold text-secondary-200'>Receive immediate assistance from genuine experts, no AI involved.</h1>
        <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-[5vw] lg:gap-[15vw]'>
            <div className='flex flex-col gap-12'>
              <FormTextField title='Enter Email address'{...register("email")} error={errors.email?.message} />
              <FormTextField title='Enter Subject / course code' {...register("subject")} error={errors.subject?.message} />
              <FormTextField title='Deadline' type='date' min={today.toISOString().split('T')[0]} {...register("deadline")} error={errors.deadline?.message} />
              <FormTextField title='Enter the total Pages' {...register("totalPages")} error={errors.totalPages?.message} type='number' min={0} />
            </div>
            <div className='flex flex-col gap-12'>
              <FormTextField title='Enter the Phone no' {...register("phoneNumber")} error={errors.phoneNumber?.message} />
              <FormTextField title='Reference of the assignment' {...register("reference")} error={errors.reference?.message} />
              <div>
                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito]'>
                  <textarea className=' w-full bg-transparent px-4 outline-none pt-6 pb-8 placeholder:text-base resize-none' {...register("description")} />
                  <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Order Description <span className='text-[#C5C5C5]'>(write or attach)</span></label>
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