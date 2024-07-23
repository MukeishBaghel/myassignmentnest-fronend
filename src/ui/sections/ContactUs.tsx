import React, { useState } from 'react'
import TextField from '../../components/inputs/TextField'
import GradientButton from '../../components/inputs/GradientButton'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Loader from '../../components/shared/Loader'

const Schema = z.object({
    first_name: z.string().max(25).min(1, {
        message: "Invalid name"
    }),
    email: z.string().email().min(1),
    last_name: z.optional(z.nullable(z.string().max(20))),
    phone: z.number({
        message: "Invalid number"
    }).min(10, {
        message: "Invalid number"
    }),
    message: z.string().max(300).min(10, {
        message: "Briefly explain your query"
    })

})
type FormFields = z.infer<typeof Schema>
const ContactUs = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(Schema), // Use Zod resolver for form validation
    });

    const sendMessage = (data: FormFields) => {
        setIsLoading(true)
        const url = `${import.meta.env.VITE_BASE_URL}/customer/contact`
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),

        })
            .then(response => {
                if (response.status === 202) {
                    toast.success("Form Submitted Successfully")
                    // reset();
                }
                else {
                    toast.error("Invalid data format")
                }
                reset()
                return response.text()
            })
            .catch((error) => {
                console.error('Error:', error)
                toast.error("Something went wrong")
            }).finally(() => setIsLoading(false))
    }
    return (
        <section className='container  py-20 max-w-7xl px-4 sm:px-10 relative' id='contactus'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Contact us
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Connect with us share your thoughts</p>
            <form onSubmit={handleSubmit(sendMessage)}>
                <main className='grid grid-cols-2 gap-10 sm:gap-20 lg:gap-40 mt-10'>
                    <div className='flex flex-col gap-12'>
                        <TextField placeholder='First Name' {...register("first_name",
                            {
                                required: {
                                    message: "Name required",
                                    value: true
                                }
                            })} error={errors.first_name?.message} />
                        <TextField placeholder='Email' {...register("email")} type='email' error={errors.email?.message} />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <TextField placeholder='Last Name' {...register("last_name")} error={errors.last_name?.message} />
                        <TextField placeholder='Phone Number' type='number' {...register("phone", {
                            valueAsNumber: true,

                        }
                        )} error={errors.phone?.message} />
                    </div>
                </main>
                <TextField placeholder='Write your Message' className='mt-12' {...register("message")} error={errors.message?.message} />
                <div className='flex items-center justify-center mt-14'>
                    <GradientButton className='lg:px-8 text-lg lg:text-xl'>Send Message</GradientButton>
                </div>
            </form>
            {isLoading && <Loader />}
        </section>
    )
}

export default ContactUs