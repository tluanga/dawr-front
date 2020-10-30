import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import SalesChart from '../charts/saleschart'

import ProductDialog from '../../../../features/inventory/product/Product.dialog'

const ProductCardContainer=styled(Card)`
    width:30vw;
    height:80vh;
`

function ProductCard() {
    return (
       <ProductCardContainer>
           <ProductDialog isButtonEnabled={true}/>
            <SalesChart/>
            <h4>Monthly Report</h4>
            <h5>Inward Inventory:14566</h5>
            <h5>Present Stock:15677</h5>
            <h4>Latest Product</h4>
            1. Samsung Galaxy
            2. Jio Phone

       </ProductCardContainer>
    )
}

export default ProductCard
