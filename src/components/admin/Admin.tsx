import React, { useState } from 'react'
import DataTableBase from '../table/DataTableBase';
import { TableColumn } from 'react-data-table-component';
import GradientButton from '../inputs/GradientButton';
import Loader from '../shared/Loader';
import AdminLeftSidebar from './AdminLeftSidebar';

type DataRow = {
  title: string;
  year: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: row => row.year,
    sortable: true,
  },
  {
    name: 'month',
    selector: row => row.year,
    sortable: true,
  },
  {
    name: 'day',
    selector: row => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]

//@ts-ignore
function convertArrayOfObjectsToCSV(array) {
  let result: string;

  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  //@ts-ignore
  array.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
//@ts-ignore
function downloadCSV(array) {
  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
// @ts-ignore
const Export = ({ onExport }) => <GradientButton onClick={e => onExport(e.target.value)} className='shadow-none' bgClassName='shadow-none'>Export</GradientButton>;

const Admin = () => {
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
  const [pending, setPending] = useState<boolean | undefined>(false)
  return (
    <section className='flex justify-between gap-2'>
      <div className='max-sm:hidden sm:w-[260px] md:w-[300px]'>
        <AdminLeftSidebar />
      </div>
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