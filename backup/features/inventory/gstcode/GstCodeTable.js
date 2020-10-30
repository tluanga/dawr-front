import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './GstCode.constants'
import {
        setDialog,dialogSelector,
        selectGstCode,fetchGstCodeList} from './GstCode.slice'
import GstCodeDialog from './GstCode.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function GstCodeTable(props) {
    const dispatch=useDispatch()
    const gstCodeDialog=useSelector(dialogSelector)

    const gstCodeList=useSelector(selectGstCode)
    
    console.log(gstCodeList)    
    useEffect(()=>{
        dispatch(fetchGstCodeList())
    },[dispatch])
    
    //--React Table
    const columns=React.useMemo(()=>[
        {
            Header: "Sl.No",
            id: "row",
            maxWidth: 50,         
            Cell: ({row}) => {
              return <div>{row.index+1}</div>;
            }
        },
        {
            Header:'Code',
            accessor:'code',
            width:400
                     
        },
        {
            Header:'Cgst',
            accessor:'cgst',           
        },        
        {
            Header:'Sgst',
            accessor:'sgst',           
        },
        {
            Header:'Igst',
            accessor:'igst',           
        },
        {
            Header:'Description of Goods',
            accessor:'description_of_good', 
            maxWidth: 50,          
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
                {gstCodeDialog.open?<GstCodeDialog/>:''}
                
                <ReactTable columns={columns} data={gstCodeList} />
            </Styles>
           
        </div>
    )
}

export default GstCodeTable
