import {combineReducers} from '@reduxjs/toolkit'

import customerTypeReducer from './customer-type/CustomerType.slice'
import customerReducer from './customer/Customer.slice'

const reducer=combineReducers({
    customer:customerReducer,
    customerType:customerTypeReducer
})

export default reducer
