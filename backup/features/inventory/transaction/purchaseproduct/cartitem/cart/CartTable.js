import { Button } from '@material-ui/core'
import React from 'react'

import {useTable} from 'react-table'

import styled from "styled-components";
import './CartTable.css'

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
`;

export const CartTable=({data})=>{
    
    const columns=React.useMemo(
        ()=>[
        {
            Header:'Sl.No',
            accessor:'id',
            width:50
        },
        {
            Header:'Name',
            accessor:'name'
        },
        {
            Header:'Quantity',
            accessor:'quantity'
        },
        {
            Header:'Cost Price',
            accessor:'cost_price'
        },
        {
            Header:'Gst',
            accessor:'gst'
        },
        {
            Header:'Discount',
            accessor:'discount'
        },
        {
            Header:'Total Cost Price',
            accessor:'total_costprice'
        },
        

        
    ],
    [])
    console.log('table-data',data)
    const tableInstance=useTable({columns,data})
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } =tableInstance
    return(
        <div>
            <table {...getTableProps} className='contenttable'>
                <thead>
                    {
                        headerGroups.map(
                            headerGroup=>(
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column=>(
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            )
                        )
                    }                   
                </thead>
            </table>
            <tbody {...getTableBodyProps}>
                {
                    rows.map(
                        row=>{
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell=>{
                                            return(
                                                <td {...cell.getCellProps}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
            <div className='carttable__button'>
                <Button 
                    variant='outlined'
                    color='primary'
                >Submit</Button>
                <Button 
                    variant='outlined'
                    color='secondary'
                    >Clear</Button>
            </div>
            
        </div>
    )
}

export default CartTable