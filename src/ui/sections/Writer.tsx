import React, { ChangeEvent, useState } from 'react'
import TextField from '../../components/inputs/TextField'
import GradientButton from '../../components/inputs/GradientButton'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Loader from '../../components/shared/Loader'
import { UploadCloud } from 'lucide-react'
const PhoneInputWithCountry = React.lazy(() => import("react-phone-number-input/react-hook-form"));

const Schema = z.object({
    name: z.string().max(25).min(1, {
        message: "Invalid name"
    }),
    email: z.string().email().min(1),

    file: z
        .optional(z.nullable(
            z.any().refine((FileList) => {
                if (!FileList || !FileList[0]) {
                    return true; // Pass validation if no file is selected
                }
                return FileList[0].size <= 10 && "application/pdf";
            }, {
                message: 'Invalid file format or size',
            })
        )),
    phone: z.string({
        message: "Invalid number"
    }).min(10, {
        message: "Invalid number"
    }),


})
type FormFields = z.infer<typeof Schema>
const Writer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileError, setFileError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(Schema), // Use Zod resolver for form validation
    });

    const sendMessage = (data: FormFields) => {
        const { file: wrong, ...values } = data
        const formData = new FormData()
        const query = JSON.stringify(values)
        // const onlyFile = file[0]
        formData.append("data", query)
        // @ts-ignore
        formData.append("resume", file)


        setIsLoading(true)
        const url = `${import.meta.env.VITE_BASE_URL}/write/send`
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),

        })
            .then(response => {
                if (response.status === 200) {
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
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type !== "application/pdf") {
                setFileError("Invalid file format. Please upload a PDF file.");
            } else {
                setFileName(file.name);
                setFile(event.target.files[0])
                setFileError(null);
            }
        } else {
            setFileName(null);
            setFileError(null);
        }
    };

    return (
        <section className='container  py-20 max-w-7xl px-4 sm:px-10 relative' id=''>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Career
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Be a part of our Journey</p>
            <form onSubmit={handleSubmit(sendMessage)}>
                <div className='grid grid-cols-2 gap-x-10 sm:gap-x-20 lg:gap-x-40 gap-y-20 mt-10 overflow-x-hidden'>

                    <TextField placeholder='Name' {...register("name",
                        {
                            required: {
                                message: "Name required",
                                value: true
                            }
                        })} error={errors.name?.message} />
                    <TextField placeholder='Email' {...register("email")} type='email' error={errors.email?.message} />
                    <div>
                        <div className='border-b border-black py-2 '>
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
                        </div>
                        <p className='text-red-500 text-sm mt-2  leading-none'> {errors.phone && errors.phone?.message}</p>
                    </div>
                    <label htmlFor="resumeUpload" className='cursor-pointer md:h-11  !mt-0  inline-block border px-4 w-fit border-black'>

                        {!fileName && <div className='flex  flex-col md:flex-row items-center gap-1 h-full'>
                            <p className="text-secondary-foreground  gap-2 "><span>Resume</span></p> <p className="text-xs text-gray-500 dark:text-gray-400 truncate">(format: PDF</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-sm:hidden">[Max Size: 10 MB])</p></div>}
                        {fileName && <div className='flex  items-center  h-full flex-wrap '>
                            <p className=" text-sm text-gray-700  truncate ">{fileName}</p>
                        </div>
                        }
                        <input type='file' id="resumeUpload" {...register("file")} accept="application/pdf" className='file:mr-4 hidden  file:px-4 file:rounded-full file:border-0 left-2 ' onChange={handleFileChange} />
                    </label>
                    {fileError && <p className='text-red-500 text-sm mt-2  leading-none'> {fileError}</p>}



                </div >
                {/* <TextField placeholder='Write your Message' className='mt-12' {...register("message")} error={errors.message?.message} /> */}
                <div className='flex items-center justify-center mt-14' >
                    <GradientButton className='lg:px-8 text-lg lg:text-xl'>Join Now</GradientButton>
                </div >
            </form >
            {isLoading && <Loader />}
        </section >
    )
}

export default Writer