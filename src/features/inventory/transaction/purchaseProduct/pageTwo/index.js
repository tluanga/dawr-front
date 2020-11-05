import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

// -----Redux------
import {useSelector,useDispatch} from 'react-redux'
import {selectProductList} from '../../../product/Product.slice'
import {selectGstCodeList} from '../../../gstCode/GstCode.slice'


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;    
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
`
const ProductContent=styled.section`
    width:400px;
    padding:10px;
    display:flex;
    flex-direction:column;    
    
`

const PageTwo = ({showPageTwo}) => {
    const productsOptions=useSelector(selectProductList)
    const gstCodes=useSelector(selectGstCodeList)
    const [selectedProduct,setSelectedProduct]=useState()
    const [selectedGstCode,setSelectedGstCode]=useState()
    

    return (
        <>
        {
            showPageTwo?
            <Wrapper>
            <ProductContent>
                <Card style={{height:'450px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        height:'450px'
                    }}>
                        <Select
                            isClearable
                            placeholder='Select Product..'
                            options={productsOptions}
                            onChange={data=>{
                                setSelectedProduct(data)
                                console.log('data====>',data)
                                const gstCode=gstCodes.find(gstCode=>gstCode.id===data.gst_code)
                                setSelectedGstCode(gstCode)
                            }}
                        />
                        
                        <section>Name:{selectedProduct?selectedProduct.name:''}</section>
                        <section>Quantity in Stock:{selectedProduct?selectedProduct.name:''}</section>
                        <section>Gst Rate:{selectedGstCode?selectedGstCode.totalGst:''}</section>
                        <section>Hsn Code:{selectedGstCode?selectedGstCode.code:''}</section>
                        <section>Rate:</section>
                        <section>Amount:</section>
                        <section>Quantity:</section>

                        
                        <TextField
                            variant='outlined'
                            size='small'
                            placeholder='Quantity'
                        />
                        <Button 
                            variant='contained'
                            color='primary'
                        >Add to Cart</Button>
                    </CardContent>
                   
                </Card>
            </ProductContent>

            
            {/* Select Product */}
            {/* Display the properties of Product */}
            {/*  */}
            </Wrapper>:null
        }
        </>
        
    )
}

export default PageTwo
