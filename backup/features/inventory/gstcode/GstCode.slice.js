import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'

import {NEW,EDIT} from './GstCode.constants'

const url='gstcode'

export const fetchGstCodeList=createAsyncThunk('GstCode/List',()=>getList(url))

export const createGstCode=createAsyncThunk('GstCode/New',
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

export const searchGstCode=createAsyncThunk('GstCode/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search GstCode type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateGstCode=createAsyncThunk('GstCode/update',
    
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




const GstCodeEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectGstCode,
    selectById:selectGstCodeById} =
    GstCodeEntityAdapter.getSelectors(state=>state.inventory.gstcode)




// ------GST Code Slice
export const GstCodeSlice=createSlice({
    name:'customer',
    initialState:GstCodeEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedGstCode:(state,action)=>state.selectecGstCode=action.payload,
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
        [fetchGstCodeList.fulfilled]:GstCodeEntityAdapter.setAll,
        [searchGstCode.fulfilled]:(state,action)=>console.log(action.payload),
        [createGstCode.fulfilled]:GstCodeEntityAdapter.addOne,
        [updateGstCode.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            GstCodeEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.customer.dialog
export const selectedGstCodeSelector=state=>state.inventory.customer.select


export const {
        setSelectedGstCode,
        setDialog,
        setSelect

    } = GstCodeSlice.actions

export default GstCodeSlice.reducer