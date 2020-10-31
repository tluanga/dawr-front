import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList} from '../../../api/api'

const url='vendor'

export const fetchVendorList=createAsyncThunk('vendor/fetct',
    async ()=>{
        const response=await getList(url)
        const data=response.map(res=>{
            const data={
                label:res.name,
                ...res
            }
            return data

        })
        return data
    }
)

const vendorEntityAdapter=createEntityAdapter({})

const vendorSlice=createSlice({
    name:'vendor',
    initialState:vendorEntityAdapter.getInitialState({}),
    reducers:{},
    extraReducers:{
        [fetchVendorList.fulfilled]:vendorEntityAdapter.setAll
    }
})

export default vendorSlice.reducer