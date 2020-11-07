import {createSlice} from '@reduxjs/toolkit'

const purchaseProductInfo=createSlice({
    name:'purchaseInfo',
    initialState:{
    },
    reducers:{
        setVendor:(state,action)=>{
            state.vendor=action.payload
        },
        setWarehouse:(state,action)=>{
            state.warehouse=action.payload
        },
        setDate:(state,action)=>{
            state.date=action.payload
        }
    }
})

export const selectVendor=state=>state.inventory.transaction.purchaseProduct.productPurchaseInfo.vendor
export const selectWarehouse=state=>state.inventory.transaction.purchaseProduct.productPurchaseInfo.warehouse

export const {
    setVendor,
    setWarehouse,
    setDate,
    setProduct
}=purchaseProductInfo.actions

export default purchaseProductInfo.reducer