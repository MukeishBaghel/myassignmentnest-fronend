import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../redux/slices/user.slice'
import CreatePayment from './CreatePayment'

const OrderForm = () => {
    const [data, setData] = useState({
        order_name: "",
        description: "",
        customer_id: "",
        order_type: ""
    })
    const [paymentId, setPaymentId] = useState("")

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const { token } = useSelector(selectCurrentUser)
    const createOrder = async () => {
        console.log(data)
        try {
            const res = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/order/create", {
                method: "POST",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const resdata = await res.json()
            console.log(resdata)
        }
        catch (error) {
            console.log(error)
        }
    }
    const initPayment = async () => {
        try {
            const res = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/payment/initiate?payment_id=" + paymentId, {
                method: "GET",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify(data)
            })
            const resdata = await res.json()
            console.log(resdata)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={(e) => {
                createOrder()
                e.preventDefault()
            }} className='mt-10 flex flex-col w-1/2 mx-auto gap-4'>
                <input className='border' type="text" placeholder='ordername' value={data.order_name} id='order_name' name='order_name' onChange={(e) => handleOnChange(e)} />
                <input className='border' type="text" value={data.description} id='description' name='description' placeholder='desc' onChange={(e) => handleOnChange(e)} />
                <input className='border' type="text" value={data.customer_id} id='customer_id' name="customer_id" placeholder='customer_id' onChange={(e) => handleOnChange(e)} />
                <input className='border' type="text" value={data.order_type} id='order_type' name="order_type" placeholder='order_type' onChange={(e) => handleOnChange(e)} />
                <button>submit</button>
            </form>
            <hr />
            <hr />
            <hr />
            <CreatePayment />
            <br />
            <hr />
            <br />
            <div className='border flex items-center justify-center p-8'>
                <input type="text" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} placeholder='paymentid' />
                <button onClick={() => initPayment()} className='pl-10 border border-red-500'>init Payment </button>
            </div>
        </>

    )
}

export default OrderForm