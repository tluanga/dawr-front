import React from 'react'
// -------redux-------
import {useDispatch,useSelector} from 'react-redux'
import {fetchUnitOfMeasurementList,selectUnitOfMeasurementList} from './UnitOfMeasurement.slice' 
import {EDIT} from './UnitOfMeasurement.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const UnitOfMeasurementTable = ({setOpenModal,setModalMode,setModalData}) => {
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'Id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Unit Of Measurement',
            accessor: 'unit_of_measurement', // accessor is the "key" in the data
        },
        {
            Header: 'Abbreviation',
            accessor: 'abbreviation', // accessor is the "key" in the data
        },
        {
            Header: 'Type of Measurement',
            accessor: 'type_of_measurement',
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
    const dispatch=useDispatch() 
    dispatch(fetchUnitOfMeasurementList()) 
    const unitOfMeasurementList=useSelector(selectUnitOfMeasurementList)
    return (
        <div>
            <ReactTable columns={columns} data={unitOfMeasurementList}/>
        </div>
    )
}

export default UnitOfMeasurementTable
