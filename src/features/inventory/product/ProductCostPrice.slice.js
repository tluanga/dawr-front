import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {getList} from '../../../api/api'

const url='product_latest_cost_price'
export const fetchCurrentCostPrice=createAsyncThunk('ProductPriceCost/List',
    async (id)=>await getList(url)
)

const costPriceEntityAdapter=createEntityAdapter({})

const costPriceSlice=createSlice({
    name:'productPrice',
    initialState:costPriceEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentCostPrice.fulfilled]:costPriceEntityAdapter.setAll
    }
})

// selector
export const {
    selectAll:selectCostPrices,
    selectById:selectCostPriceById
} = costPriceEntityAdapter.getSelectors(
    state=>state.inventory.product.costPrice)


export default costPriceSlice.reducer