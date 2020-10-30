import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './CustomerType.constants'
import {
        setDialog,dialogSelector,
        selectCustomerType,fetchCustomerTypeList} from './CustomerType.slice'
import CustomerTypeDialog from './CustomerType.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function CustomerTypeTable(props) {
    const dispatch=useDispatch()
    const customerTypeDialog=useSelector(dialogSelector)

    const CustomerTypeList=useSelector(selectCustomerType)
    
    
    useEffect(()=>{
        dispatch(fetchCustomerTypeList())
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
            Header:'Discount Percentage',
            accessor:'discount_percentage',           
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
                
                {customerTypeDialog.open&&customerTypeDialog.mode===EDIT?<CustomerTypeDialog/>:''}
                
                <ReactTable columns={columns} data={CustomerTypeList} />
            </Styles>
           
        </div>
    )
}

export default CustomerTypeTable
