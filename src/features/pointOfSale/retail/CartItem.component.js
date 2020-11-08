import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {useForm} from 'react-hook-form'

// -----Redux------
import {useSelector,useDispatch} from 'react-redux'
import {selectProductList} from '../../inventory/product/Product.slice'
import {selectSellingPrices} from '../../inventory/product/ProductSellingPrice.slice'

import {selectGstCodeList} from '../../inventory/gstCode/GstCode.slice'

import {
        addCartItem,
        selectCart,
        updateCartItem,
        selectCartTotalAmount,
        setTotalAmount,
        selectCartTotalTax,
        setTotalTax
    } from './Cart.Slice'

import {
    selectCustomer,
    selectDiscount
} from './CartInfo.slice'

const ProductContent=styled.form`
    width:400px;
    padding:10px;
    display:flex;
    flex-direction:column;    
    
`

const CartItem = () => {
    // ---Redux
    const dispatch=useDispatch()
    const productsOptions=useSelector(selectProductList)
    const gstCodes=useSelector(selectGstCodeList)
    const productsSellPrice=useSelector(selectSellingPrices)
    const cart=useSelector(selectCart)
    const cartTotalAmount=useSelector(selectCartTotalAmount)
    const cartTotalTax=useSelector(selectCartTotalTax)
    const customer=useSelector(selectCustomer)
    const discount_store=useSelector(selectDiscount)
    
    // component state
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [price,setPrice]=useState()
    const [quantityInStock,setQuantityInStock]=useState()
    const [quantity,setQuantity]=useState() //Quantity to purchase
    const [amount,setAmount]=useState()
    const [discount,setDiscount]=useState()
    
    




    // React hook form
    const {handleSubmit} =useForm()
    const onSubmit=data=>{
        // check product already existed in the cart
        let duplicate=0
        let duplicateState={}
       

        const payload={
            id:cart.length+1,
            product:product,
            gstCode:gstCode,
            selling_price:price.per_piece_sell_price,
            quantity:quantity,
            amount:amount,
            tax:quantity*gstCode.totalGst
        }
        if(cart.length!==0){
            cart.map(c=>{
                if(c.name===payload.name){
                    duplicate=1
                    duplicateState=c
                }
            })
        }
        if(duplicate===0){
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
                    amount:_quantity*price.per_piece_sell_price,
                    tax:_quantity*gstCode.totalGst
                    
                }
           
                
                
            }
            console.log(_changesPayload)
            dispatch(updateCartItem(_changesPayload))
            dispatch(setTotalAmount(cartTotalAmount+amount))
            dispatch(setTotalTax(cartTotalTax+payload.tax))
            console.log('update the product',duplicateState.quantity)
        } 


    }

    const SetAmount=()=>{
        const _sellingPrice=price.per_piece_sell_price
        const _amount=quantity*_sellingPrice        
        let _discount=0;
        
        if (discount_store){
            _discount=discount_store
        }

        if (discount){
            _discount=discount
        }

        setAmount(_amount- _discount)
        
    }    
    return (
            <ProductContent onSubmit={handleSubmit(onSubmit)}>
                <Card style={{height:'550px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        height:'540px'
                    }}>
                        <Select
                            isDisabled={!customer}
                            isClearable
                            placeholder='Select Product..'
                            options={productsOptions}
                            onChange={data=>{
                                setProduct(data)                                
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
                        <section>Cost Price(unit):{price?price.per_piece_sell_price:''}</section>                        
                        <section>Mrp:</section>
                        <section>Quantity:{quantity?quantity:''}</section>
                        <section>Discount:{discount?discount:''}</section>
                        <section>Amount:{amount?amount:''}</section>

                        <TextField
                            variant='outlined'
                            size='small'
                            placeholder='Discount'
                            type='number'
                            disabled={!amount}
                            onChange={e=>{
                                const _discount=e.target.value
                                setDiscount(_discount)
                                SetAmount()
                            }}
                        />

                        <TextField
                            variant='outlined'
                            size='small'
                            placeholder='Quantity'
                            type='number'
                            disabled={!product&&!quantityInStock}
                            onChange={(e)=>{
                                const _quantity=e.target.value
                                console.log(_quantity)
                                setQuantity(_quantity)
                                SetAmount()
                            }}
                        />
                        <Button 
                            disabled={!quantity}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Add to Cart</Button>
                    </CardContent>
                   
                </Card>
            </ProductContent>
                   
    )
}

export default CartItem
