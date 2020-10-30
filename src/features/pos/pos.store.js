import {combineReducers} from '@reduxjs/toolkit'
import CartReducer from './terminal/pos-cart/cart.slice'
import CustomerReducer from './terminal/customer-select/posCustomer.slice'

const reducer=combineReducers({
    customer:CustomerReducer,
    cart:CartReducer
})

export default reducer