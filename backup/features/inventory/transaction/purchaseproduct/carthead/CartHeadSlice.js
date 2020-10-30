import {createEntityAdapter,createSlice} from '@reduxjs/toolkit'



const cartHeadEntityAdapter=createEntityAdapter({})

export const {selectAll:selectCartHead} =
cartHeadEntityAdapter.getSelectors(
    state=>state.inventory.transaction.purchaseproduct.carthead)

const cartHeaderSlice=createSlice({
    name:'carthead',
    initialState:cartHeadEntityAdapter.getInitialState({}),
    reducers:{
        addCartHead:cartHeadEntityAdapter.addOne
    }

})



export const  {addCartHead}=cartHeaderSlice.actions

export default cartHeaderSlice.reducer
