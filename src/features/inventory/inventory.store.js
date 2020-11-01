import {combineReducers} from '@reduxjs/toolkit'
import customer from './customer/Customer.slice'
import vendor from './vendor/Vendor.slice'
import category from './category/Category.slice'
import customerType from './customerType/CustomerType.slice'
import gstCode from './gstCode/GstCode.slice'
import unitOfMeasurement from './unitOfMeasurement/UnitOfMeasurement.slice'
import warehouse from './warehouse/Warehouse.slice'


const reducer =combineReducers({
    customer,
    vendor,
    category,
    customerType,
    gstCode,
    unitOfMeasurement,
    warehouse,

})
export default reducer