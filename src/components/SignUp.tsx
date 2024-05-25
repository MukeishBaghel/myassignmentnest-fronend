import React, { useRef, useState } from 'react'
import loginImg from "/assets/images/login.svg";
import logo from '/assets/images/logo.jpg';
import chevronLeft from '/assets/icons/chevron-left.svg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import TextField from './inputs/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import GradientButton from './inputs/GradientButton';
import Button from './inputs/Button';
import google from '/assets/icons/Google.svg'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from './shared/Loader';

const RegisterSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, "Password length must be greater than 6"),
});
type FormFields = z.infer<typeof RegisterSchema>
const SignUp = () => {
    const { state } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(RegisterSchema), // Use Zod resolver for form validation
    });
    const navigate = useNavigate();
    const { state: prevState } = useLocation();

    const onSubmit = async (data: FormFields) => {
        console.log('Form Data:', data);
        setIsLoading(true)
        try {
            const resdata = await fetch(`https://2nhv2211-8080.inc1.devtunnels.ms/auth/customer/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data),
                }
            )
            console.log(resdata)
            const res = await resdata.json()
            if (resdata.status === 400) {
                return toast.error("User already exist")
            }
            // console.log(jwtDecode(res.data.token))
            if (res.data && res.data.token) {
                toast.success("SignUp Successfully")
                navigate('/login')
            }
            else {
                toast.error("Credentials not valid")
            }
            // console.log(res.status)
        }
        catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        finally {
            setIsLoading(false)
        }

    };
    const handleGoogleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: (tokenResponse) => {
            navigate(prevState || '/')



            console.log(tokenResponse)
        },
        // todo: implement toast functionality 
        onError: () => navigate('/')
    })
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 relative  lg:grid-cols-8 xl:grid-cols-12 gap-8  relative '>

            <div className='col-span-1 lg:col-span-3 xl:col-span-3'>
                <Link to={state || '/'} className='mt-6 mb-6 inline-block max-sm:px-10 max-md:px-20 md:pl-10'><img src={chevronLeft} alt="" className='w-10 cursor-pointer' /></Link>
                <div className=' flex justify-center flex-col  max-sm:px-10 max-md:px-20 md:pl-10 gap-8 mx-auto w-full'>
                    <div className='flex gap-2 max-md:justify-center'>
                        <img src={logo} alt="" className='w-44' />
                        {/* <h1 className='text-xl lg:text-2xl text-[#1F1F1F] font-medium'>AssignmentHelper</h1> */}
                    </div>
                    <h1 className='text-2xl font-medium xl:text-3xl max-md:text-center text-nowrap '>
                        Create an account<br /> <span className='gradient-text'>Sign up</span>
                    </h1>
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                        <div><TextField placeholder='Name' className='' {...register('name')} />
                            {errors.email && <p className="text-red-500 mt-2 text-sm">Name cannot be less than 3 words</p>}
                        </div>
                        <div><TextField placeholder='Email' className='' {...register('email')} />
                            {errors.email && <p className="text-red-500 mt-2 text-sm">Invalid email.</p>}</div>
                        <div>
                            <TextField placeholder='Password' className='' {...register('password')} type="password" />
                            {errors.password && <p className="text-red-500 mt-2 text-sm">Password must be at least 6 characters long.</p>}
                        </div>
                        <GradientButton className='w-full' bgClassName='text-lg md:text-xl mt-2' type="submit">Create account</GradientButton>
                    </form>
                    <Button className='flex items-center gap-2 justify-center h-12 border-2 p-2 rounded-2xl border-black w-full' onClick={() => handleGoogleLogin()}><img src={google} alt="" className='w-8 h-8' /><p className='text-base sm:text-[15px] lg:text-lg text-nowrap text-black font-medium'>Sign in with Google</p></Button>
                    <p className='text-center text-[#0000007D] pb-2'><span className=''>Already have an account ? </span><Link to={'/login'} className='text-black hover:underline text-nowrap'>Log in</Link></p>

                </div>
            </div>
            <div className=' md:col-span-2 lg:col-span-5 xl:col-span-9  m-3 rounded-br-[4rem] rounded-tl-[4rem] overflow-hidden relative bg-primary_100 p-[1px] hidden md:block'>
                <div className='h-full w-full bg-white rounded-br-[3.91rem] rounded-tl-[3.91rem] flex flex-col justify-around items-center '>
                    <img src={loginImg} alt="" className='mx-auto w-[40vw]' />
                    <h1 className='gradient-text text-2xl lg:text-3xl font-medium text-center'>&quot;Empowering academic success,<br /> one assignment at a time.&quot;</h1>
                </div>
            </div>
            {isLoading && <Loader />}
        </section>
    )
}

export default SignUp