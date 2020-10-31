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

export const {
    selectAll:selectVendorList,
    selectById:selectVendorById
}=vendorEntityAdapter.getSelectors(state=>state.inventory.vendor)

const vendorSlice=createSlice({
    name:'vendor',
    initialState:vendorEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchVendorList.fulfilled]:vendorEntityAdapter.setAll
    }
})

export const {setSelect}=vendorSlice.actions
export default vendorSlice.reducer