import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../../api/api'

export const fetchCustomerList=createAsyncThunk('customer/List',()=>getList('customer'))



export const createCustomer=createAsyncThunk('customer/New',
    params=>{
        try{
            const response=create(params)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
       
    }
)

export const searchCustomer=createAsyncThunk('customer/search',
    params=>{
        try{
            const response=searchItem(params)
            
            console.log('search customer type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateCustomer=createAsyncThunk('customer/update',
    params=>{
        try{
            const response=update(params)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
})




const customerListAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomer,
    selectById:selectCustomerById} =
    customerListAdapter.getSelectors(state=>state.inventory.customer.customer)

export const customerSlice=createSlice({
    name:'gstCodes',
    initialState:customerListAdapter.getInitialState({}),
    reducers:{},
    extraReducers:{
        [fetchCustomerList.fulfilled]:customerListAdapter.setAll,
        [searchCustomer.fulfilled]:(state,action)=>console.log(action.payload),
        [createCustomer.fulfilled]:customerListAdapter.addOne,
        [updateCustomer.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            customerListAdapter.updateOne(state,{id,changes})
        }


    }
})

export default customerSlice.reducer