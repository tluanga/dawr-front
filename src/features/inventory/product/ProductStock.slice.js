import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {getList} from '../../../api/api'

const url='latest_stock'
export const fetchCurrentStock=createAsyncThunk('ProductStock/List',
    async ()=>await getList(url)
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