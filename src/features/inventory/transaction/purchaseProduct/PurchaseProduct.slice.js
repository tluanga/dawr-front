import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const purchaseProductSlice=createSlice({
    name:'purchaseProduct',
    initialState:{
        vendor:{}
    },
    reducers:{
        setVendor:(state,action)=>{
            state.vendor=action.payload
        }
    }
})

export const {setVendor}=purchaseProductSlice.actions

export default purchaseProductSlice.reducer