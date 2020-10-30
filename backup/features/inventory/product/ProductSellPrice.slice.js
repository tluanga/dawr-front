import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
//get all products sell prices which are current
export const fetchProductSellPrice=createAsyncThunk('productsellprice',()=>{
    const params={
        url:'productsellprice',
        searchParam:[  
            {
                key:'current',
                value:true
            },   
          ]
    }
    try{
        const response=searchItem(params)
        console.log('product price list',response)
        return response
    } catch(err){
        console.log(err)
        return(err)
    }
})

const productSellPriceEntityAdapter=createEntityAdapter()
export const {
    selectAll:selectProductSellPrice,
    selectById:selectProductSellPriceById,
}=productSellPriceEntityAdapter.getSelectors(state=>state.inventory.productSellPrice)

const productSellPriceSlice=createSlice({
    name:'productSellPriceSlice',
    initialState:productSellPriceEntityAdapter.getInitialState({}),
    extraReducers:{
        [fetchProductSellPrice.fulfilled]:productSellPriceEntityAdapter.setAll
        
    }
    

})

export default productSellPriceSlice.reducer