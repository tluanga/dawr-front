import React from 'react'
// ------Redux---------
import {useSelector} from 'react-redux'
import {selectCartTotalAmount} from './Cart.Slice'
import Button from '@material-ui/core/Button'
const CartSummary= () => {
    const cartTotalAmount=useSelector(selectCartTotalAmount)
    return (
        <div>
            <div>
                <h4>Total Amount:{cartTotalAmount}</h4>
                <h4>Total Tax Amount:100</h4>
                <h4>Total Discount:10000</h4>
            </div>
            <Button
                variant='contained'
                color='primary'
                style={{width:'200px'}}
            >Submit</Button>
            <Button
                variant='contained'
                color='secondary'
                style={{width:'200px'}}
            >Clear Cart</Button>

        </div>
    )
}

export default CartSummary
