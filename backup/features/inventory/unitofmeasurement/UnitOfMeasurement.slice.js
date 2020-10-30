import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
import {NEW,EDIT} from './UnitOfMeasurement.constant'

const url='unitofmeasurement'

export const fetchUnitOfMeasurementList=createAsyncThunk('UnitOfMeasurement/List',()=>getList(url))

export const createUnitOfMeasurement=createAsyncThunk('UnitOfMeasurement/New',
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

export const searchUnitOfMeasurement=createAsyncThunk('UnitOfMeasurement/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search UnitOfMeasurement type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateUnitOfMeasurement=createAsyncThunk('UnitOfMeasurement/update',
    
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




const UnitOfMeasurementEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectUnitOfMeasurement,
    selectById:selectUnitOfMeasurementById} =
    UnitOfMeasurementEntityAdapter.getSelectors(state=>state.inventory.unitofmeasurement)


// ------GST Code Slice
export const UnitOfMeasurementSlice=createSlice({
    name:'UnitOfMeasurement',
    initialState:UnitOfMeasurementEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedUnitOfMeasurement:(state,action)=>state.selectecUnitOfMeasurement=action.payload,
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
        [fetchUnitOfMeasurementList.fulfilled]:UnitOfMeasurementEntityAdapter.setAll,
        [searchUnitOfMeasurement.fulfilled]:(state,action)=>console.log(action.payload),
        [createUnitOfMeasurement.fulfilled]:UnitOfMeasurementEntityAdapter.addOne,
        [updateUnitOfMeasurement.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            UnitOfMeasurementEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.unitofmeasurement.dialog
export const selectSelector=state=>state.inventory.unitofmeasurement.select


export const {
        setSelectedUnitOfMeasurement,
        setDialog,
        setSelect

    } = UnitOfMeasurementSlice.actions

export default UnitOfMeasurementSlice.reducer