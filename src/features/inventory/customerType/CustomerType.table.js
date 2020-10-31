import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectCustomerTypeList} from './CustomerType.slice' 
import {EDIT} from './CustomerType.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const CustomerTypeTable = ({setOpenModal,setModalMode,setModalData}) => {
    
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
            Header: 'Discount Percentage',
            accessor: 'discount_percentage', // accessor is the "key" in the data
        },
        {
            Header: 'remarks',
            accessor: 'remarks',
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
      
    const customerTypeList=useSelector(selectCustomerTypeList)
    return (
        <div>
            <ReactTable columns={columns} data={customerTypeList}/>
        </div>
    )
}

export default CustomerTypeTable
