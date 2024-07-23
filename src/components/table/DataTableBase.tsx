import React from 'react';
import { ArrowDown } from 'lucide-react';
import DataTable, { TableProps } from 'react-data-table-component';
// import Checkbox from '@material-ui/core/Checkbox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDown />;
const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };

const customStyles = {
    // rows: {

    // },
    headCells: {
        style: {
            paddingLeft: '4px', // override the cell padding for head cells
            paddingRight: '4px',
            fontSize: "1rem",
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: "#dadada",
            },
        },
    },
    headRow: {
        style: {
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: "#dadada",
        },
    },
    cells: {
        style: {
            fontSize: ".875rem",
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: "#dadada",
            },
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
            // @ts-ignore
            customStyles={customStyles}
            {...props}
        />
    );

}

export default DataTableBase;