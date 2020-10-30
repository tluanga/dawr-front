import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../../api/api'

export const fetchCustomerTypeList=createAsyncThunk('customerType/List',()=>getList('customertype'))



export const createCustomerType=createAsyncThunk('customerType/New',
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

export const searchCustomerType=createAsyncThunk('customerType/search',
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

export const updateCustomeType=createAsyncThunk('customerType/update',
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




const customerTypeListAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomerType,
    selectById:selectCustomerTypeById} =
    customerTypeListAdapter.getSelectors(state=>state.inventory.customer.customerType)

export const selectedCustomerType=state=>state.inventory.customer.customerType.selectecCustomerType



export const customerTypeSlice=createSlice({
    name:'gstCodes',
    initialState:customerTypeListAdapter.getInitialState({selectecCustomerType:null}),
    reducers:{
        setSelectedCustomerType:(state,action)=>state.selectecCustomerType=action.payload
    },
    extraReducers:{
        [fetchCustomerTypeList.fulfilled]:customerTypeListAdapter.setAll,
        [searchCustomerType.fulfilled]:(state,action)=>console.log(action.payload),
        [createCustomerType.fulfilled]:customerTypeListAdapter.addOne,
        [updateCustomeType.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            customerTypeListAdapter.updateOne(state,{id,changes})
        }


    }
})

export const {setSelectedCustomerType} = customerTypeSlice.actions

export default customerTypeSlice.reducer