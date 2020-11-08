import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem,create} from '../../../api/api'

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

export const newSellingPrice=createAsyncThunk('sellingPrice/new',
    async data=>{
               
        const payload={
            sellingPriceUrl,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

const sellingPriceEntityAdapter=createEntityAdapter({})

const sellingPriceSlice=createSlice({
    name:'productPrice',
    initialState:sellingPriceEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentSellPrice.fulfilled]:sellingPriceEntityAdapter.setAll,
        [newSellingPrice.fulfilled]:sellingPriceEntityAdapter.addOne
    }
})

// selector
export const {
    selectAll:selectSellingPrices,
    selectById:selectSellingPriceById
} = sellingPriceEntityAdapter.getSelectors(
    state=>state.inventory.product.sellingPrice)


export default sellingPriceSlice.reducer