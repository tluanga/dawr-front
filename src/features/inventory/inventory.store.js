import {combineReducers} from '@reduxjs/toolkit'
import customer from './customer/Customer.slice'
import vendor from './vendor/Vendor.slice'
import category from './category/Category.slice'
import customerType from './customerType/CustomerType.slice'
import gstCode from './gstCode/GstCode.slice'
import unitOfMeasurement from './unitOfMeasurement/UnitOfMeasurement.slice'
import warehouse from './warehouse/Warehouse.slice'
import transaction from './transaction/transaction.store'
import product from './product/Product.slice'


const reducer =combineReducers({
    customer,
    product,
    vendor,
    category,
    customerType,
    gstCode,
    unitOfMeasurement,
    warehouse,
    transaction

})
export default reducer