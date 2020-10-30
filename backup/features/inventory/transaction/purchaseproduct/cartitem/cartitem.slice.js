import {createEntityAdapter,createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {searchItem} from '../../../../../api/api'

export const getProduct=createAsyncThunk('cartitem/getproduct',
    param=>searchItem(param)
)

const cartItemEntityAdapter=createEntityAdapter({})

export const {selectAll:selectCartItems} =
    cartItemEntityAdapter.getSelectors(
        state=>state.inventory.transaction.productpurchase.cartitem)

const cartItemSlice=createSlice({
    name:'cartitem',
    initialState:cartItemEntityAdapter.getInitialState([]),
    reducers:{
        // addCarItem:cartItemEntityAdapter.addOne,
        addCartItem:(state,action)=>{
            //find duplicate
            // console.log(...state)
            cartItemEntityAdapter.addOne(state,action.payload)
        },
        updateCartItem:(state,action)=>{
            console.log(action.payload)
            cartItemEntityAdapter.updateOne(state,action.payload)
        },
        removeCartItem:cartItemEntityAdapter.removeOne
    }
})

export const {addCartItem,updateCartItem,removeCartItem} =cartItemSlice.actions

export default cartItemSlice.reducer