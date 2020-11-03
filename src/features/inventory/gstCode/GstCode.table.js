import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectGstCodeList} from './GstCode.slice' 
import {EDIT} from './GstCode.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const GstCodeTable = ({setOpenModal,setModalMode,setModalData}) => {
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Code',
            accessor: 'code', // accessor is the "key" in the data
        },
        {
            Header: 'Cgst',
            accessor: 'cgst', // accessor is the "key" in the data
        },
        {
            Header: 'Sgst',
            accessor: 'sgst',
        },
        {
            Header: 'Total Gst',
            accessor: 'totalGst',
        },
        {
            Header: 'Description of Goods',
            accessor: 'description_of_good',
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
      
    const gstCodeList=useSelector(selectGstCodeList)
    return (
        <div>
            <ReactTable columns={columns} data={gstCodeList}/>
        </div>
    )
}

export default GstCodeTable
