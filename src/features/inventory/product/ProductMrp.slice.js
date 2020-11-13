import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {getList,create} from '../../../api/api'

const url='latest_mrp'
export const fetchCurrentMrp=createAsyncThunk('ProductPriceMrp/List',
    async ()=>await getList(url)
)       

export const newMrp=createAsyncThunk('ProductPriceMrp/new',
    async data=>{
        const payload={
            url:url,
            data:data
        }
        return await create(payload)
    }
)

const mrpEntityAdapter=createEntityAdapter({})


const mrpSlice=createSlice({
    name:'productPrice',
    initialState:mrpEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [fetchCurrentMrp.fulfilled]:mrpEntityAdapter.setAll,
        [newMrp.fulfilled]:mrpEntityAdapter.addOne
    }
})

// selector
export const {
    selectAll:selectMrp,
    selectById:selectMrpById
} = mrpEntityAdapter.getSelectors(
    state=>state.inventory.product.mrp)


export default mrpSlice.reducer