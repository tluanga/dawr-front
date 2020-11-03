import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectManufacturerList} from './Manufacturer.slice' 
import {EDIT} from './Manufacturer.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const ManufacturerTable = ({setOpenModal,setModalMode,setModalData}) => {
    
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
            Header: 'Description',
            accessor: 'description',
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
      
    const manufacturerList=useSelector(selectManufacturerList)
    return (
        <div>
            <ReactTable columns={columns} data={manufacturerList}/>
        </div>
    )
}

export default ManufacturerTable
