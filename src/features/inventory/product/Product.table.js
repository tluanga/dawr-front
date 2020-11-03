import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectProductList} from './Product.slice' 
import {EDIT} from './Product.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const ProductTable = ({setOpenModal,setModalMode,setModalData}) => {
    
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
            Header: 'Model',
            accessor: 'model', // accessor is the "key" in the data
        },
        {
            Header: 'Category',
            accessor: 'category',
            Cell:({cell:{value}})=>{
                return value.name
            }
        },
        {
            Header: 'Manufacturer',
            accessor: 'manufacturer',
            Cell:({cell:{value}})=>{
                
                return value.name
            }
        },
        {
            Header: 'HSN Code',
            accessor: 'gst_code',
            Cell:({cell:{value}})=>{
                return value.code
            }
        },
        {
            Header: 'Unit of Measurement',
            accessor: 'unit_of_measurement',
            Cell:({cell:{value}})=>{
                return value.unit_of_measurement            }
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
      
    const productList=useSelector(selectProductList)
    return (
        <div>
            <ReactTable columns={columns} data={productList}/>
        </div>
    )
}

export default ProductTable
