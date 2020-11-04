import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectProductList} from './Product.slice'
import {selectCategoryById} from '../category/Category.slice' 
import {selectGstCodeById} from '../gstCode/GstCode.slice'
import {selectManufacturerById} from '../manufacturer/Manufacturer.slice'
import {selectUnitOfMeasurementById} from '../unitOfMeasurement/UnitOfMeasurement.slice'

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
                
                const selectedCategory=useSelector(state=>selectCategoryById(state,value))  
                return selectedCategory.name
            }
        },
        {
            Header: 'Manufacturer',
            accessor: 'manufacturer',
            Cell:({cell:{value}})=>{
                const selectedManufacturer=useSelector(state=>selectManufacturerById(state,value))  
                return selectedManufacturer.name
            }
        },
        {
            Header: 'HSN Code',
            accessor: 'gst_code',
            Cell:({cell:{value}})=>{
                const selectedGstCode=useSelector(state=>selectGstCodeById(state,value))  
                return selectedGstCode.code
            }
        },
        {
            Header: 'Unit of Measurement',
            accessor: 'unit_of_measurement',
            Cell:({cell:{value}})=>{
                const selectedUnitOfMeasurement=
                    useSelector(state=>selectUnitOfMeasurementById(state,value))  
                return selectedUnitOfMeasurement.unit_of_measurement          }
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
      
    const productList=useSelector(selectProductList)
   
    return (
        <div>
            <ReactTable columns={columns} data={productList}/>
        </div>
    )
}

export default ProductTable


// const Component = ({ id }) => {
//     const item = useSelector((state) =>
//       selectUserById(state, id)
//     );
//   };