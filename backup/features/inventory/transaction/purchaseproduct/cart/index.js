import React from 'react'
import './cart.css'
import CartItem from '../cartitem'


function Cart() {
    return (
        <div className='cart'>
            
            <h1>cart</h1>
            <CartItem/>
        </div>
    )
}

export default Cart
