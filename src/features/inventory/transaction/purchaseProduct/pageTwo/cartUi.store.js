import {combineReducers} from '@reduxjs/toolkit'
import editPriceModal from './cartItem/editPriceModal/EditPrice.slice'
import productModal from './cartItem/ProductModal/ProductModal.slice'

const reducer=combineReducers({
    editPriceModal,
    productModal
})

export default reducer