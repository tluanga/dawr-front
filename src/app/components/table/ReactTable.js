import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
    useExpanded,
    usePagination,
    useRowSelect
} from 'react-table'
import styled from "styled-components";

//----Material Ui for Link
import Chip from '@material-ui/core/Chip';


export const RowLink=(props)=>{    
    return(
        <div>
            <Link to={props.link}>
                <Chip
                    clickable
                    size="small" 
                    variant='outlined'
                    color='primary'                
                    label={props.label}
                />
            </Link>
           
        </div>
    )
}

export const Styles = styled.div`

  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
  }
`;

// Global Filter - Setup
const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span>
            Search:{""}
            <input width='400px'
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: "1.1rem",
                    border: "0",
                }}
            />
        </span>
    );
};



const defaultColumns = {
    Cell: ({ cell: { value } }) => value + 'test'
}

export function ReactTable({ columns, data}) {
    // Use the state and functions returned from useTable to build your UI
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        state,
        prepareRow,
        page,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        
        //--Pagination        
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },

        //-->Row Selection       

        
    } = useTable({
        columns,
        data,
        
        defaultColumns,
        initialState:{
            pageIndex:0
        },
        
    },
        useFilters,
        useGlobalFilter,
        useExpanded,
        usePagination,
        useRowSelect,
    );

    
    // Render the UI for your table
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                            style={{
                                textAlign: "left",
                            }}
                        >
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.slice(0, 10).map((row, i) => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </button>{' '}
                <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
                </span>
                <span>
                | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
                </span>{' '}
                <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </select>
            </div>

        </div>
        
        
    );
}


