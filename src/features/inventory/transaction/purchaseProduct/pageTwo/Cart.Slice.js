import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'

const cartEntityAdapter=createEntityAdapter({})

export const {selectAll:selectCart}=
    cartEntityAdapter.getSelectors(state=>
        state.inventory.transaction.purchaseProduct.cart)

const cartSlice=createSlice({
    name:'cart',
    initialState:cartEntityAdapter.getInitialState({
        totalAmount:0,
        totalTax:0,
        totalDiscount:0
    }),
    reducers:{
        addCartItem:cartEntityAdapter.addOne,
        updateCartItem:cartEntityAdapter.updateOne,
        removeCartItem:cartEntityAdapter.removeAll,
        clearCartItem:cartEntityAdapter.removeAll,
        setTotalAmount:(state,action)=>{
            state.totalAmount=action.payload
        },
        setTotalTax:(state,action)=>{
            state.totalTax=action.payload
        },
        
    },

})

// -------Selector
export const selectTotalAmount=state=>
    state.inventory.transaction.purchaseProduct.cart.totalAmount

export const selectTotalTax=state=>
    state.inventory.transaction.purchaseProduct.cart.totalTax

export const selectTotalDiscount=state=>
    state.inventory.transaction.purchaseProduct.cart.totalDiscount


export const {
    addCartItem,
    updateCartItem,
    removeCartItem,
    clearCartItem,
    setTotalAmount,
    setTotalTax
} =cartSlice.actions


export default cartSlice.reducer