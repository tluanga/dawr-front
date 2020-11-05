import {combineReducers} from '@reduxjs/toolkit'
import purchaseProduct from './purchaseProduct/PurchaseProduct.store'

const reducer=combineReducers({
    purchaseProduct
})

export default reducer