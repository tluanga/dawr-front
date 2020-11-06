import {createSlice} from '@reduxjs/toolkit'

const purchaseProductInfo=createSlice({
    name:'purchaseInfo',
    initialState:{
        customer:{},       
        date:{},
    
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.customer=action.payload
        },
        setDate:(state,action)=>{
            state.date=action.payload
        }
    }
})

// -----Selectors--------
export const selectCustomer=state=>state.pos.retail.cartInfo.customer


export const {
    setCustomer,
    setDate,

}=purchaseProductInfo.actions

export default purchaseProductInfo.reducer