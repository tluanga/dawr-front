import {combineReducers} from '@reduxjs/toolkit'
import vendor from './vendor/Vendor.slice'
import category from './category/Category.slice'



const reducer =combineReducers({
    vendor,
    category,

})
export default reducer