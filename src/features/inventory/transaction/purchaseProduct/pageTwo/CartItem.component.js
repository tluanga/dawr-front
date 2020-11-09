import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {useForm} from 'react-hook-form'

// ------Creat new Product Modal
import ProductModal from '../'


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
        selectCartTotalAmount,
        setTotalAmount,
        selectCartTotalTax,
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
    const productsCostPrice=useSelector(selectCostPrices)
    const productsMrp=useSelector(selectMrp)
    const cart=useSelector(selectCart)
    const cartTotalAmount=useSelector(selectCartTotalAmount)
    const cartTotalTax=useSelector(selectCartTotalTax)
    const productStocks=useSelector(selectAllStock)
    console.log('product options',productsOptions)
    
    // component state
    const [product,setProduct]=useState()
    const [gstCode,setGstCode]=useState()
    const [costPrice,setCostPrice]=useState()
    const [mrp,setMrp]=useState()
    const [productStock,setProductStock]=useState()
    const [quantityInStock,setQuantityInStock]=useState()
    const [quantity,setQuantity]=useState(null) //Quantity to purchase
    const [amount,setAmount]=useState(0)
    const [newCostPrice,setNewCostPrice]=useState()
    const [newSellingPrice,setNewSellingPrice]=useState()
    const [newMrp,setNewMrp]=useState()
    const [discount,setDiscount]=useState()
    const [disable,setDisabled]=useState({status:false,message:''})
    
    useEffect(()=>{
        dispatch(fetchProductList())
    },[dispatch])

    
    const SetCostPrice=()=>{                  
        if(newCostPrice) return newCostPrice
        else if(costPrice) return costPrice.per_piece_cost_price
    }

    const SetSellPrice=()=>{                  
        if(newSellingPrice) return newSellingPrice
        else if(costPrice) return costPrice.per_piece_cost_price
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
            dispatch(updateCartItem(_changesPayload))
            dispatch(setTotalAmount(cartTotalAmount+amount))
            dispatch(setTotalTax(cartTotalTax+payload.tax))
        } 
    }

   

    const onQuantityChange=(e)=>{
        const _quantity=e.target.value
        const _costPrice=SetCostPrice()
        setQuantity(_quantity)
        setAmount(_quantity*_costPrice)
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
                                    const _price=productsCostPrice.find(
                                        price=>price.product===data.id)
                                    const _mrp=productsMrp.find(
                                        price=>price.product===data.id)
                                    const _productStock=productStocks.find(
                                        stock=>stock.product===data.id)
                                    setGstCode(_gstCode)
                                    setCostPrice(_price)
                                    setMrp(_mrp)
                                    setProductStock(_productStock)
                                    if(_productStock){
                                        if(_productStock.quantity<1)setDisabled({status:true,message:'Not Enought Stock'})
                                    }
                                    else{
                                        setDisabled({status:false,message:''})
                                    }
                                    
                                }
                                
                            }}
                        />
                        
                        <section>Name:{product?product.name:''}</section>
                        <section>Quantity in Stock:{productStock?productStock.quantity:''}</section>                                               
                        <section>
                            Cost Price(unit):{costPrice?costPrice.per_piece_cost_price:''}                            
                        </section>
                        <section>Mrp:{mrp?mrp.amount:''}</section>
                        <section>Gst Rate:{mrp?mrp.amount:''}</section>                    
                        <section>Quantity:{quantity?quantity:''}</section>
                        <section>Amount:{amount?amount:''}</section>
                        
                        {disable.status===true? <Alert severity="error">{disable.message}</Alert>:''}
                        
                        <TextField
                            label='Quantity'
                            variant='outlined'
                            size='small'
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
                            disabled={!product&disable.status===true}
                            onChange={data=>setDiscount(data)}
                        />
                        <Button 
                            disabled={!quantity&disable.status===true}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Add to Cart</Button>
                        <Button 
                            disabled={!quantity&disable.status===true}
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
