import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import {searchCategory} from './search.select.api'

const getSelectOption=createAsyncThunk()

const selectOptionEntityAdapter=createEntityAdapter({})

export const selectOptionSlice=createSlice({
    name:'selectoption',
    initialState:selectOptionEntityAdapter.getInitialState({}),
    
})