import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/slices/user.slice'
import CreatePayment from './CreatePayment'
import { useNavigate, useParams } from 'react-router-dom'
import FormTextField from '../inputs/FormTextField'
import GradientButton from '../inputs/GradientButton'
import Loader from '../shared/Loader'
import { toast } from 'react-toastify'

const OrderForm = ({ mail, customer_name, description }: { mail: string, customer_name: string, description: string }) => {

    const [data, setData] = useState({
        customer_name: customer_name,
        description: description,
        customer_email: mail,
        order_type: "MULTIPART"
    })
    const [response, setResponse] = useState<any>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const { token } = useSelector(selectCurrentUser)

    const createOrder = async () => {
        if (!data.customer_name || !data.customer_email || !data.order_type || !data.description) {
            toast.error("All fields are must")
            return;
        }
        setIsLoading(true)
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/order/create`, {
                method: "POST",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const resdata = await res.json()
            if (res.ok) {
                setResponse(resdata.data.order)
                toast.success("Order created")
                navigate('/admin/all-orders')
            }
            else {
                toast.error("Invalid data format")
            }
            return
        }
        catch (error) {
            toast.error("Something went wrong")
        }
        finally {
            setIsLoading(false)
        }
    }
    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <form onSubmit={(e) => {
                createOrder()
                e.preventDefault()
            }} className='flex flex-col container  mx-auto gap-8 px-4  w-[280px] sm:w-[350px] pt-6'>
                <h1 className='text-center font-medium text-2xl gradient-text sm:text-3xl'>Create Order</h1>
                <FormTextField title='Customer Name' className='border cursor-not-allowed' type="text" placeholder='customer name' value={data.customer_name} id='customer_name' readOnly name='customer_name' onChange={(e) => handleOnChange(e)} />

                <FormTextField title='Description' className='border' type="text" value={data.description || description} id='description' name='description' onChange={(e) => handleOnChange(e)} />

                <FormTextField readOnly title='Customer Email' className='border cursor-not-allowed' type="text" value={data.customer_email || mail} id='customer_email' name="customer_email" />

                <div className='border border-[#ADADAD] relative z-0  rounded-[4px] font-[Nunito] h-12'>
                    <input className=' w-full z-10 bg-transparent  px-2 outline-none h-12  placeholder:text-base resize-none' readOnly value={"MULTIPART"} id='order_type' name="order_type" >
                        {/* <option value={"Full"}>Single</option> */}

                    </input>
                    <label className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>Order type</label>
                </div>



                <GradientButton className='text-lg sm:text-xl w-fit mx-auto px-8'>submit</GradientButton>
            </form>



            {/* <div className='border flex items-center justify-center p-8'>
                <input type="text" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} placeholder='paymentid' />
                <button onClick={() => initPayment()} className='pl-10 border border-red-500'>init Payment </button>
            </div> */}

        </div>

    )
}

export default OrderForm