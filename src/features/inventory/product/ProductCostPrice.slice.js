import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const costPriceUrl='product_cost_price'
export const fetchCurrentCostPrice=createAsyncThunk('ProductPriceCost/List',
    async (id)=>{
        const params={
            url:costPriceUrl,
            searchParam:[                
                {
                    key:'current',
                    value:true,
                }
            ]
        }
        const response= await searchItem(params)
        return response
    }
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