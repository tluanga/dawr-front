import {createSlice} from '@reduxjs/toolkit'

const cartItemSlice=createSlice({
    name:'cartItem',
    initialState:{
        product:{},
        stock:0,
        costPrice:0,
        mrp:0,
        gstCode:'',
        taxRate:0,
        quantity:'',
        discount:'',
        amount:0        
    },
    reducers:{
        setCartItemProduct:(state,action)=>{
            state.product=action.payload
        },
        setCartItemStock:(state,action)=>{
            state.stock=action.payload
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
        setCartItemTaxRate:(state,action)=>{
            state.taxRate=action.payload
        },
        setCartItemQuantity:(state,action)=>{
            state.quantity=action.payload
        },
        setCartItemDiscount:(state,action)=>{
            state.discount=action.payload
        },
        setCartItemAmount:(state,action)=>{
            state.amount=action.payload
        },
        setCartItemClear:(state)=>{
            state.product=0
            state.stock=0
            state.costPrice=0
            state.mrp=0
            state.gstCode=0
            state.taxRate=0
            state.quantity=''
            state.discount=''
            state.amount=0
        }
        
    },
})

// -------export Actions
export const {
    setCartItemProduct,
    setCartItemStock,
    setCartItemCostPrice,
    setCartItemMrp,
    setCartItemGstCode,
    setCartItemTaxRate,
    setCartItemQuantity,
    setCartItemDiscount,
    setCartItemAmount,
    setCartItemClear
}=cartItemSlice.actions

// ---------Selector
export const selectCartItemProduct=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.product

export const selectCartItemStock=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.stock


export const selectCartItemCostPrice=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.costPrice

export const selectCartItemMrp=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.mrp

export const selectCartItemGstCode=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.gstCode

export const selectCartItemTaxRate=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.taxRate

export const selectCartItemQuantity=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.quantity

export const selectCartItemDiscount=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.discount

export const selectCartItemAmount=state=>
    state.inventory.transaction.purchaseProduct.
    cartItem.amount



export default cartItemSlice.reducer