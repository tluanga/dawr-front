import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addCarItem,removeCartItem, selectCartItems} from './cartitem.slice'
import AsyncSelect from 'react-select/async'
import {searchProduct} from '../../../../../api/search.select.api'
import {searchItem} from '../../../../../api/api' ;
import './cartitem.css'
import { Button, TextField,Paper } from '@material-ui/core'
import CartTable from './CartTable'
import CartDialog from './Dialog'
import { initial } from 'lodash'

const CartItem=()=>{
    const [defaultValueCartItem,setdefaultValueCartItem]=useState()
    const dispatch=useDispatch()
    const cartItems=useSelector(selectCartItems)
    
    const id=cartItems.length
    
    const [product,setProduct] =useState()
    
    const [total_costprice,setTotalCostPrice]=useState(0)

    //-----React Async Select
    const productOptions = inputValue =>
        new Promise(resolve => {
            
            setTimeout(() => {
            resolve(searchProduct(inputValue));
            }, 1000);
    });

    let defaultValue={}
    if(defaultValueCartItem){
        defaultValue={
            cost_price:defaultValueCartItem.selling_price
        }
    }
    
    
    
    
    const {register,handleSubmit,watch,getValues,setValue} = useForm({
        defaultValues:defaultValue
    }) 
    const watchInput=watch(['quantity','cost_price','gst','discount'])
    const history=useHistory()
    const onCheckOut=()=>{  
        history.push('/inventory/transaction/purchaseproduct/summary')
    }
   
    watchInput&&setValue('total_costprice',(
            (getValues('quantity')*getValues('cost_price')
                +parseFloat(getValues('gst'))
                +parseFloat(getValues('discount'))
                )
            )

        )
    const onSubmit=data=>{
        
        const payload={
            id:id+1,
            name:product.name,
            quantity:parseInt(data.quantity),
            cost_price:parseInt(data.cost_price),
            gst:parseInt(data.gst),
            discount:parseInt(data.discount),
            total_costprice:parseInt(data.total_costprice)
            // data,
        }
        
        dispatch(addCarItem(payload))
    }

    return(
        <div className='block'>
            <form className='form'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='column1'>
                    <AsyncSelect 
                                cacheOptions
                                placeholder='Select Product...'
                                defaultOptions
                                loadOptions={productOptions}
                                className='__productselect'
                                size='small'
                                onChange={ async data=>{
                                    const inputValue=data.value
                                    
                                    const params={
                                        url:'product',
                                        searchParam:[     
                                            {
                                              key:'id_iexact',
                                              value:inputValue
                                            },          
                                                      
                                        ]
                                }                                        
                                      const a= await searchItem(params)
                                      setProduct(a[0])
                                      setdefaultValueCartItem(a[0])     
                                    
                                }
                            }
                    /> 
                    
                    {product?<div>
                        <Paper elevation={3}>
                            <h4>Name:{product.name}</h4>
                            <h4>Model:{product.model}</h4>
                            <h4>Brand:{product.brand}</h4>
                            <h4>Category:{product.category}</h4>
                            <h4>Cost Price:{product.cost_price}</h4>
                            <h4>Selling Price:{product.selling_price}</h4>
                            <h4>MRP:{product.mrp}</h4>
                            <h4>Remarks:{product.remarks}</h4>
                        </Paper>
                        
                    </div>
                    :'loading'
                    }
                    
                </div>
                <div className='column2'>
                    <TextField
                        name='quantity'
                        variant='outlined'
                        label='Quantity'
                        inputRef={register}
                    /> 
                    <TextField
                        type='number'
                        name='cost_price'
                        variant='outlined'
                        label='Cost Price'
                        inputRef={register}
                    />
                    <TextField
                        type='number'
                        name='gst'
                        variant='outlined'
                        label='GST'
                        inputRef={register}
                    />
                    <TextField
                        type='number'
                        name='discount'
                        variant='outlined'
                        label='Discount'
                        inputRef={register}
                    />
                    <TextField                                        
                        name='total_costprice'
                        variant='outlined'
                        label='Total Cost Price'
                        inputRef={register}
                    />   

                </div>
                <div className='column3'>
                    <TextField
                        name='sale_rate'
                        variant='outlined'
                        label='Sale Rate'
                        inputRef={register}
                    />
                    <TextField
                        name='mrp'
                        variant='outlined'
                        label='Mrp'
                        inputRef={register}
                    />
                    <TextField
                        name='remarks'
                        variant='outlined'
                        label='Remarks'
                        inputRef={register}
                    />
                   <Button
                        variant='outlined'
                        type='submit'
                    >Add to Basket</Button>
                    <Button                        
                        variant='outlined'
                    >Clear</Button>
                </div>
                <div className='column4'>
                    <CartTable/>
                    <div className='column4__button'>
                        <Button 
                            variant='outlined'
                            color='primary'
                            onClick={onCheckOut}
                            >CheckOut</Button>
                        <Button
                            variant='outlined'
                            color='secondary'
                        >Clear</Button> 
                    </div>                                      
                </div>              

                
                
            </form>
           
           
        </div>
    )
}


export default CartItem
