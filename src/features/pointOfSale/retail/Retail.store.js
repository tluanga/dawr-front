import {combineReducers} from '@reduxjs/toolkit'
import cartInfo from './CartInfo.slice'
import cart from './Cart.Slice'

const reducer=combineReducers({
    cartInfo,
    cart
})

export default reducer