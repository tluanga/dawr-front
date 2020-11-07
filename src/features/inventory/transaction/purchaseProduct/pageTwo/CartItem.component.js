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
import {selectProductList} from '../../../product/Product.slice'
import {
    selectProductsCurrentCostPrice,
    selectProductsCurrentMrp
} from '../../../product/ProductPrice.slice'
import {selectGstCodeList} from '../../../gstCode/GstCode.slice'
import {
        addCartItem,
        selectCart,
        updateCartItem,
        selectCartTotalAmount,
        setTotalAmount,
        selectCartTotalTax,
        setTotalTax
    } from './Cart.Slice'



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
    const productsCostPrice=useSelector(selectProductsCurrentCostPrice)
    const productsMrp=useSelector(selectProductsCurrentMrp)
    const cart=useSelector(selectCart)
    const cartTotalAmount=useSelector(selectCartTotalAmount)
    const cartTotalTax=useSelector(selectCartTotalTax)
    
    // component state
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [costPrice,setCostPrice]=useState()
    const [mrp,setMrp]=useState()
    const [quantityInStock,setQuantityInStock]=useState()
    const [quantity,setQuantity]=useState() //Quantity to purchase
    const [amount,setAmount]=useState(0)
    const [newCostPrice,setNewCostPrice]=useState()
    const [discount,setDiscount]=useState()
    
    const SetCostPrice=()=>{
        console.log('newCostPrice',newCostPrice)
        console.log('oldCostPrice',costPrice)            
        if(newCostPrice) return newCostPrice
        else return costPrice.per_piece_cost_price
    }
    
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
            cost_price:SetCostPrice(),
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
                    amount:_quantity*costPrice.per_piece_sell_price,
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

    const onCostPriceChange=event=>{
        const _data=event.target.value
        setNewCostPrice(_data)
        const _costPrice=SetCostPrice()
        setAmount(quantity*_costPrice)
    }

    const onQuantityChange=(e)=>{
        const _quantity=e.target.value
        const _costPrice=SetCostPrice()
        console.log('cost price is',_costPrice)
        setQuantity(_quantity)
        setAmount(_quantity*_costPrice)
    }



    return (
            <ProductContent onSubmit={handleSubmit(onSubmit)}>
                <Card style={{height:'550px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        height:'550px',
                        paddingTop:'2px'
                    }}>
                        <Select
                            isClearable
                            placeholder='Select Product..'
                            options={productsOptions}
                            onChange={data=>{
                                if(data){
                                    setProduct(data)                                
                                    const _gstCode=gstCodes.find(gstCode=>gstCode.id===data.gst_code)
                                    const _price=productsCostPrice.find(price=>price.product===data.id)
                                    const _mrp=productsMrp.find(price=>price.product===data.id)
                                    setGstCode(_gstCode)
                                    setCostPrice(_price)
                                    setMrp(_mrp)
                                }
                                
                            }}
                        />
                        
                        <section>Name:{product?product.name:''}</section>
                        <section>Quantity in Stock:</section>
                        <section>Gst Rate:{gstCode?gstCode.totalGst:''}</section>
                        <section>Hsn Code:{gstCode?gstCode.code:''}</section>
                        <section>Cost Price(unit):{costPrice?costPrice.per_piece_cost_price:''}</section>                        
                        <section>Mrp:{mrp?mrp.amount:''}</section>
                        <section>Quantity:{quantity?quantity:''}</section>
                        <section>Amount:{amount?amount:''}</section>
                        <section>New Cost Price:{newCostPrice?newCostPrice:''}</section>

                        <TextField
                            label='New Cost Price'
                            variant='outlined'
                            size='small'
                            placeholder='Cost Price'
                            type='number'
                            onChange={onCostPriceChange}
                            disabled={!costPrice}
                        />

                        <TextField
                            label='Quantity'
                            variant='outlined'
                            size='small'
                            placeholder='Quantity'
                            type='number'
                            disabled={!product&&!quantityInStock}
                            onChange={onQuantityChange}
                        />
                        <TextField
                            label='Discount'
                            variant='outlined'
                            size='small'
                            placeholder='Discount'
                            type='number'
                            disabled={!product&&!quantityInStock}
                            onChange={data=>setDiscount(data)}
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
