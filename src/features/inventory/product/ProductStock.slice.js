import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const url='stock'
export const fetchCurrentStock=createAsyncThunk('ProductStock/List',
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


const productStockSlice=createSlice({
    name:'productPrice',
    initialState:[],
    reducers:{},
    extraReducers:{
        [fetchCurrentStock.fulfilled]:(state,action)=>{
            state=action.payload
        },
        
    }
})

// selector
export const selectProductStockPrice=state=>state.inventory.productStock


export default productStockSlice.reducer