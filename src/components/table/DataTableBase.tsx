import React from 'react';
import { ArrowDown } from 'lucide-react';
import DataTable, { TableProps } from 'react-data-table-component';
// import Checkbox from '@material-ui/core/Checkbox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDown />;
const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };

const customStyles = {
    rows: {
        style: {
            minHeight: '1000px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize: "1.2rem",

        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            fontSize: "1rem",
        },
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },

};



export function DataTableBase<T>(props: TableProps<T>): JSX.Element {

    return (
        <DataTable
            pagination
            // selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={selectProps}
            selectableRows
            sortIcon={sortIcon}
            dense
            customStyles={customStyles}
            {...props}
        />
    );

}

export default DataTableBase;