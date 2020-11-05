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
import {selectProductsCurrentPrice} from '../../../product/ProductPrice.slice'
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
    // ---Redux
    const productsOptions=useSelector(selectProductList)
    const gstCodes=useSelector(selectGstCodeList)
    const productsSellPrice=useSelector(selectProductsCurrentPrice)
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [price,setPrice]=useState()
    const [quantityInStock,setQuantityInStock]=useState()
    const [quantity,setQuantity]=useState() //Quantity to purchase
    const [amount,setAmount]=useState()
    
    const onQuantityChange=(e)=>{
        const _quantity=e.target.value
        setQuantity(_quantity)
        setAmount(_quantity*price.per_piece_sell_price)
    }

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
                                setProduct(data)
                                console.log('data====>',data)
                                const _gstCode=gstCodes.find(gstCode=>gstCode.id===data.gst_code)
                                const _price=productsSellPrice.find(price=>price.product===data.id)
                                setGstCode(_gstCode)
                                setPrice(_price)
                            }}
                        />
                        
                        <section>Name:{product?product.name:''}</section>
                        <section>Quantity in Stock:</section>
                        <section>Gst Rate:{gstCode?gstCode.totalGst:''}</section>
                        <section>Hsn Code:{gstCode?gstCode.code:''}</section>
                        <section>Sell Price(Bulk):{price?price.per_bulk_sell_price:''}</section>
                        <section>Sell Price(Piece):{price?price.per_piece_sell_price:''}</section>                        
                        <section>Quantity:{quantity?quantity:''}</section>
                        <section>Amount:{amount?amount:''}</section>

                        
                        <TextField
                            variant='outlined'
                            size='small'
                            placeholder='Quantity'
                            disabled={!product}
                            onChange={onQuantityChange}
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
