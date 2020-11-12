import React from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {
    selectCartItemQuantity,
    setCartItemQuantity,
    selectCartItemDiscount,
    setCartItemDiscount
} from '../cartItem.slice'
const Container=styled.div``

const CartItemEntry = () => {
    const dispatch=useDispatch()
    const quantity=useSelector(selectCartItemQuantity)
    const discount=useSelector(selectCartItemDiscount)
    return (
        <Container>
            <TextField
                variant='outlined'
                size='small'
                type='number'
                placeholder='Quantity'
                defaultValue={quantity}
                onChange={data=>{
                    dispatch(setCartItemQuantity(data))
                }}
            />
            <TextField
                variant='outlined'
                size='small'
                type='number'
                placeholder='Discount'
                defaultValue={discount}
                onChange={data=>{
                    dispatch(setCartItemDiscount(data))
                }}
            />
            <Button
                variant='contained'
                color='primary'
                type='submit'
            >
                Add to Cart
            </Button>
            <Button
                variant='contained'
                color='primary'
            >
                Edit Price
            </Button>            
        </Container>
    )
}

export default CartItemEntry
