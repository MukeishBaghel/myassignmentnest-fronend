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
import { Copy, MousePointer2, Repeat, RotateCcw } from 'lucide-react'
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
            name: "Payment Id",
            selector: (row) => row.id,
            sortable: true,
            center: true

        },
        {
            name: "Paypal Id",
            // width: "10%",
            selector: (row) => row.paypalId,
            sortable: true,
            center: true

        },
        {
            name: "Payment Status",
            selector: (row) => row.payment_status,
            sortable: true,
            center: true

        },
        {
            name: "Payment Date",
            width: "15%",
            selector: (row) => {
                if (row.payment_date === null || row.payment_date === undefined) {
                    return "Not Paid"
                }
                return new Date(+row.payment_date * 1000).toString()
            },
            sortable: true,
            style: { fontSize: "14px" },
            center: true

        },
        {
            name: "Approve Link",
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
            name: "Payer Id",
            selector: (row) => row.payer_id,
            sortable: true,
        },
        {
            name: 'Actions',
            grow: 1,
            cell: (row) => <>
                {
                    row.payment_status.toLowerCase() === "pending" ?
                        <button className={`h-10 text-sm px-2 my-2 w-fit bg-yellow-400 text-white rounded-lg active:scale-95 `} onClick={() => initiatePayment(row.id)}><MousePointer2 /></button> :
                        row.payment_status.toLowerCase() !== "completed" ? <div className='space-x-2'>
                            <button className={`h-10 text-sm px-2 my-2 w-fit bg-sky-400 text-white rounded-lg active:scale-95`} onClick={() => refreshPayment(row.id)}><RotateCcw /></button>
                            <button className={`h-10 text-sm px-2 my-2 w-fit bg-blue-500 rounded-lg text-white active:scale-95`} onClick={() => resendPayment(row.id)}><Repeat /></button>
                        </div> : <p>Received</p>
                }
            </>,

            // APPROVED, CAPTURED, CANCELLED, COMPLETED, PAYER_ACTION_REQUIRED
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "15%"

        },
    ];
    // const [isOrderModal, setIsOrderModal] = useState<boolean>(false)
    // const setOrderModalOpen = () => setIsOrderModal(true)
    // const setOrderModalClose = () => setIsOrderModal(false)
    const [payments, setPayments] = useState([])
    const [pending, setPending] = useState<boolean | undefined>(false)
    const { id } = useParams()

    const initiatePayment = async (id: string) => {
        setPending(true)
        try {
            const { data } = await axiosInstance.get('/payment/initiate?payment_id=' + id)
            if (data) {
                toast.success(data.message)
                // console.log()
                // @ts-ignore
                setPayments((prev) => {
                    const updatedPayments = prev.map((item) =>
                        // @ts-ignore
                        item?.id === data.data.id ? data.data : item
                    );
                    return updatedPayments;
                });
            }
            else {
                toast.error(data.message)
            }
        }
        catch (err) {
            toast.error("Error while initiating payment");
        }
        finally {
            setPending(false)
        }
    }

    const resendPayment = async (id: string) => {
        setPending(true)
        try {
            const res = await axiosInstance.get('/payment/send-mail?payment_id=' + id)
            if (res.data) {
                // console.log()
                console.log(res.data);
                toast.success(res.data.message)
            }
            else if (res.status === 400) {
                toast.error("Payment already done or server error ")
            }
            else {
                toast.error(res.data.message)
            }
        }
        catch (err) {
            toast.error("Internal Server Error")
        }
        finally {
            setPending(false)
        }
    }

    const refreshPayment = async (id: string) => {
        setPending(true)
        try {
            const { data } = await axiosInstance.get('/payment/refresh-payment?payment_id=' + id)
            if (data) {
                // @ts-ignore
                setPayments((prev) => {
                    const updatedPayments = prev.map((item) =>
                        // @ts-ignore
                        item?.id === data.data.id ? data.data : item
                    );
                    return updatedPayments;
                });
                // console.log()
                toast.success(data.message)
            }
            else {
                toast.error(data.message)
            }
        }
        catch (err) {
        }
        finally {
            setPending(false)
        }
    }

    useEffect(() => {
        const fetchAllPayments = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get('/payment/get-all-payment')
                if (data) {
                    setPayments(data.data.reverse())
                }
                else {
                    toast.error(data.message)
                }
            }
            catch (err) {
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
                    setPayments(data.data.reverse())
                }
            }
            catch (err) {
                toast.error((AxiosError && isAxiosError(err) && err.message) || "Something went wrong")
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
        return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No payments to display</div>
    }
    return (
        <div className='px-4'>
            <h1 className='gradient-text text-3xl sm:text-4xl font-semibold py-10 text-center tracking-wider'>Payments</h1>
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