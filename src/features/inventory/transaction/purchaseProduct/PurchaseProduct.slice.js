import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const purchaseProductSlice=createSlice({
    name:'purchaseProduct',
    initialState:{
        vendor:{},
        warehouse:{},
        date:{}
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

export const {setVendor,setWarehouse,setDate}=purchaseProductSlice.actions

export default purchaseProductSlice.reducer