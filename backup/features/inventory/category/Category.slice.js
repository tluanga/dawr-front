import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
import {NEW,EDIT} from './Category.constants'

const url='category'

export const fetchCategoryList=createAsyncThunk('Category/List',()=>getList(url))

export const createCategory=createAsyncThunk('Category/New',
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

export const searchCategory=createAsyncThunk('Category/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search Category type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateCategory=createAsyncThunk('Category/update',
    
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




const CategoryEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCategory,
    selectById:selectCategoryById} =
    CategoryEntityAdapter.getSelectors(state=>state.inventory.category)




// ------GST Code Slice
export const CategorySlice=createSlice({
    name:'category',
    initialState:CategoryEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{}
    }),
    reducers:{
        setSelectedCategory:(state,action)=>state.selectecCategory=action.payload,
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
        [fetchCategoryList.fulfilled]:CategoryEntityAdapter.setAll,
        [searchCategory.fulfilled]:(state,action)=>console.log(action.payload),
        [createCategory.fulfilled]:CategoryEntityAdapter.addOne,
        [updateCategory.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            CategoryEntityAdapter.updateOne(state,{id,changes})
        }
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.category.dialog
export const selectSelector=state=>state.inventory.category.select


export const {
        setSelectedCategory,
        setDialog,
        setSelect

    } = CategorySlice.actions

export default CategorySlice.reducer