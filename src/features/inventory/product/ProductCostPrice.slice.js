import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {getList,create} from '../../../api/api'

const url='product_latest_cost_price'
export const fetchCurrentCostPrice=createAsyncThunk(
    'costPrice/List',
    async ()=>await getList(url)
)
export const setCurrentCostPrice=createAsyncThunk(
    'costPrice/New',
    async(payload)=>{
        console.log('new cost price pay load',payload)
        const response=await create({url:url,data:payload})
        return response
    }

)

const costPriceEntityAdapter=createEntityAdapter({})

const costPriceSlice=createSlice({
    name:'productPrice',
    initialState:costPriceEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentCostPrice.fulfilled]:costPriceEntityAdapter.setAll,
        [setCurrentCostPrice.fulfilled]:costPriceEntityAdapter.addOne
    }
})

// selector
export const {
    selectAll:selectCostPrices,
    selectById:selectCostPriceById
} = costPriceEntityAdapter.getSelectors(
    state=>state.inventory.product.costPrice)


export default costPriceSlice.reducer