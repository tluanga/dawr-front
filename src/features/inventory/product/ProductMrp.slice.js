import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const mrpPriceUrl='product_mrp_price'
export const fetchCurrentMrp=createAsyncThunk('ProductPriceMrp/List',
    async (id)=>{
        const params={
            url:mrpPriceUrl,
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