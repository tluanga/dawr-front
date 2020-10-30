import {createSlice,createEntityAdapter} from '@reduxjs/toolkit'

const cartEntityAdapter=createEntityAdapter([])

export const {
    selectAll:selectCart,
    selectById:selectCartItemById
}=cartEntityAdapter.getSelectors(state=>state.pos.cart)

export const cartSlice=createSlice({
    name:'cart',
    initialState:cartEntityAdapter.getInitialState([]),
    reducers:{
        addCartItem:cartEntityAdapter.addOne,
        clearCart:cartEntityAdapter.removeAll
    }
})

export const{
    addCartItem,
    clearCart
}=cartSlice.actions

export default cartSlice.reducer


