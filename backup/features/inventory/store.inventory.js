import {combineReducers} from '@reduxjs/toolkit'
import product from './product/Product.slice'
import productSellPrice from './product/ProductSellPrice.slice'
import customer from './customer/Customer.slice'
import category from './category/Category.slice'
import gstcode from './gstcode/GstCode.slice'
import unitofmeasurement from './unitofmeasurement/UnitOfMeasurement.slice'
import supplier from './supplier/Supplier.slice'

import transaction from './transaction/transaction.store'
//------Point of Sale Related
import customertype from './customertype/CustomerType.slice'


const reducer =combineReducers({
    product,
    productSellPrice,
    customer,
    category,
    gstcode,
    unitofmeasurement,
    supplier,
    transaction,
    customertype,


})
export default reducer