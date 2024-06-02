import React, { useEffect, useState } from 'react'
import DataTableBase from '../table/DataTableBase';
import GradientButton from '../inputs/GradientButton';
import Loader from '../shared/Loader';
// import AdminLeftSidebar from './AdminLeftSidebar';
import { DataRow, downloadCSV } from './admin.constants';
import { axiosInstance } from '../utils/axios.instance';
import { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../inputs/Modal';
import OrderForm from './OrderForm';
import { Delete, DeleteIcon, ScrollText, Trash2 } from 'lucide-react';

// @ts-ignore
const Export = ({ onExport }) => <GradientButton onClick={e => onExport(e.target.value)} className='shadow-none mb-4' bgClassName='shadow-none'>Export</GradientButton>;

const Admin = () => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      center: true,
      compact: true
    },
    {
      name: "Type",
      // width: "10%",
      selector: (row) => row.type,
      sortable: true,
      center: true,
      compact: true


    },
    {
      name: "Email",
      selector: (row) => row.customer_email,
      sortable: true,
      center: true,
      compact: true


    },
    {
      name: "Pages",
      width: "5%",
      selector: (row) => row.pages,
      compact: true,
      sortable: true,
      center: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      center: true,
      compact: true

    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      center: true,
      compact: true

    },
    {
      name: "Deadline",
      selector: (row) => row.deadline,
      sortable: true,
      center: true,
      compact: true


    },
    {
      name: "Description",
      selector: (row) => row.description,
      center: true,
      compact: true


    },
    {
      name: "customer name",
      selector: (row) => row.customer_name,
      sortable: true,
      center: true,
      compact: true


    },
    {
      name: "Creation time",
      selector: (row) => new Date(+ row.create_time * 1000).toString(),
      sortable: true,
      center: true,
      compact: true



    },
    {
      name: "Reference",
      selector: (row) => row.reference,
      center: true,
      compact: true


    },
    {
      name: "File Name",
      selector: (row) => row.file_name,
      center: true,
      compact: true


    },
    {
      name: 'Actions',
      grow: 1,
      cell: (row) => <div className='flex  gap-2 items-center justify-center my-1'><button className=' text-sm mx-auto px-2 w-fit text-nowrap bg-green-500 rounded-xl p-2 active:scale-95 hover:opacity-85' onClick={() => createOrder(row.customer_email, row.customer_name, row.description)}><ScrollText className='text-white' /></button>
        <button className='h-10 text-sm px-2  w-fit mx-auto text-nowrap bg-red-500 text-white rounded-xl active:scale-95 hover:opacity-85' onClick={() => deleteQuery(row.id)}><Trash2 /></button></div>,
      ignoreRowClick: true,
      button: true,
      width: "10%",
      center: true
    },
  ];
  const [queries, setQueries] = useState<DataRow[]>([])
  const [pending, setPending] = useState<boolean | undefined>(false)
  const [orderId, setOrderId] = useState<string>("")
  const [isOrderModal, setIsOrderModal] = useState<boolean>(false)
  const [customerName, setCustomerName] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(queries)} />, [queries]);
  const setOrderModalOpen = () => setIsOrderModal(true)
  const setOrderModalClose = () => setIsOrderModal(false)

  const createOrder = (email: string, customer_name: string, description: string) => {
    if (email) {
      setOrderId(email)
      setCustomerName(customer_name)
      setDescription(description)
      setOrderModalOpen()
    }
    else {
      toast.error("invalid order id")
    }
  }
  const deleteQuery = async (queryId: string) => {
    if (confirm("Are you sure you want to delete?")) {
      setPending(true)
      try {
        const res = await axiosInstance.delete('/admin/delete-query?query_id=' + queryId)
        if (res.status === 200) {
          toast.success(res.data.message)
          setQueries((prev) => {
            const queries = prev.filter((query) => query.id !== queryId)
            return queries;
          })
        }
        else {
          toast.error("Unable to process the request")
        }
      }
      catch (err) {
        toast.error("Invalid Id or Server error")
      }
      finally {
        setPending(false)
      }
    }
  }


  useEffect(() => {

    const fetchUsersWithQuery = async () => {
      setPending(true)
      try {
        const { data } = await axiosInstance.get('/admin/get-queries')
        if (data) {
          setQueries(data.data)
        }
      }
      catch (err) {
        toast.error("Something went wrong")
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
  if (queries && queries.length !== 0) {
    return (
      <section className='px-4'>
        <h1 className='gradient-text text-3xl pt-4 sm:text-4xl font-semibold  text-center tracking-wider mb-10'>All Queries</h1>
        <DataTableBase
          columns={columns}
          data={queries}
          actions={actionsMemo}
          progressPending={pending}
          progressComponent={<Loader />}
          responsive={true}
          striped
          title="All queries"
          clearSelectedRows={true}
          selectableRowsHighlight
        />
        <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
          <OrderForm mail={orderId} customer_name={customerName} description={description} />
        </Modal>
      </section>
    )
  }
  return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No data to display</div>
}

export default Admin