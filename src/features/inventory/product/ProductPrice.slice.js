import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const url='product_sell_price'
export const fetchCurrentSellPrice=createAsyncThunk('ProductPrice/List',
    async (id)=>{
        const params={
            url:url,
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



const productPriceSlice=createSlice({
    name:'productPrice',
    initialState:{
        costPrice:[],
        sellPrice:[],
        mrp:[]
    },
    reducers:{},
    extraReducers:{
        [fetchCurrentSellPrice.fulfilled]:(state,action)=>{
            state.sellPrice=action.payload
        }
    }
})

// selector
export const selectProductsCurrentPrice=state=>state.inventory.productPrice.sellPrice

export default productPriceSlice.reducer