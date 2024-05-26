import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../redux/slices/user.slice'

const CreatePayment = () => {
    const [data, setData] = useState("")
    const [id, setId] = useState("");
    const { token } = useSelector(selectCurrentUser)

    const CreateOrderPayment = async () => {
        console.log(data)
        console.log({ amount: +data })
        try {
            const res = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/payment/create?order_id="+id, {
                method: "POST",
                headers: {
                    "Authorization": "JWT " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: +data })
            })
            const resdata = await res.json()
            console.log(resdata)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <input className='border' type="text" placeholder='amount' value={data} onChange={(e) => setData(e.target.value)} />
            <input className='border' type="text" placeholder='id' value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => CreateOrderPayment()}>create payment</button>

        </div>
    )
}

export default CreatePayment