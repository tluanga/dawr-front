import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './Product.constants'
import {
        setDialog,dialogSelector,
        selectProduct,fetchProductList} from './Product.slice'
import ProductDialog from './Product.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function ProductTable(props) {
    const dispatch=useDispatch()
    const productDialog=useSelector(dialogSelector)

    const productList=useSelector(selectProduct)
    
    
    useEffect(()=>{
        dispatch(fetchProductList())
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
            Header:'Brand',
            accessor:'brand',           
        },        
        {
            Header:'Model',
            accessor:'model',           
        },
        {
            Header:'Category',
            accessor:'category',           
        },
        {
            Header:'Gst Code',
            accessor:'gstcode',           
        },
        {
            Header:'Cost Price',
            accessor:'cost_price',           
        },
        {
            Header:'Selling Price',
            accessor:'selling_price',           
        },
        {
            Header:'MRP',
            accessor:'mrp',           
        },
        {
            Header:'Unit of Measurement',
            accessor:'unit_of_measurement',           
        },
        {
            Header:'Tag',
            accessor:'tag',           
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
                {productDialog.open?<ProductDialog/>:''}
                
                <ReactTable columns={columns} data={productList} />
            </Styles>
           
        </div>
    )
}

export default ProductTable
