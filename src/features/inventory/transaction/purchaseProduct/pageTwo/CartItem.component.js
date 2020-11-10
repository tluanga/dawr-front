import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {useForm} from 'react-hook-form'



// -----Redux------
import {useSelector,useDispatch} from 'react-redux'
import {selectProductList,fetchProductList} from '../../../product/Product.slice'
import {selectCostPrices} from '../../../product/ProductCostPrice.slice'
import {selectSellingPrices} from '../../../product/ProductSellingPrice.slice'
import {selectMrp} from '../../../product/ProductMrp.slice'

import {selectAllStock} from '../../../product/ProductStock.slice'
import {selectGstCodeList} from '../../../gstCode/GstCode.slice'
import {
        addCartItem,
        selectCart,
        updateCartItem,
        selectTotalAmount,
        setTotalAmount,
        selectTotalTax,
        setTotalTax
    } from './Cart.Slice'

import {
        setOpenPriceEditModal,
        setPriceEditModalData
    } from './CartUi.slice'   

import Alert from '@material-ui/lab/Alert'


const ProductContent=styled.form`
    width:400px;
    padding:10px;
    display:flex;
    flex-direction:column;    
    
`


const CartItem = ({setOpenModal,setModalMode}) => {
    // ---Redux
    const dispatch=useDispatch()
    const productsOptions=useSelector(selectProductList)
    const gstCodes=useSelector(selectGstCodeList)
    const costPrices=useSelector(selectCostPrices)
    const mrps=useSelector(selectMrp)
    const cart=useSelector(selectCart)
    const cartTotalAmount=useSelector(selectTotalAmount)
    const cartTotalTax=useSelector(selectTotalTax)
    const productStocks=useSelector(selectAllStock)
    
    // component state
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [costPrice,setCostPrice]=useState()
    const [mrp,setMrp]=useState()
    const [productStock,setProductStock]=useState()    
    const [quantity,setQuantity]=useState(null) //Quantity to purchase
    const [amount,setAmount]=useState(0)    
    const [discount,setDiscount]=useState(0)
    
    
    useEffect(()=>{
        dispatch(fetchProductList())
    },[dispatch])

    

    // React hook form
    const {handleSubmit} =useForm()

    const onSubmit=data=>{

        let duplicate=0
        let duplicateState={}
        const payload={
            id:cart.length+1,
            product:product,
            gstCode:gstCode,
            cost_price:costPrice,
            discount:discount,
            quantity:quantity,
            amount:amount,
            tax:quantity*gstCode.totalGst
        }
        if(cart.length!==0){
            cart.map(c=>{
                if(c.product.id===payload.product.id){
                    duplicate=1
                    duplicateState=c
                }
            })
        }
        if(duplicate===0){
            console.log('add new',payload)
            dispatch(addCartItem(payload))
            dispatch(setTotalAmount(cartTotalAmount+amount))
            dispatch(setTotalTax(cartTotalTax+payload.tax))
        }else{
            const _quantity=parseInt(duplicateState.quantity)
            +parseInt(payload.quantity)
            const _changesPayload={
                id:duplicateState.id,
                changes:{
                    quantity:_quantity,
                    amount:_quantity*costPrice.cost_price,
                    tax:_quantity*gstCode.totalGst
                }
            }
            console.log('changes payload',_changesPayload)
            dispatch(updateCartItem(_changesPayload))
            dispatch(setTotalAmount(cartTotalAmount+amount))
            dispatch(setTotalTax(cartTotalTax+payload.tax))
        } 
    }

   

    const onQuantityChange=(e)=>{
        const _quantity=e.target.value
        setQuantity(_quantity)
        setAmount(_quantity*costPrice.cost_price)
    }

    const handleDiscountChange=(e)=>{
        const _discount=e.target.value
        const _amount=quantity*costPrice.cost_price
     
        setDiscount(_discount)

        setAmount(_amount-(discount*10))
        if(_discount==='')setAmount(_amount)
        if(_discount>=_amount)setAmount(_amount)
    }
    
    const NEW='New'
    return (
            <ProductContent onSubmit={handleSubmit(onSubmit)}>
                <Card style={{height:'450px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',                        
                        height:'425px',
                        paddingTop:'10px',
                        
                    }}>
                        <Creatable
                            isClearable
                            o
                            placeholder='Select Product..'
                            options={productsOptions}
                            onCreateOption={()=>{
                                setOpenModal(true)
                                setModalMode(NEW)
                            }
                        }
                            onChange={data=>{
                                if(data){
                                    setProduct(data)                                
                                    const _gstCode=gstCodes.find(
                                        gstCode=>gstCode.id===data.gst_code)
                                    const _price=costPrices.find(
                                        price=>price.product===data.id)
                                    const _mrp=mrps.find(
                                        price=>price.product===data.id)
                                    const _stock=productStocks.find(
                                        stock=>stock.product===data.id)
                                    console.log('stock------->',_stock)
                                    setGstCode(_gstCode)
                                    setCostPrice(_price)
                                    setMrp(_mrp)
                                    setProductStock(_stock)
                                    setAmount(0)
                                } else{
                                    setProduct()
                                    setCostPrice()
                                    setGstCode()
                                    setMrp()
                                    setProductStock()
                                    setAmount()
                                    setQuantity()
                                }
                                
                                
                            }}
                        />
                        
                        <section>Name:{product?product.name:''}</section>
                        <section>Quantity in Stock:{productStock?productStock.quantity:''}</section>                                               
                        <section>
                            Cost Price(unit):{costPrice?costPrice.cost_price:''}                            
                        </section>
                        <section>Mrp:{mrp?mrp.amount:''}</section>
                        <section>Gst Rate:{mrp?mrp.amount:''}</section>                    
                        <section>Quantity:{quantity?quantity:''}</section>
                        <section>Amount:{amount?amount:''}</section>
                        
                        <TextField
                            label='Quantity'
                            variant='outlined'
                            size='small'
                            defaultValue={quantity}
                            placeholder='Quantity'
                           
                            type='number'
                            disabled={!product}
                            onChange={onQuantityChange}
                        />
                        <TextField
                            label='Discount'
                            variant='outlined'
                            size='small'
                            placeholder='Discount'
                            type='number'
                            disabled={!product}
                            onChange={handleDiscountChange}
                        />
                        <Button 
                            disabled={!quantity}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Add to Cart</Button>
                        <Button 
                            disabled={!quantity}
                            variant='contained'
                            color='primary'
                            onClick={()=>{
                                if(product){
                                    dispatch(setOpenPriceEditModal(true))
                                    dispatch(setPriceEditModalData(product))    
                                }
                               
                                }
                            }
                        >Edit Price</Button>
                    </CardContent>
                   
                </Card>
            </ProductContent>
                   
    )
}

export default CartItem
