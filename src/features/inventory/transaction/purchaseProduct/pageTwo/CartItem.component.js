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
import {selectProductsCurrentPrice} from '../../../product/ProductPrice.slice'
import {selectGstCodeList} from '../../../gstCode/GstCode.slice'
import {addCartItem,selectCart,updateCartItem} from './Cart.Slice'



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
    const productsSellPrice=useSelector(selectProductsCurrentPrice)
    const cart=useSelector(selectCart)
    
    // component state
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [price,setPrice]=useState()
    const [quantityInStock,setQuantityInStock]=useState()
    const [quantity,setQuantity]=useState() //Quantity to purchase
    const [amount,setAmount]=useState()
    
    console.log('cart',cart.entities)
    console.log(typeof(cart.entities))
    
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
        }else{
            const _quantity=parseInt(duplicateState.quantity)
            +parseInt(payload.quantity)
            const _changesPayload={
                id:duplicateState.id,
                changes:{
                    quantity:_quantity,
                    amount:_quantity*price.per_piece_sell_price,
                    tax:_quantity*gstCode.totalGst
                    // cost_price:duplicateState.cost_price+
                    // payload.cost_price,
                    // gst:duplicateState.gst+payload.gst,
                    // discount:duplicateState.discount+
                    // payload.discount,
                    // total_costprice:duplicateState.total_costprice+payload.total_costprice,
                    
                }
                
                
            }
            console.log(_changesPayload)
            dispatch(updateCartItem(_changesPayload))
            console.log('update the product',duplicateState.quantity)
        } 


    }


    const onQuantityChange=(e)=>{
        const _quantity=e.target.value
        setQuantity(_quantity)
        setAmount(_quantity*price.per_piece_sell_price)
    }



    return (
            <ProductContent onSubmit={handleSubmit(onSubmit)}>
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
                            type='number'
                            disabled={!product&&!quantityInStock}
                            onChange={onQuantityChange}
                        />
                        <Button 
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
