import {combineReducers} from '@reduxjs/toolkit'
import product from './Product.slice'
import stock from './ProductStock.slice'
import sellingPrice from './ProductSellingPrice.slice'
import costPrice from './ProductCostPrice.slice'
import mrp from './ProductMrp.slice'

const reducer=combineReducers({
    product,
    stock,
    sellingPrice,
    costPrice,
    mrp
})

export default reducer