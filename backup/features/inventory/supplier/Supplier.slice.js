import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
import {NEW,EDIT} from './Supplier.constants'

const url='supplier'

export const fetchSupplierList=createAsyncThunk('Supplier/List',()=>getList(url))

export const createSupplier=createAsyncThunk('Supplier/New',
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

export const searchSupplier=createAsyncThunk('Supplier/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search Supplier type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateSupplier=createAsyncThunk('Supplier/update',
    
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




const SupplierEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectSupplier,
    selectById:selectSupplierById} =
    SupplierEntityAdapter.getSelectors(state=>state.inventory.supplier)




// ------GST Code Slice
export const SupplierSlice=createSlice({
    name:'supplier',
    initialState:SupplierEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedSupplier:(state,action)=>state.selectecSupplier=action.payload,
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
        [fetchSupplierList.fulfilled]:SupplierEntityAdapter.setAll,
        [searchSupplier.fulfilled]:(state,action)=>console.log(action.payload),
        [createSupplier.fulfilled]:SupplierEntityAdapter.addOne,
        [updateSupplier.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            SupplierEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.supplier.dialog
export const selectSelector=state=>state.inventory.supplier.select


export const {
        setSelectedSupplier,
        setDialog,
        setSelect

    } = SupplierSlice.actions

export default SupplierSlice.reducer