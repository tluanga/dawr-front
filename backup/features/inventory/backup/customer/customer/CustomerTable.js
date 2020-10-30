import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'



import {fetchCustomerList,selectCustomer} from './Customer.slice'
import {Styles,ReactTable,RowLink} from '../../../../app/components/table/ReactTable'


function CustomerTable() {
    const dispatch=useDispatch()
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
            Cell:({row})=>(
              
                <RowLink 
                    label={row.original.name}
                    link={`/inventory/customer/${row.original.id}`
                }
                />
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
        }
 

    ],[])


    return (
        <div>
            <Styles>
                <ReactTable columns={columns} data={CustomerList}/>
            </Styles>
           
        </div>
    )
}

export default CustomerTable
