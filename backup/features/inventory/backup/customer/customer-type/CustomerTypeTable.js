import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
// import {
//     customerDialogStateSelector,
//     changeCustomerTypeDialogState,
//     NEW, EDIT
// } from '../../../../app/components/dialog/dialog.store'


import {fetchCustomerTypeList,
        selectCustomerType,
        setSelectedCustomerType} from './CustomerType.slice'
import {Styles,ReactTable} from '../../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function GstTable(props) {
    const dispatch=useDispatch()
    const customerTypeList=useSelector(selectCustomerType)
    
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
            Cell:({row})=>(
                onclick=()=>{
                    dispatch(setSelectedCustomerType({row}))
                }
                
                // <RowLink
                    
                //     link={`/inventory/customer/customertype/${row.original.id}`
                // }
                // />
            )
        },
        {
            Header:'Discount',
            accessor:'discount_percentage',           
        },
        {
           Header:'Remarks',
           accessor:'remarks'
        },
        {
            Header: "Status",
            accessor: "active",
            Cell: ({ cell: { value } }) => {
                if (value === true) {
                    return 'active'
                } else {
                    return 'in-active'
                }

            }
        },
        {
            Header:()=>null,
            accessor:'button',
            Cell:({row})=>(
                <Button onClick={console.log()}>Edit</Button>
            )
        }
 

    ],[])


    return (
        <div>
            <Styles>
                <ReactTable columns={columns} data={customerTypeList}/>
            </Styles>
           
        </div>
    )
}

export default GstTable
