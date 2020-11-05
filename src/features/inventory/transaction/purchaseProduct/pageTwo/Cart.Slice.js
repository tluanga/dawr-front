import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'

const cartEntityAdapter=createEntityAdapter({})

export const {selectAll:selectCart}=
    cartEntityAdapter.getSelectors(state=>
        state.inventory.transaction.purchaseProduct.cart)

const cartSlice=createSlice({
    name:'cart',
    initialState:cartEntityAdapter.getInitialState({
        totalAmount:0,
        totalTax:0
    }),
    reducers:{
        addCartItem:cartEntityAdapter.addOne,
        updateCartItem:cartEntityAdapter.updateOne,
        removeCartItem:cartEntityAdapter.removeAll,
        clearCartItem:cartEntityAdapter.removeAll,
        updateTotalAmount:(state,action)=>state.totalAmount=action.payload,
        updateTotalTax:(state,action)=>state.totalTax=action.payload
    },

})

export const selectCartItems=state=>
    state.inventory.transaction.purchaseProduct.cart.entities

export const {
    addCartItem,
    updateCartItem,
    removeCartItem,
    clearCartItem,
    updateTotalAmount,
    updateTotalTax
} =cartSlice.actions


export default cartSlice.reducer