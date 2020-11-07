import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const sellpriceUrl='product_sell_price'
export const fetchCurrentSellPrice=createAsyncThunk('ProductPriceSell/List',
    async (id)=>{
        const params={
            url:sellpriceUrl,
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


const mrpUrl='mrp'
export const fetchCurrentMrp=createAsyncThunk('ProductMrp/List',
    async (id)=>{
        const params={
            url:mrpUrl,
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
        },
        [fetchCurrentCostPrice.fulfilled]:(state,action)=>{
            state.costPrice=action.payload
        },
        [fetchCurrentMrp.fulfilled]:(state,action)=>{
            state.mrp=action.payload
        }
    }
})

// selector
export const selectProductsCurrentSellPrice=state=>state.inventory.productPrice.sellPrice
export const selectProductsCurrentCostPrice=state=>state.inventory.productPrice.costPrice
export const selectProductsCurrentMrp=state=>state.inventory.productPrice.mrp


export default productPriceSlice.reducer