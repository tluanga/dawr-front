import React from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {
    selectCartItemCostPrice,
    selectCartItemQuantity,
    setCartItemQuantity,
    selectCartItemDiscount,
    setCartItemDiscount,
    selectCartItemAmount,
    setCartItemAmount
} from '../cartItem.slice'
const Container=styled.div`
    height:180px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const CartItemEntry = () => {
    const dispatch=useDispatch()
    const costPrice=useSelector(selectCartItemCostPrice)
    const quantity=useSelector(selectCartItemQuantity)
    const discount=useSelector(selectCartItemDiscount)
    const amount=useSelector(selectCartItemAmount)
    return (
        <Container>
            <TextField
                variant='outlined'
                size='small'
                type='number'
                placeholder='Quantity'
                value={quantity}
                onChange={event=>{
                    dispatch(
                        setCartItemQuantity(
                        event.target.value
                        ))
                    dispatch(
                        setCartItemAmount(
                            event.target.value*costPrice
                        )
                    )                        
                    }
                }
            />
            <TextField
                variant='outlined'
                size='small'
                type='number'
                disabled={amount<=0}
                placeholder='Discount'
                value={discount}
                onChange={event=>{
                        dispatch(setCartItemDiscount(
                            event.target.value
                        ))

                        dispatch(setCartItemAmount(
                            (quantity*costPrice)-event.target.value
                        ))
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
