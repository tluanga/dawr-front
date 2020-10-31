import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectCustomerList} from './Customer.slice' 
import {EDIT} from './Customer.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const CustomerTable = ({setOpenModal,setModalMode,setModalData}) => {
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
        },
        {
            Header: 'Address',
            accessor: 'address', // accessor is the "key" in the data
        },
        {
            Header: 'City',
            accessor: 'city', // accessor is the "key" in the data
        },
        {
            Header: 'Contact No',
            accessor: 'contact_no',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Gst No',
            accessor: 'gst_no',
        },
        {
            Header: 'Customer Type',
            accessor: 'customer_type',
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
                        setModalMode(EDIT)
                        setOpenModal(true)
                        setModalData(row.original)
                    }}>
                        Edit</Button>
                    // <ActionButton row={row.original} />
                )
            }
    
            },
        ],
        [setModalData,setOpenModal,setModalMode]
      )
      
    const customerList=useSelector(selectCustomerList)
    return (
        <div>
            <ReactTable columns={columns} data={customerList}/>
        </div>
    )
}

export default CustomerTable
