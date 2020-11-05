import {createSlice} from '@reduxjs/toolkit'

const purchaseProductInfo=createSlice({
    name:'purchaseInfo',
    initialState:{
        vendor:{},
        warehouse:{},
        date:{},
    
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

export const {
    setVendor,
    setWarehouse,
    setDate,
    setProduct
}=purchaseProductInfo.actions

export default purchaseProductInfo.reducer