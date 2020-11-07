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
import productPrice from './product/ProductPrice.slice'
import productStock from './product/ProductStock.slice'
import manufacturer from './manufacturer/Manufacturer.slice'



const reducer =combineReducers({
    customer,
    product,
    productPrice,
    productStock,
    vendor,
    category,
    customerType,
    gstCode,
    unitOfMeasurement,
    warehouse,
    transaction,
    manufacturer,    

})
export default reducer