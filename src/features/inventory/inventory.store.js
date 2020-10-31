import {combineReducers} from '@reduxjs/toolkit'
import vendor from './vendor/Vendor.slice'
import category from './category/Category.slice'
import customerType from './customerType/CustomerType.slice'



const reducer =combineReducers({
    vendor,
    category,
    customerType,

})
export default reducer