import {combineReducers} from '@reduxjs/toolkit'
import productPurchaseInfo from './pageOne/PurchaseProductInfo.slice'
import cart from './pageTwo/Cart.Slice'

const reducer=combineReducers({
    productPurchaseInfo,
    cart
})

export default reducer