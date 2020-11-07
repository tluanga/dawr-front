import React from 'react'
// -------redux-------
import {useDispatch,useSelector} from 'react-redux'
import {fetchVendorList,selectVendorList} from './Vendor.slice' 
import {EDIT} from './Vendor.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const VendorTable = ({setOpenModal,setModalMode,setModalData}) => {
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'name',
            accessor: 'name', // accessor is the "key" in the data
        },
        {
            Header: 'address',
            accessor: 'address', // accessor is the "key" in the data
        },
        {
            Header: 'Mobile',
            accessor: 'mobile',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Pin Code',
            accessor: 'pincode',
        },
        {
            Header: 'Gst No',
            accessor: 'gst_no',
        },
        {
            Header: 'Remarks',
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
    //------Redux-------
   
    const vendorList=useSelector(selectVendorList)
    return (
        <div>
            <ReactTable columns={columns} data={vendorList}/>
        </div>
    )
}

export default VendorTable
