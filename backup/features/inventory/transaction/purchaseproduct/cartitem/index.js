import React,{useState} from 'react'

import './cartitem.css'


import CartItemForm from './productselect'
import CartItemDataForm from './cartitemform'
import Cart from './cart'

const CartItem=()=>{
    return(
        <div className='cartitem__block'>
            <div className='cartitem__column1'>
                <CartItemForm/>
            </div>            
            <div className='cartitem__column2'>
                 <CartItemDataForm/>
            </div>
            <div className='column3'>
                <Cart/>
            </div> 
        </div>
    )
    
}


export default CartItem
