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
import styled from 'styled-components';
import Button from '../inputs/Button';
import TextField from '../inputs/TextField';
import { ScrollText, Text, Trash2, X } from 'lucide-react';

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
            cell: (row) => <button className='h-10 text-sm px-2 my-2 w-fit text-nowrap underline text-primary-200'><Link to={`/admin/order-payment/${row.orderId}`}>{row.orderId}</Link></button>,
            center: true,
            compact: true

        },
        {
            name: "Description",
            // width: "10%",
            selector: (row) => row.description,
            center: true,
            compact: true

        },
        {
            name: "Customer Name",
            selector: (row) => row.customer_name,
            sortable: true,
            center: true,
            compact: true

        },
        {
            name: "Customer Email",
            width: "10%",
            selector: (row) => row.customer_email,
            sortable: true,
            center: true,
            compact: true

        },

        {
            name: "Order Datetime",
            selector: (row) => (new Date(+row.order_datetime * 1000).toString()),
            sortable: true,
            center: true,
            compact: true

            // style: { fontSize: "12px" }
        }, {
            name: "Order Status",
            selector: (row) => row.order_status,
            sortable: true,
            center: true,
            compact: true,
        },
        // {
        //     name: "modification_datetime",
        //     selector: (row) => row.modification_datetime,
        //     sortable: true,
        // },
        {
            name: 'Actions',
            cell: (row) => <>{row?.order_status !== "COMPLETED" && <div className='flex gap-2 items-center justify-center my-1'>
                <Button className='h-10 text-sm px-2  w-fit text-nowrap bg-yellow-500 rounded-xl active:scale-95 hover:opacity-85' onClick={() => createPayment(row.orderId)}><ScrollText /></Button>
                <Button className='h-10 text-sm px-2 w-full bg-red-500 text-white text-nowrap rounded-xl active:scale-95 hover:opacity-85' onClick={() => deleteOrder(row.orderId)}><Trash2 /></Button>
            </div>}</>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "13%"

        },
    ];
    const [isOrderModal, setIsOrderModal] = useState<boolean>(false);
    const setOrderModalOpen = () => setIsOrderModal(true);
    const setOrderModalClose = () => setIsOrderModal(false);
    const [orders, setOrders] = useState<DataRow[]>([]);
    const [pending, setPending] = useState<boolean | undefined>(false);
    const [paymentId, setPaymentId] = useState<string>("")
    const [filterText, setFilterText] = useState<string>('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);


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
            catch (err: any) {
                toast.error("Server side error")
            }
            finally {
                setPending(false)
            }
        }
    }
    const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText(e.target.value);
    };
    const filteredOrders = orders.filter(order =>
        order.customer_name.toLowerCase().includes(filterText.toLowerCase()) ||
        order.customer_email.toLowerCase().includes(filterText.toLowerCase())
    );

    useEffect(() => {

        const fetchUsersWithQuery = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get('/order/get')
                if (data) {
                    setOrders(data.data.reverse())
                }

            }
            catch (err) {
                toast.error("Server side error")
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
            <h1 className='gradient-text text-3xl sm:text-4xl font-semibold pb-10 text-center tracking-wider'>All Orders</h1>
            <DataTableBase
                columns={columns}
                data={filteredOrders}
                // actions={actionsMemo}
                progressPending={pending}
                progressComponent={<Loader />}
                responsive={true}
                striped
                fixedHeaderScrollHeight='100px'
                subHeader
                subHeaderComponent={
                    <FilterComponent
                        filterText={filterText}
                        onFilter={handleFilterTextChange}
                        onClear={() => setFilterText('')}
                    />
                }

            />
            <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
                <CreatePayment id={paymentId} />
            </Modal>
        </div>
    )
}

export default OrderTable


const FilterComponent = ({ filterText, onFilter, onClear }: { filterText: string, onFilter: any, onClear: any }) => {


    return (
        <>
            <TextField
                id="search"
                type="text"
                placeholder="Filter By Name / Email"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
                className='mb-4'
            />
            <Button type="button" onClick={onClear} className='bg-primary-200 p-1 rounded-lg'>
                <X />
            </Button>
        </>
    )
}