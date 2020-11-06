import {createSlice} from '@reduxjs/toolkit'

const purchaseProductInfo=createSlice({
    name:'purchaseInfo',
    initialState:{
        customer:{},
        discount:{},       
        date:{},
    
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.customer=action.payload
        },
        setDiscount:(state,action)=>{
            state.discount=action.payload
        },
        setDate:(state,action)=>{
            state.date=action.payload
        }
    }
})

// -----Selectors--------
export const selectCustomer=state=>state.pos.retail.cartInfo.customer
export const selectDiscount=state=>state.pos.retail.cartInfo.discount

export const {
    setCustomer,
    setDiscount,
    setDate,

}=purchaseProductInfo.actions

export default purchaseProductInfo.reducer