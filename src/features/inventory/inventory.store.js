import {combineReducers} from '@reduxjs/toolkit'
import customer from './customer/Customer.slice'
import vendor from './vendor/Vendor.slice'
import category from './category/Category.slice'
import customerType from './customerType/CustomerType.slice'
import gstCode from './gstCode/GstCode.slice'
import unitOfMeasurement from './unitOfMeasurement/UnitOfMeasurement.slice'


const reducer =combineReducers({
    customer,
    vendor,
    category,
    customerType,
    gstCode,
    unitOfMeasurement,

})
export default reducer