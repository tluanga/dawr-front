import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import {selectProductSellPrice} from '../../../inventory/product/ProductSellPrice.slice'
import {selectProductSelector,selectProduct} from '../../../inventory/product/Product.slice'
import {searchGstCode, selectGstCode} from '../../../inventory/gstcode/GstCode.slice'
import {selectedCustomerSelector} from '../../../inventory/customer/Customer.slice'
import {addCartItem,selectCart} from '../pos-cart/cart.slice'
import styled from 'styled-components'
import Select from 'react-select'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ProductSelectSection=styled.section`
    width:350px;
    height:500px;

`
const Text=styled.p`
    padding-bottom:2px;
`
const TextLabel=styled.strong`
    color:blue;
`

const calculateDiscount=(sellingPrice,quantity,discountPercent)=>{
    const amount=(sellingPrice*quantity)
    const amountdividedbyHundred=amount/100
    const discountAmount=amountdividedbyHundred*discountPercent
    
    console.log('amount',amount)
    console.log('discountPercent',discountPercent)
    console.log('amount divide by 100',amountdividedbyHundred)

    return(discountAmount)
}
   



const ProductSelectBox = () => {
    const dispatch=useDispatch()
    const products=useSelector(selectProduct)    
    const cart=useSelector(selectCart)
    const customer=useSelector(selectedCustomerSelector)
    const productSelect=useSelector(selectProductSelector) 
    const sellPrices=useSelector(selectProductSellPrice)
    const gstCodes=useSelector(selectGstCode)
    const stock=useSelector()

    
    const [options,setOptions]=useState()
    const [product,setProduct]=useState()
    const [price,setPrice]=useState()
    const [gst,setGst]=useState()


    const {register,handleSubmit,errors,watch,getValues}=useForm()
    const watchQuantity=watch([
        'quantity'
    ])
    const loadProducts=()=>{
        const b=[]
        products.map(product=>{
            const a={
                id:product.id,
                label:product.name,
                hsn_code:product.hsn_code
            }
            b.push(a)
        })
        return b
    }
    
    useEffect(()=>{
        setOptions(loadProducts())
        
    },[])
   
    const handleSelectChange=data=>{
        
        setProduct('test')
        console.log('selected Product',data.id)
        console.log('sell Prices',sellPrices)
        setProduct(products.find(product=>product.id===data.id))
        setPrice(sellPrices.find(price=>price.id===data.id)) 
        setGst(gstCodes.find(gst=>gst.id===data.hsn_code))       
        
    }
    
   
    console.log(gst)
    const onSubmit=data=>{
        const payload={
            id:cart.length+1,            
            product_id:product.product_id,
            name:product.name,
            sellingPrice:productSelect.sellingPrice,
            hsnCode:productSelect.gstCode,
            gstRate:productSelect.gstRate,
            mrp:productSelect.mrp,
            quantity:parseInt(data.quantity),            
            discount:calculateDiscount(productSelect.sellingPrice,data.quantity,customer.discount_percentage),
            amount:(productSelect.sellingPrice*data.quantity)-calculateDiscount(productSelect.sellingPrice,data.quantity,customer.discount_percentage)
        }        
        dispatch(addCartItem(payload))
    }
    return (
        <ProductSelectSection>
            <Select
                placeholder='Select Product...'
                options={options}
                onChange={handleSelectChange}
            />
            <Text><TextLabel>Name:</TextLabel>{product?product.name:''}</Text>
            <Text><TextLabel>Selling Price(Per Piece)</TextLabel>:{price?price.per_piece_sell_price:''}</Text>
            <Text><TextLabel>Selling Price(Per Bulk)</TextLabel>:{price?price.per_bulk_sell_price:''}</Text>
            <Text><TextLabel>Mrp:</TextLabel>{productSelect.mrp}</Text>
            <Text><TextLabel>Tax Rate:</TextLabel>{gst?gst.totalGst:''}</Text>
            <Text><TextLabel>Quantity in Stock</TextLabel>{productSelect.stock}</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    type="number"
                    variant='outlined'
                    name='quantity'
                    label='quantity'
                    placeholder='0'
                    error={errors.quantity}
                    helperText={errors.quantity?'Quantity Required':''}
                    style={{
                        backgroundColor:'yellowgreen',
                        fontStyle:'italic',
                        fontSize:'18px'
                    }}
                    inputRef={register}
                />
                <Button 
                    variant='contained'
                    type='submit'
                    startIcon={<ShoppingCartIcon/>}
                    style={{backgroundColor:'yellow'}}
                    size='large'
                >Add to Basket</Button>
            </form>
            
        </ProductSelectSection>
        
    )
}

export default ProductSelectBox
