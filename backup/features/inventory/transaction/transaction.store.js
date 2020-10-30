import {combineReducers} from '@reduxjs/toolkit'
import purchaseProductReducer from './purchaseproduct/PurchaseProduct.store'

const reducer=combineReducers({
    productpurchase:purchaseProductReducer
})

export default reducer