import {combineReducers} from '@reduxjs/toolkit'
import productPurchaseInfo from './pageOne/PurchaseProductInfo.slice'
import cart from './pageTwo/Cart.Slice'
import cartUi from './pageTwo/CartUi.slice'

const reducer=combineReducers({
    productPurchaseInfo,
    cart,
    cartUi
})

export default reducer