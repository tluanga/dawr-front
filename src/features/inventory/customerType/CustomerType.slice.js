import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='customertype'

export const fetchCustomerTypeList=createAsyncThunk('customerType/fetct',
    async ()=>{
        const response=await getList(url)
        const data=response.map(res=>{
            const data={
                label:res.name,
                ...res
            }
            return data

        })
        return data
    }
)

export const newCustomerType=createAsyncThunk('customerType/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateCustomerType=createAsyncThunk('customerType/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const customerTypeEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomerTypeList,
    selectById:selectCustomerTypeById
}=customerTypeEntityAdapter.getSelectors(state=>state.inventory.customerType)



const customerTypeSlice=createSlice({
    name:'customerType',
    initialState:customerTypeEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchCustomerTypeList.fulfilled]:customerTypeEntityAdapter.setAll,
        [newCustomerType.fulfilled]:customerTypeEntityAdapter.addOne,
        [updateCustomerType.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            customerTypeEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})

export const selectSelectedCustomerType=state=>state.inventory.customerType.select

export const {setSelect}=customerTypeSlice.actions
export default customerTypeSlice.reducer