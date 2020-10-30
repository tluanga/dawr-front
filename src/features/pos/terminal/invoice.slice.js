import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import {create} from '../../../api/api'
const url='order'
export const createNewSell=createAsyncThunk('pos/NewSell',
    payload=>{
        const param={
            url:url,
            data:payload
        }
        console.log('ínside create New Sell',param)
        try{
            const response=create(param)
            return response
        }
        catch(err){
            console.log(err)
            return err
        }
    }
)

const invoiceEntityAdapter=createEntityAdapter({})

export const invoiceSlice=createSlice({
    name:'invoice',
    initialState:{},
    extraReducers:{
        [createNewSell.fulfilled]:invoiceEntityAdapter.setAll
    }

})