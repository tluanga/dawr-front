import {combineReducers} from '@reduxjs/toolkit'
import cartHeadReducer from './carthead/CartHeadSlice'
import cartItemReducer from './cartitem/cartitem.slice'

const reducer =combineReducers({
    carthead:cartHeadReducer,
    cartitem:cartItemReducer
})

export default reducer