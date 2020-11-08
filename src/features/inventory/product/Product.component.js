import React,{useState} from 'react'
// ----------Redux-------------
import {useDispatch} from 'react-redux'
import {fetchProductList} from './Product.slice'
import {fetchCategoryList} from '../category/Category.slice'
import {fetchGstCodeList} from '../gstCode/GstCode.slice'
import {fetchManufacturerList} from '../manufacturer/Manufacturer.slice'
import {fetchUnitOfMeasurementList} from '../unitOfMeasurement/UnitOfMeasurement.slice'
import {fetchCurrentCostPrice} from './ProductCostPrice.slice'
import {fetchCurrentSellPrice} from './ProductSellingPrice.slice'
import {fetchCurrentMrp} from './ProductMrp.slice'
import {fetchCurrentStock} from './ProductStock.slice'


import ProductModal from './Product.modal'
import ProductTable from './Product.table'
import {NEW} from './Product.constants'
import Button from '@material-ui/core/Button'
import {IoIosPeople} from 'react-icons/io'
import styled from 'styled-components'

const Wrapper=styled.div`
    display:flex;
    flex-direction:column ;
    padding-left:1vw;
    padding-right:1vw;
`
const Control=styled.section`
    display:flex;
    flex-direction:row;
    justify-content:left;
    padding-bottom:1vh;

`

const Product = () => {
    // ----------Redux ------------
    const dispatch=useDispatch()
    dispatch(fetchProductList())
    dispatch(fetchCategoryList())
    dispatch(fetchGstCodeList())
    dispatch(fetchManufacturerList())
    dispatch(fetchUnitOfMeasurementList())
    dispatch(fetchCurrentCostPrice())
    dispatch(fetchCurrentSellPrice())
    dispatch(fetchCurrentMrp())
    dispatch(fetchCurrentStock())



    const [openModal,setOpenModal]=useState(false)
    const [modalMode,setModalMode]=useState(NEW)
    const [modalData,setModalData]=useState({})
    
    return (
        <Wrapper>
            {/* <ProductSelect setOpenModal={setOpenModal}/> */}
            <Control>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<IoIosPeople/>}
                    onClick={()=>{
                        setOpenModal(true)
                        setModalMode(NEW)
                    }}
                >New Product</Button>
            </Control>
            
            <ProductModal 
                openModal={openModal}
                modalMode={modalMode}
                setOpenModal={setOpenModal}
                modalData={modalData}
                setModalData={setModalData}
            />
            <ProductTable 
                setOpenModal={setOpenModal}
                setModalMode={setModalMode}
                setModalData={setModalData}
            />
        </Wrapper>
    )
}

export default Product
