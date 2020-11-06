import {createSlice} from '@reduxjs/toolkit'

const purchaseProductInfo=createSlice({
    name:'purchaseInfo',
    initialState:{
        customer:{},       
        date:{},
    
    },
    reducers:{
        setVendor:(state,action)=>{
            state.vendor=action.payload
        },
        setDate:(state,action)=>{
            state.date=action.payload
        }
    }
})

export const {
    setVendor,
    setDate,

}=purchaseProductInfo.actions

export default purchaseProductInfo.reducer