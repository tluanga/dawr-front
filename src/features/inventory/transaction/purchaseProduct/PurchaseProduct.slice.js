import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const purchaseProductSlice=createSlice({
    name:'purchaseProduct',
    initialState:{
        vendor:{},
        warehouse:{},
        date:{},
        products:[

        ]
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
        },
        setProduct:(state,action)=>state.push(action.payload)
    }
})

export const {
    setVendor,
    setWarehouse,
    setDate,
    setProduct
}=purchaseProductSlice.actions

export default purchaseProductSlice.reducer