import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/slices/user.slice'
import FormTextField from '../inputs/FormTextField'
import GradientButton from '../inputs/GradientButton'
import Loader from '../shared/Loader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreatePayment = ({ id }: { id: string }) => {

    const { token } = useSelector(selectCurrentUser)
    const [amount, setAmount] = useState<string>("0")
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const CreateOrderPayment = async () => {
        const parsedAmount = parseFloat(amount);
        if (parsedAmount < 1 || isNaN(parsedAmount)) {
            return toast.error("Invalid amount");
        }
        setIsLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/payment/create?order_id=` + id, {
                method: "POST",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: parsedAmount })
            });
            const resdata = await res.json();
            console.log(resdata);
            if (res.ok) {
                toast.success(resdata.message);
                navigate(`/admin/order-payment/${id}`);
            } else {
                toast.error(resdata.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loader />
    }
    // create payment
    return (
        <div className='w-full max-w-5xl px-4 sm:px-10 space-y-8'>
            <h1 className='text-3xl sm:text-4xl gradient-text text-center'>Create Payment</h1>
            <FormTextField title='Enter Amount' className='border' type="number" placeholder='amount' min={1} value={amount} onChange={(e) => setAmount(e.target.value.replace(/^0+/, ''))} />
            <FormTextField title='Order Id' className='border' type="text" placeholder='id' value={id} readOnly />
            <GradientButton className='text-lg sm:text-xl w-fit mx-auto px-8' onClick={() => CreateOrderPayment()}>Create Payment</GradientButton>
        </div>
    )
}

export default CreatePayment