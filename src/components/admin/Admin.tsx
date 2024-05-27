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
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "reference",
      selector: (row) => row.reference,
      sortable: true,
    },
    {
      name: 'Actions',
      grow: 1,
      cell: (row) => <GradientButton className='h-10 text-sm px-2 my-2 w-fit text-nowrap' onClick={() => createOrder(row.customer_id)}>Create Order</GradientButton>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const [queries, setQueries] = useState([])
  const [pending, setPending] = useState<boolean | undefined>(false)
  const navigate = useNavigate()
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(queries)} />, []);


  const createOrder = (orderId: string) => {
    if (orderId)
      navigate(`/create-order/${orderId}`)
    else {
      toast.error("invalid order id")
    }
  }



  useEffect(() => {
    console.log(queries);

    const fetchUsersWithQuery = async () => {
      setPending(true)
      try {
        const { data } = await axiosInstance.get('/admin/get-queries')
        if (data) {
          console.log(data);
          setQueries(data.data)
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
  if (queries && queries.length !== 0) {
    return (
      <section className=''>

        <div className='flex-1 mt-10'>
          <DataTableBase
            columns={columns}
            data={queries}
            actions={actionsMemo}
            progressPending={pending}
            progressComponent={<Loader />}
            responsive={true}
            striped
            fixedHeaderScrollHeight='100px'
          />
        </div>
      </section>
    )
  }
  return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No data to display</div>
}

export default Admin