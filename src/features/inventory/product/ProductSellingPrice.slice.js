import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const sellingPriceUrl='product_sell_price'
export const fetchCurrentSellPrice=createAsyncThunk('ProductPriceSell/List',
    async (id)=>{
        const params={
            url:sellingPriceUrl,
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

const sellingPriceEntityAdapter=createEntityAdapter({})

const sellingPriceSlice=createSlice({
    name:'productPrice',
    initialState:sellingPriceEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentSellPrice.fulfilled]:sellingPriceEntityAdapter.setAll
    }
})

// selector
export const {
    selectAll:selectSellingPrices,
    selectById:selectSellingPriceById
} = sellingPriceEntityAdapter.getSelectors(
    state=>state.inventory.product.sellingPrice)


export default sellingPriceSlice.reducer