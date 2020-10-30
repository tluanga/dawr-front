import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
import {NEW,EDIT} from './CustomerType.constants'

const url='customertype'

export const fetchCustomerTypeList=createAsyncThunk('CustomerType/List',()=>getList(url))

export const createCustomerType=createAsyncThunk('CustomerType/New',
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

export const searchCustomerType=createAsyncThunk('CustomerType/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search CustomerType type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateCustomerType=createAsyncThunk('CustomerType/update',
    
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




const CustomerTypeEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomerType,
    selectById:selectCustomerTypeById} =
    CustomerTypeEntityAdapter.getSelectors(state=>state.inventory.customertype)




// ------GST Code Slice
export const CustomerTypeSlice=createSlice({
    name:'customerType',
    initialState:CustomerTypeEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedCustomerType:(state,action)=>state.selectecCustomerType=action.payload,
        // --------Dialog reducer
        setDialog:(state,action)=>{
            state.dialog.open=action.payload.open
            state.dialog.mode=action.payload.mode
            state.dialog.data=action.payload.data
        },
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchCustomerTypeList.fulfilled]:CustomerTypeEntityAdapter.setAll,
        [searchCustomerType.fulfilled]:(state,action)=>console.log(action.payload),
        [createCustomerType.fulfilled]:CustomerTypeEntityAdapter.addOne,
        [updateCustomerType.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            CustomerTypeEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.customertype.dialog
export const selectSelector=state=>state.inventory.customertype.select


export const {
        setSelectedCustomerType,
        setDialog,
        setSelect

    } = CustomerTypeSlice.actions

export default CustomerTypeSlice.reducer