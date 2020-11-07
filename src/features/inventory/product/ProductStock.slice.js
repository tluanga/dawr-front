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

const productStockEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectAllStock,
    selectById:selectStockByProductId
}=productStockEntityAdapter.getSelectors(state=>state.inventory.productStock)

const productStockSlice=createSlice({
    name:'productPrice',
    initialState:productStockEntityAdapter.getInitialState({}),
    reducers:{},
    extraReducers:{
        [fetchCurrentStock.fulfilled]:productStockEntityAdapter.setAll
        
    }
})




export default productStockSlice.reducer