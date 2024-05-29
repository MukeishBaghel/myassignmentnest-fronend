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
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "customer_id",
      // width: "10%",
      selector: (row) => row.customer_id,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "pages",
      width: "10%",
      selector: (row) => row.pages,
      sortable: true,
      center: true
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Deadline",
      selector: (row) => row.deadline,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Creation time",
      selector: (row) => row.create_time
    },
    {
      name: "reference",
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
      cell: (row) => <GradientButton className='h-10 text-sm px-2 my-2 w-fit text-nowrap' onClick={() => createOrder(row.customer_id)}>Create Order</GradientButton>,
      ignoreRowClick: true,
      button: true,
      width: "10%",
    },
  ];
  const [queries, setQueries] = useState([])
  const [pending, setPending] = useState<boolean | undefined>(false)
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
          <OrderForm id={orderId} close={setOrderModalClose} />
        </Modal>
      </section>
    )
  }
  return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No data to display</div>
}

export default Admin