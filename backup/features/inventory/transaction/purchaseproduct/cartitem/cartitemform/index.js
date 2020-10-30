import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux'
import {addCartItem,updateCartItem,selectCartItems} from '../cartitem.slice'
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styled from 'styled-components'
import { Button, TextField,Paper } from '@material-ui/core'
import './CartItemDataForm.css'

const TextNumber=styled(TextField)`
    width:100px;
`

const CartItem=()=>{
    const dispatch=useDispatch()
    const product=useSelector(state=>state.component.select.product)
    const cart=useSelector(selectCartItems)
    
    let totalCostPrice=0
    let profitMarginPercent=0
    let profitAmount=0
    
    let defaultValue={
        quantity:0,
        cost_price:0,
        gst:'0',
        discount:'0',
        total_costprice:0,
        sale_rate:0,
        mrp:0,
        remarks:''

    }
    
    if(product.length<1){
        defaultValue={
            quantity:0,
            cost_price:product.cost_price,
            gst:'0',
            discount:'0',
            total_costprice:0,

        }
    } 
    
    const {register,handleSubmit,watch,getValues} = useForm({
        defaultValues:defaultValue
    }) 
    const watchInput=watch([
        'quantity',
        'cost_price',
        'gst',
        'discount',
        'sale_rate',
        'mrp'
    ])
    

    if(watchInput){
        const _cost_price=getValues('cost_price')

        totalCostPrice=((
            (getValues('quantity')*_cost_price
                +parseFloat(getValues('gst'))
                -parseFloat(getValues('discount'))
                )
            )

        )
        const sale_rate=getValues('sale_rate')
        
        if (sale_rate>0)
        profitAmount=sale_rate-_cost_price
        
        if(profitAmount!==0)profitMarginPercent=(profitAmount/sale_rate)*100
        
    }
    const onSubmit=data=>{ 
        console.clear() 
        console.log('Checking data for submission')
        
        let duplicate=0
        let duplicateState={}
        
     
        const payload={
            id:cart.length+1,
            name:product.name,
            quantity:parseInt(data.quantity),
            cost_price:parseInt(data.cost_price),
            gst:parseInt(data.gst),
            discount:parseInt(data.discount),
            total_costprice:totalCostPrice,
            sale_rate:data.sale_rate,
            mrp:data.mrp,
            remarks:data.remarks
            // data,
        }
        
        //Check for duplicate data in the store
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
          
            const _changesPayload={
                id:duplicateState.id,
                changes:{
                    quantity:duplicateState.quantity+
                        payload.quantity,
                    cost_price:duplicateState.cost_price+
                    payload.cost_price,
                    gst:duplicateState.gst+payload.gst,
                    discount:duplicateState.discount+
                    payload.discount,
                    total_costprice:duplicateState.total_costprice+payload.total_costprice,
                    
                }
                
                
            }
            console.log(_changesPayload)
            dispatch(updateCartItem(_changesPayload))
            console.log('update the product',duplicateState.quantity)
        } 
        // (duplicate!==1)?dispatch(addCarItem(payload))
        // :console.log('duplicate exist')
    }

    return(
        // <Paper elevation={3}>
            <form className='cartitem__form'
            onSubmit={handleSubmit(onSubmit)}>
                
                <div className='form__column'>
                    <TextNumber
                        name='quantity'
                        variant='outlined'
                        label='Quantity'
                        inputRef={register}
                        
                    /> 
                    <TextNumber
                        type='number'
                        name='cost_price'
                        variant='outlined'
                        label='Cost Price'
                        inputRef={register}
                    />
                    <TextNumber
                        type='number'
                        name='gst'
                        variant='outlined'
                        label='GST'
                        inputRef={register}
                    />
                    <TextNumber
                        type='number'
                        name='discount'
                        variant='outlined'
                        label='Discount'
                        inputRef={register}
                    />
                    <Paper elevation={3} className='form__totalcost'>
                       {
                          isNaN( totalCostPrice)?
                          <div>
                              <div>Total Cost Price:</div>
                              <div>Profit Margin:</div>
                              <div>Profit Margin Percentage</div>                             
                              
                          </div>:
                          <div>
                                <div>Total Cost Price:{totalCostPrice}</div>
                                <div>Profit Margin:{profitAmount}</div>
                                <div>Profit Margin Percentage:{profitMarginPercent}</div>                                
                           </div>
                           
                       }
                        
                    </Paper>
                    {/* <TextField
                        type='number'
                        placeholder={0}
                        defaultValue={0}                                                              
                        name='total_costprice'
                        variant='outlined'
                        label='Total Cost Price'
                        inputRef={register}
                    />    */}

                </div>
                <div className='form__column'>
                    <TextNumber
                        name='sale_rate'
                        variant='outlined'
                        label='Sale Rate'
                        inputRef={register}
                    />
                    <TextNumber
                        name='mrp'
                        variant='outlined'
                        label='Mrp'
                        inputRef={register}
                    />
                    <TextNumber
                        name='remarks'
                        variant='outlined'
                        label='Remarks'
                        inputRef={register}
                    />
                    <div className='form__button'>
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                            startIcon={<ShoppingBasketIcon/>}
                        >Add to Basket</Button>
                       <Button
                            variant='contained'
                            type='submit'
                            color='secondary'
                            startIcon={<DeleteIcon/>}
                        >Clear</Button>
                    </div>
                   
                </div>
            </form>
        // </Paper>
        
       
    )
}


export default CartItem
