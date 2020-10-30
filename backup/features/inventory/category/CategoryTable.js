import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import {NEW,EDIT,OPEN,MODE,DATA} from './Category.constants'
import {
        setDialog,dialogSelector,
        selectCategory,fetchCategoryList} from './Category.slice'
import CategoryDialog from './Category.dialog'

import {Styles,ReactTable} from '../../../app/components/table/ReactTable'
import { Button } from '@material-ui/core'


function CategoryTable(props) {
    const dispatch=useDispatch()
    const categoryDialog=useSelector(dialogSelector)

    const categoryList=useSelector(selectCategory)
    
    
    useEffect(()=>{
        dispatch(fetchCategoryList())
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
            Header:'Name',
            accessor:'name',
            width:400
                     
        },
        {
            Header:'Abbreviation',
            accessor:'abbreviation',           
        },        
        {
            Header:'Description',
            accessor:'description',           
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
                {categoryDialog.open?<CategoryDialog/>:''}
                
                <ReactTable columns={columns} data={categoryList} />
            </Styles>
           
        </div>
    )
}

export default CategoryTable
