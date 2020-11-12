import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {
    selectCartItemProduct,
    selectCartItemStock,
    selectCartItemCostPrice,
    selectCartItemMrp,
    selectCartItemGstCode,
    selectCartItemTaxRate,
    selectCartItemQuantity,
    selectCartItemDiscount,
    selectCartItemAmount,
} from '../cartItem.slice'

const Container=styled.div`
    height:190px;
    display:flex;
    flex-direction:column;
    justify-content:space-between ;
`

const CartItemInfo = () => {
    const product=useSelector(selectCartItemProduct)
    const stock=useSelector(selectCartItemStock)
    const costPrice=useSelector(selectCartItemCostPrice)
    const mrp=useSelector(selectCartItemMrp)
    const gstCode=useSelector(selectCartItemGstCode)
    const taxRate=useSelector(selectCartItemTaxRate)
    const quantity=useSelector(selectCartItemQuantity)
    const discount=useSelector(selectCartItemDiscount)
    const amount=useSelector(selectCartItemAmount)
    return (
        <Container>
            <section>
                Name:{product?product.name:''}
            </section>
            <section>
                Quantity in Stock:{stock?stock:''}
            </section>                                               
            <section>
                Cost Price(unit):{costPrice?costPrice:''}                            
            </section>
            <section>
                Mrp:{mrp?mrp:''}
            </section>
            {/* <section>
                HSN Code:{gstCode?gstCode:''}
            </section>  */}
            <section>
                Tax Amount:{taxRate?taxRate:''}
            </section>                   
            <section>
                Quantity:{quantity?quantity:''}
            </section>
            <section>
                Discount:{discount?discount:''}
            </section>
            <section>
                Amount:{amount?amount:''}
            </section>
        </Container>
    )
}

export default CartItemInfo