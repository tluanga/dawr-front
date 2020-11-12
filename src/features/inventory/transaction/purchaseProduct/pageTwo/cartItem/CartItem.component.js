import React from 'react'

//------Library Import
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {useForm} from 'react-hook-form'

// ------Custom Coponent
import ProductSelect from 
    './ProductSelect/ProductSelect.component'
import CartItemInfo from 
    './CartItemInfo/CartItemInfo.component'
import CartItemEntry from
    './CartItemEntry/CartItemEntry.component'


const ProductContent=styled.form`
    width:400px;
    padding:10px;
    display:flex;
    flex-direction:column;
`

const CartItem = () => {
    return (
        <ProductContent>
            <Card style={{height:'450px'}}>
                <CardContent style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',                        
                    height:'425px',
                    paddingTop:'10px',
                }}>
                    <ProductSelect/>
                    <CartItemInfo/>
                    <CartItemEntry/>
                </CardContent>
            </Card>
           
           
        </ProductContent>
    )
}

export default CartItem
