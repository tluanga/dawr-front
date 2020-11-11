import {createSlice} from '@reduxjs/toolkit'

const cartItemSlice=createSlice({
    name:'cartItem',
    initialState:{
        product:{},
        costPrice:0,
        mrp:0,
        gstCode:'',
        tax:0,
        discount:0,
        amount:0        
    },
    reducers:{
        setCartItemProduct:(state,action)=>{
            state.product=action.payload
        },
        setCartItemCostPrice:(state,action)=>{
            state.costPrice=action.payload
        },
        setCartItemMrp:(state,action)=>{
            state.mrp=action.payload
        },
        setCartItemGstCode:(state,action)=>{
            state.gstCode=action.payload
        },
        setCartItemTax:(state,action)=>{
            state.tax=action.payload
        },
        setCartItemDiscount:(state,action)=>{
            state.discount=action.payload
        },
        setCartItemAmount:(state,action)=>{
            state.amount=action.payload
        },
        
    },
})

// -------export Actions
export const {
    setCartItemProduct,
    setCartItemCostPrice,
    setCartItemMrp,
    setCartItemGstCode,
    setCartItemTax,
    setCartItemDiscount,
    setCartItemAmount
}=cartItemSlice.actions

// ---------Selector
export const selectCartItemProduct=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.product

export const selectCartItemCostPrice=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.costPrice

export const selectCartItemMrp=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.mrp

export const selectCartItemGstCode=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.gstCode

export const selectCartItemTax=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.tax

export const selectCartItemDiscount=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.discount

export const selectCartItemAmount=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.amount



export default cartItemSlice.reducer