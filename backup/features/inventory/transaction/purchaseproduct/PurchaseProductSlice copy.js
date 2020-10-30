import {createEntityAdapter,createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {create,searchItem} from '../../../../api/api'

export const createReceiveItem=createAsyncThunk(
    'receiveproduct/new',
    props=>create(props)
    )

export const searchProduct=createAsyncThunk(
    'receiveproduct/searchItem',
    params=>{
        const response=searchItem(params)
        return response
    }
   
)

export const receiveProductAdapter=createEntityAdapter({})

export const {selectAll:selectReceiveProductList,
        selectById:selectReceiveProductById
}=
    receiveProductAdapter.getSelectors(state=>state.transaction.receiveproduct)

export const receiveProductSlice=createSlice({
    name:'receiveproduct',
    initialState:receiveProductAdapter.getInitialState({
        supplier:'',
        warehouse:'',
        products:[],

    }),
    reducers:{
        addCartItem:receiveProductAdapter.addOne
    },
    extraReducers:{
        [createReceiveItem.fulfilled]:receiveProductAdapter.addOne,
        
    }
})

const {actions,reducer} =receiveProductSlice;


export const {addCartItem} = actions

export default reducer

/*
    Data Structure of Receive Product
    Cart{
        supplier,
        warehouse,
        billno
        date
        cartitem[
            product,
            productCost,
            discount,
            totalProductCost,
            sellingPrice,
            mrp
            shelfLife,
            waranty
        ]
        totalAmount
        totalDiscont
        status-paid or credit
    }
    
*/