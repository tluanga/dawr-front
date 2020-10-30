import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './Supplier.constants'
import {
        setDialog,dialogSelector,
        selectSupplier,fetchSupplierList} from './Supplier.slice'
import SupplierDialog from './Supplier.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function SupplierTable(props) {
    const dispatch=useDispatch()
    const supplierDialog=useSelector(dialogSelector)

    const SupplierList=useSelector(selectSupplier)
    
    
    useEffect(()=>{
        dispatch(fetchSupplierList())
    },[dispatch])
    
    //--React Table
    const columns=React.useMemo(()=>[
        {
            Header:'Sl.No',
            accessor:'id'
        },
        {
            Header:'Name',
            accessor:'name',
            width:400
                     
        },
        {
            Header:'Address',
            accessor:'address',           
        },        
        {
            Header:'Contact',
            accessor:'contact',           
        },      
        {
            Header:'Gst Code',
            accessor:'gst_no',           
        },
        
        {
            Header:'Remarks',
            accessor:'remarks',           
        },
          
        {
            Header: "Status",
            accessor: "active",
            width:400,
            Cell: ({ cell: { value } }) => {
                if (value === true) {
                    return 'active'
                } else {
                    return 'in-active'
                }

            }
        },
        {
            //    id:'selection',
               Header:'Action',
               Cell:({row})=>{
                // console.log('properties of row',row.original)
                return(
                    <Button 
                        variant='contained'
                        color='primary'
                        onClick={()=>{
                        dispatch(setDialog({open:true, mode:EDIT,data:row.original}))
                    }}>
                        Edit</Button>
                    // <ActionButton row={row.original} />
                )
            }
    
            },
        
    ],[])


    return (
        <div>
            <Styles>
                
                {supplierDialog.open&&supplierDialog.mode===EDIT?<SupplierDialog/>:''}
                
                <ReactTable columns={columns} data={SupplierList} />
            </Styles>
           
        </div>
    )
}

export default SupplierTable
