import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../redux/slices/user.slice'
import FormTextField from './inputs/FormTextField'
import GradientButton from './inputs/GradientButton'
import Loader from './shared/Loader'

const CreatePayment = ({ id }: { id: string }) => {

    const { token } = useSelector(selectCurrentUser)
    const [amount, setAmount] = useState(0)
    const [isLoading, setIsLoading] = useState(false);

    const CreateOrderPayment = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/payment/create?order_id=" + id, {
                method: "POST",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: amount })
            })
            const resdata = await res.json()
            console.log(resdata)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }
    if (isLoading) {
        <Loader />
    }
    return (
        <div className='w-full max-w-5xl px-4 sm:px-10 space-y-8'>
            <h1 className='text-3xl sm:text-4xl gradient-text text-center'>Create Payment</h1>
            <FormTextField title='Enter Amount' className='border' type="text" placeholder='amount' value={amount} onChange={(e) => setAmount(+e.target.value)} />
            <FormTextField title='Order Id' className='border' type="text" placeholder='id' value={id} readOnly />
            <GradientButton className='text-lg sm:text-xl w-fit mx-auto px-8' onClick={() => CreateOrderPayment()}>Create Payment</GradientButton>

        </div>
    )
}

export default CreatePayment