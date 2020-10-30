import {createSlice} from '@reduxjs/toolkit'

const posCustomerSlice=createSlice({
    name:'posCustomer',
    initialState:{},
    reducers:{
        setCustomer:(state,action)=>state=action.payload,
        clearCustomer:state=>state={}
    }
})

export const selectPosCustomer=state=>state.pos.customer

export const {setCustomer,clearCustomer}=posCustomerSlice.actions

export default posCustomerSlice.reducer