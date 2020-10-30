import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'

import {NEW,EDIT} from './Customer.constants'

const url='customer'

export const fetchCustomerList=createAsyncThunk('Customer/List',()=>getList(url))

export const createCustomer=createAsyncThunk('Customer/New',
    payload=>{
        const params={
            url:url,
            data:payload
        }
        console.log('Params:',params)
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

export const searchCustomer=createAsyncThunk('Customer/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search Customer type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateCustomer=createAsyncThunk('Customer/update',
    
    params=>{
        const payload={
            url,
            id:params.id,
            data:params
        }
        try{
            const response=update(payload)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
})




const CustomerEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomer,
    selectById:selectCustomerById} =
    CustomerEntityAdapter.getSelectors(state=>state.inventory.customer)




// ------GST Code Slice
export const CustomerSlice=createSlice({
    name:'customer',
    initialState:CustomerEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedCustomer:(state,action)=>state.selectecCustomer=action.payload,
        // --------Dialog reducer
        setDialog:(state,action)=>{
            state.dialog.open=action.payload.open
            state.dialog.mode=action.payload.mode
            state.dialog.data=action.payload.data
        },
        setSelect:(state,action)=>{
            state.select=action.payload
        },
        clearSelectedCustomer:(state)=>{
            state.select={}
        }
    },
    extraReducers:{
        [fetchCustomerList.fulfilled]:CustomerEntityAdapter.setAll,
        [searchCustomer.fulfilled]:(state,action)=>console.log(action.payload),
        [createCustomer.fulfilled]:CustomerEntityAdapter.addOne,
        [updateCustomer.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            CustomerEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.customer.dialog
export const selectedCustomerSelector=state=>state.inventory.customer.select


export const {
        setSelectedCustomer,
        setDialog,
        setSelect,
        clearSelectedCustomer

    } = CustomerSlice.actions

export default CustomerSlice.reducer