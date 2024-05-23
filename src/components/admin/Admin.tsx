import React, { useState } from 'react'
import DataTableBase from '../table/DataTableBase';
import GradientButton from '../inputs/GradientButton';
import Loader from '../shared/Loader';
// import AdminLeftSidebar from './AdminLeftSidebar';
import { columns, downloadCSV } from './admin.constants';

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

// @ts-ignore
const Export = ({ onExport }) => <GradientButton onClick={e => onExport(e.target.value)} className='shadow-none' bgClassName='shadow-none'>Export</GradientButton>;

const Admin = () => {
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
  const [pending, setPending] = useState<boolean | undefined>(false)
  return (
    <section className='flex justify-between gap-2'>
      <div className='flex-1'>
        <DataTableBase
          columns={columns}
          data={data}
          actions={actionsMemo}
          progressPending={pending}
          progressComponent={<Loader state={pending} />}
        />
      </div>
    </section>
  )
}

export default Admin