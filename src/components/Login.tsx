import React, { useEffect, useState } from 'react';
import loginImg from "/assets/images/login.svg";
import logo from '/assets/images/logo.jpg';
import chevronLeft from '/assets/icons/chevron-left.svg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import TextField from './inputs/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { boolean, z } from 'zod';
import GradientButton from './inputs/GradientButton';
import Button from './inputs/Button';
import google from '/assets/icons/Google.svg'
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCredentials } from '../redux/slices/user.slice';
import Loader from './shared/Loader';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import { getNewAccessToken, getRefreshToken } from './utils/TokenConfig';


// Define Zod schema for form data
const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password length must be greater than 6"),
});
type FormFields = z.infer<typeof LoginSchema>
// form
const Login = () => {
    const navigate = useNavigate();
    const { state: prevState } = useLocation();
    const dispatch = useDispatch();
    const { token, refresh_token } = useSelector(selectCurrentUser)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { state } = useLocation();
    // const 
    useEffect(() => {
        if (token) {
            toast.error("Already login")
            navigate('/')
        }
    }, [])
    console.log(token)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(LoginSchema), // Use Zod resolver for form validation
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: FormFields) => {
        // test
        setIsLoading(true)
        try {
            const resdata = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`,
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
            console.log(jwtDecode(res.data.token))
            if (res.data && res.data.token) {
                dispatch(setCredentials({ token: res.data.token, userType: "app_user" }))
                toast.success("Login Successfully")
                navigate(prevState || '/')

            }
            else {
                toast.error("Invalid Credentials")
                reset()
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
    const saveAuthDetails = (response: any) => {
        dispatch(setCredentials({ token: response.access_token, refresh_token: response.refresh_token, userType: "google_user" }))
    }
    const saveAccessToken = (token: string) => {
        dispatch(setCredentials({ token, userType: "google_user" }))
    }
    // const SCOPE = 'https://mail.google.com/';

    const handleGoogleLogin = useGoogleLogin({
        scope: 'profile',
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            try {
                console.log(codeResponse);

                const refreshToken = await getRefreshToken(codeResponse, saveAuthDetails);
                const newAccessToken = await getNewAccessToken(refreshToken, saveAccessToken);

                if (newAccessToken) {
                    setIsLoading(true);
                    const data: any = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/google-verification`, {
                        method: "POST",
                        headers: {
                            "Authorization": 'Bearer ' + newAccessToken
                        }
                    });
                    console.log(data);
                    if (data.ok) {
                        localStorage.setItem("customer_id", data.accountId);
                        toast.success("Login successfully");
                        navigate(prevState || '/');

                    } else {
                        toast.error('Verification failed');
                    }
                } else {
                    toast.error('Failed to retrieve new access token');
                }
            } catch (err) {
                console.log(err);
                toast.error("Something went wrong");
            } finally {
                setIsLoading(false);
            }
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });


    if (isLoading) {
        return <Loader />
    }
    return (
        <section className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-8 xl:grid-cols-12 gap-10 min-h-screen relative '>

            <div className='col-span-1 lg:col-span-3 xl:col-span-3 '>
                <Link to={state || '/'} className='my-6 inline-block max-sm:px-10 max-md:px-20 md:pl-10'><img src={chevronLeft} alt="" className='w-10 cursor-pointer' /></Link>
                <div className=' flex justify-center flex-col  max-sm:px-10 max-md:px-20 md:pl-10 gap-8 mx-auto w-full '>
                    <div className='flex gap-2 max-md:justify-center'>
                        <img src={logo} alt="" className='w-44' />
                        {/* <h1 className='text-xl lg:text-2xl text-[#1F1F1F] font-medium'>AssignmentHelper</h1> */}
                    </div>
                    <h1 className='text-2xl font-medium lg:text-3xl max-md:text-center text-nowrap'>
                        Welcome back,<br /> <span className='gradient-text'>Login in</span>
                    </h1>
                    <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
                        <TextField placeholder='Email' {...register('email')} type='email' error={errors.email?.message} />
                        <TextField placeholder='Password' {...register('password')} type="password" error={errors.password?.message} />
                        <GradientButton className='w-full' bgClassName='text-lg md:text-xl' type="submit">Log in</GradientButton>
                    </form>

                    <Button className='flex items-center gap-2 justify-center border-2 p-2 h-12 rounded-2xl border-black active:scale-95 ease-in-out duration-150' onClick={() => handleGoogleLogin()}><img src={google} alt="" /><p className=' text-base sm:text-[15px] text-lg lg:text-xl text-nowrap  text-black font-medium'>Sign in with Google</p>
                    </Button>

                    <p className='text-center text-[#0000007D]'>
                        <span className='text-nowrap'>Don’t have an account ?</span> <Link to={'/signup'} className='text-black hover:underline text-nowrap'>Sign up</Link></p>

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
    );
};

export default Login;
