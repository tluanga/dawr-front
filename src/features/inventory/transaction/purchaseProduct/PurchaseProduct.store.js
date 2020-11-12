import {combineReducers} from '@reduxjs/toolkit'
import productPurchaseInfo from './pageOne/PurchaseProductInfo.slice'
import cart from './pageTwo/Cart.Slice'
import cartItem from './pageTwo/cartItem/cartItem.slice'
import cartUi from './pageTwo/cartUi.store'


const reducer=combineReducers({
    productPurchaseInfo,
    cart,
    cartItem,
    cartUi,
    
})

export default reducer