import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './Customer.constants'
import {
        setDialog,dialogSelector,
        selectCustomer,fetchCustomerList} from './Customer.slice'
import CustomerDialog from './Customer.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function CustomerTable(props) {
    const dispatch=useDispatch()
    const customerDialog=useSelector(dialogSelector)

    const CustomerList=useSelector(selectCustomer)
    
    
    useEffect(()=>{
        dispatch(fetchCustomerList())
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
            Header:'City',
            accessor:'city',           
        },        
        {
            Header:'Contact',
            accessor:'contact',           
        },      
        {
            Header:'Email',
            accessor:'email',           
        },
        {
            Header:'GST TIN',
            accessor:'gst_no',           
        },
        {
            Header:'Customer Type',
            accessor:'customer_type',           
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
                
                {customerDialog.open&&customerDialog.mode===EDIT?<CustomerDialog/>:''}
                
                <ReactTable columns={columns} data={CustomerList} />
            </Styles>
           
        </div>
    )
}

export default CustomerTable
