import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './UnitOfMeasurement.constant'
import {
        setDialog,dialogSelector,
        selectUnitOfMeasurement,fetchUnitOfMeasurementList} from './UnitOfMeasurement.slice'
import UnitOfMeasurementDialog from './UnitOfMeasurement.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function UnitOfMeasurementTable(props) {
    const dispatch=useDispatch()
    const unitOfMeasurementDialog=useSelector(dialogSelector)
    

    const UnitOfMeasurementList=useSelector(selectUnitOfMeasurement)
    console.log('unit of measurement list', UnitOfMeasurementList)
    
    useEffect(()=>{
        dispatch(fetchUnitOfMeasurementList())
    },[dispatch])
    
    //--React Table
    const columns=React.useMemo(()=>[
        {
            Header:'Sl.No',
            accessor:'id',
            width:400,
        },
        {
            Header:'Unit of Measurement',
            accessor:'unit_of_measurement',
            width:400
                     
        },
        {
            Header:'Abbreviation',
            accessor:'abbreviation',           
        },
        {
            Header:'Type of Measurement',
            accessor:'type_of_measurement',           
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
                
                {unitOfMeasurementDialog.open&&unitOfMeasurementDialog.mode===EDIT?<UnitOfMeasurementDialog/>:''}
                
                <ReactTable columns={columns} data={UnitOfMeasurementList} />
            </Styles>
           
        </div>
    )
}

export default UnitOfMeasurementTable
