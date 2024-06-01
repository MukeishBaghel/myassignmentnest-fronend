import React, { useEffect, useState } from 'react'
import DataTableBase from '../table/DataTableBase'
import { TableColumn } from 'react-data-table-component';
import { axiosInstance } from '../utils/axios.instance';
import Loader from '../shared/Loader';
import GradientButton from '../inputs/GradientButton';
import Modal from '../inputs/Modal';
import CreatePayment from './CreatePayment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type DataRow = {
    orderId: string,
    description: string,
    customer_name: string,
    customer_email: string,
    order_type: string,
    order_status: string,
    order_datetime: string,
    modification_datetime: string
}
const OrderTable = () => {
    const columns: TableColumn<DataRow>[] = [
        {
            name: "orderId",
            // selector: (row) => row.orderId,
            sortable: true,
            cell: (row) => <button className='h-10 text-sm px-2 my-2 w-fit text-nowrap'><Link to={`/admin/order-payment/${row.orderId}`}>{row.orderId}</Link></button>,
            ignoreRowClick: false,
            allowOverflow: true,
        },
        {
            name: "Description",
            // width: "10%",
            selector: (row) => row.description,
        },
        {
            name: "Customer Name",
            selector: (row) => row.customer_name,
            sortable: true,
        },
        {
            name: "Customer Email",
            width: "10%",
            selector: (row) => row.customer_email,
            sortable: true,
        },

        {
            name: "Order Datetime",
            selector: (row) => (new Date(+row.order_datetime * 1000).toString()),
            sortable: true,
            // style: { fontSize: "12px" }
        }, {
            name: "Order Status",
            selector: (row) => row.order_status,
        },
        // {
        //     name: "modification_datetime",
        //     selector: (row) => row.modification_datetime,
        //     sortable: true,
        // },
        {
            name: 'Actions',
            grow: 1,
            cell: (row) => <>{row?.order_status !== "COMPLETED" && <div className='flex flex-col gap-2 items-center justify-center my-1'>
                <GradientButton className='h-10 text-sm px-2  w-fit text-nowrap' onClick={() => createPayment(row.orderId)}>Create Payment</GradientButton>
                <GradientButton className='h-10 text-sm px-2 w-full bg-white text-red-500  text-nowrap' onClick={() => deleteOrder(row.orderId)}>Delete Order</GradientButton>
            </div>}</>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "15%"
        },
    ];
    const [isOrderModal, setIsOrderModal] = useState<boolean>(false)
    const setOrderModalOpen = () => setIsOrderModal(true)
    const setOrderModalClose = () => setIsOrderModal(false)
    const [orders, setOrders] = useState<DataRow[]>([])
    const [pending, setPending] = useState<boolean | undefined>(false)
    const [paymentId, setPaymentId] = useState<string>("")

    const createPayment = (id: string): void => {
        if (id) {
            setPaymentId(id)
            setOrderModalOpen()
        }
    }
    const deleteOrder = async (id: string) => {
        if (confirm("Are you sure you want to delete?")) {
            setPending(true)
            try {
                const res = await axiosInstance.delete('/order/delete?order_id=' + id)
                if (res.status === 202) {
                    toast.success(res.data.message)
                    setOrders((prev) => {
                        const orders = prev.filter((order) => order.orderId !== id)
                        return orders
                    })
                }
                else {
                    toast.error("Unable to process the request")
                }
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setPending(false)
            }
        }
    }


    useEffect(() => {
        console.log(orders);

        const fetchUsersWithQuery = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get('/order/get')
                if (data) {
                    console.log(data);
                    setOrders(data.data.reverse())
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
        fetchUsersWithQuery()
    }, [])

    if (pending) {
        return <Loader />
    }
    if (orders.length === 0) {
        return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No orders to display</div>
    }
    return (
        <div className='px-4'>
            <h1 className='gradient-text text-3xl sm:text-4xl font-semibold py-10 text-center tracking-wider'>All Orders</h1>
            <DataTableBase
                columns={columns}
                data={orders}
                // actions={actionsMemo}
                progressPending={pending}
                progressComponent={<Loader />}
                responsive={true}
                striped
                fixedHeaderScrollHeight='100px'
            />
            <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
                <CreatePayment id={paymentId} />
            </Modal>
        </div>
    )
}

export default OrderTable