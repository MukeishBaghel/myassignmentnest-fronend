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

// @ts-ignore
const Export = ({ onExport }) => <GradientButton onClick={e => onExport(e.target.value)} className='shadow-none' bgClassName='shadow-none'>Export</GradientButton>;

const Admin = () => {
  const columns: TableColumn<DataRow>[] = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Customer Id",
      // width: "10%",
      selector: (row) => row.customer_id,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Pages",
      width: "5%",
      selector: (row) => row.pages,
      sortable: true,
      center: true
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Deadline",
      selector: (row) => row.deadline,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Creation time",
      selector: (row) => new Date(+ row.create_time * 1000).toString()
    },
    {
      name: "Reference",
      selector: (row) => row.reference,
      sortable: true,
    },
    {
      name: "File Name",
      selector: (row) => row.file_name,
    },
    {
      name: 'Actions',
      grow: 1,
      cell: (row) => <div className='flex flex-col gap-2 items-center justify-center my-1'><GradientButton className='h-10 text-sm mx-auto px-2 w-fit text-nowrap' onClick={() => createOrder(row.customer_id)}>Create Order</GradientButton>
        <GradientButton className='h-10 text-sm px-2  w-fit mx-auto text-nowrap bg-white text-red-500 ' onClick={() => deleteQuery(row.id)}>Delete Order</GradientButton></div>,
      ignoreRowClick: true,
      button: true,
      width: "10%",
      center: true
    },
  ];
  const [queries, setQueries] = useState<DataRow[]>([])
  const [pending, setPending] = useState<boolean | undefined>(false)
  console.log(queries)
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(queries)} />, []);
  const [orderId, setOrderId] = useState<string>("")
  const [isOrderModal, setIsOrderModal] = useState<boolean>(false)

  const setOrderModalOpen = () => setIsOrderModal(true)
  const setOrderModalClose = () => setIsOrderModal(false)

  const createOrder = (orderId: string) => {
    if (orderId) {
      setOrderId(orderId)
      setOrderModalOpen()
    }
    else {
      toast.error("invalid order id")
    }
  }
  const deleteQuery = async (queryId: string) => {
    alert("Are you sure you want to delete")
    setPending(true)
    try {
      const res = await axiosInstance.delete('/admin/delete-query?query_id=' + queryId)
      console.log(res)
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
      console.log(err);
    }
    finally {
      setPending(false)
    }
  }

  console.log(queries)
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
  if (queries && queries.length !== 0) {
    return (
      <section className='px-4'>
        <h1 className='gradient-text text-3xl pt-4 sm:text-4xl font-semibold  text-center tracking-wider'>All Queries</h1>
        <DataTableBase
          columns={columns}
          data={queries}
          actions={actionsMemo}
          progressPending={pending}
          progressComponent={<Loader />}
          responsive={true}
          striped
          title="All queries"
          selectableRowsHighlight
        />
        <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
          <OrderForm id={orderId} />
        </Modal>
      </section>
    )
  }
  return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No data to display</div>
}

export default Admin