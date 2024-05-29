import React, { useEffect, useState } from 'react'
import DataTableBase from '../table/DataTableBase'
import Modal from '../inputs/Modal'
import { TableColumn } from 'react-data-table-component'
import GradientButton from '../inputs/GradientButton'
import { axiosInstance } from '../utils/axios.instance'
import Loader from '../shared/Loader'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy } from 'lucide-react'
import { AxiosError, isAxiosError } from 'axios'

type DataRow = {
    id: string,
    paypalId: string,
    amount: number,
    payment_status: string,
    payment_date: string,
    approve_link: string,
    payer_id: string,
    create_time: number,
    update_time: number
}

const PaymentTable = () => {

    const columns: TableColumn<DataRow>[] = [
        {
            name: "paymentId",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "paypalId",
            // width: "10%",
            selector: (row) => row.paypalId,
            sortable: true,
        },
        {
            name: "payment_status",
            selector: (row) => row.payment_status,
            sortable: true,
        },
        {
            name: "payment_date",
            width: "15%",
            selector: (row) => (new Date(+row.payment_date * 1000).toString()),
            sortable: true,
            style: { fontSize: "14px" }
        },
        {
            name: "approve_link",
            selector: (row) => row.approve_link,
            sortable: true,
            cell: (row) => (
                <div className="cursor-pointer">
                    <CopyToClipboard text={row.approve_link} onCopy={() => toast.success('Link copied to clipboard!')}>
                        <Copy />
                    </CopyToClipboard>
                </div>
            ),
            center: true
        },

        {
            name: "payer_id",
            selector: (row) => row.payer_id,
            sortable: true,
        },
        {
            name: 'Actions',
            grow: 1,
            cell: (row) => <>
                {
                    row.payment_status.toLowerCase() === "pending" ?
                        <GradientButton className={`h-10 text-sm px-2 my-2 w-fit `} onClick={() => initiatePayment(row.id)}>Initiate Payment</GradientButton> :
                        <GradientButton className={`h-10 text-sm px-2 my-2 w-fit `} onClick={() => refreshPayment(row.id)}>Refresh Payment</GradientButton>
                }
            </>,

            // APPROVED, CAPTURED, CANCELLED, COMPLETED, PAYER_ACTION_REQUIRED
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "15%"

        },
    ];
    const [isOrderModal, setIsOrderModal] = useState<boolean>(false)
    const setOrderModalOpen = () => setIsOrderModal(true)
    const setOrderModalClose = () => setIsOrderModal(false)
    const [payments, setPayments] = useState([])
    const [pending, setPending] = useState<boolean | undefined>(false)
    const { id } = useParams()

    const initiatePayment = async (id: string) => {
        setPending(true)
        try {
            const { data } = await axiosInstance.get('/payment/initiate?payment_id=' + id)
            if (data) {
                console.log(data);
                toast.success(data.message)
                // console.log()
                // @ts-ignore
                setPayments((prev) => (
                    [...prev, data.data]
                ))
            }
            else {
                toast.error(data.message)
            }
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setPending(false)
        }
    }
    const refreshPayment = async (id: string) => {
        setPending(true)
        try {
            const { data } = await axiosInstance.get('/payment/refresh-payment?payment_id=' + id)
            console.log(data)
            if (data) {
                console.log(data);
                // console.log()
                toast.success(data.message)
                // setPayments(data.data)
            }
            else {
                toast.error(data.message)
            }
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setPending(false)
        }
    }
    console.log(id)


    useEffect(() => {
        console.log(payments);
        const fetchAllPayments = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get('/payment/get-all-payment')
                if (data) {
                    console.log(data);
                    setPayments(data.data)
                }
                else {
                    toast.error(data.message)
                }
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setPending(false)
            }
        }
        const fetchPaymentByOrder = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get(`/payment/get-by-order?order_id=${id}`)
                if (data) {
                    console.log(data);
                    toast.success(data.message)
                    setPayments(data.data)
                }
                console.log(data);
            }
            catch (err) {
                toast.error((AxiosError && isAxiosError(err) && err.message) || "Something went wrong")
                console.log(err);
            }
            finally {
                setPending(false)
            }
        }
        if (id) {
            fetchPaymentByOrder()
        } else {

            fetchAllPayments()
        }
    }, [id])
    if (pending) {
        return <Loader />
    }
    if (payments.length === 0) {
        return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No orders to display</div>
    }
    return (
        <div className='px-4'>
            <h1 className='gradient-text text-3xl sm:text-4xl font-semibold py-10 text-center tracking-wider'>All Orders</h1>
            <DataTableBase
                columns={columns}
                data={payments}
                // actions={actionsMemo}
                progressPending={pending}
                progressComponent={<Loader />}
                responsive={true}
                striped
                fixedHeaderScrollHeight='100px'
            />
            {/* <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
            </Modal> */}
        </div>
    )
}

export default PaymentTable