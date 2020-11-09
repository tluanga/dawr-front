import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {getList} from '../../../api/api'

const url='latest_mrp'
export const fetchCurrentMrp=createAsyncThunk('ProductPriceMrp/List',
    async ()=>await getList(url)
)       

const mrpEntityAdapter=createEntityAdapter({})

const mrpSlice=createSlice({
    name:'productPrice',
    initialState:mrpEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentMrp.fulfilled]:mrpEntityAdapter.setAll
    }
})

// selector
export const {
    selectAll:selectMrp,
    selectById:selectMrpById
} = mrpEntityAdapter.getSelectors(
    state=>state.inventory.product.mrp)


export default mrpSlice.reducer