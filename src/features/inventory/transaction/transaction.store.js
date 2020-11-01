import {combineReducers} from '@reduxjs/toolkit'
import purchaseProduct from './purchaseProduct/PurchaseProduct.slice'

const reducer=combineReducers({
    purchaseProduct
})

export default reducer