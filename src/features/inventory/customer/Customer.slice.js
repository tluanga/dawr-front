import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='customer'

export const fetchCustomerList=createAsyncThunk('customer/fetct',
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

export const newCustomer=createAsyncThunk('customer/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateCustomer=createAsyncThunk('customer/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const customerEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCustomerList,
    selectById:selectCustomerById
}=customerEntityAdapter.getSelectors(state=>state.inventory.customer)



const customerSlice=createSlice({
    name:'customer',
    initialState:customerEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchCustomerList.fulfilled]:customerEntityAdapter.setAll,
        [newCustomer.fulfilled]:customerEntityAdapter.addOne,
        [updateCustomer.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            customerEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=customerSlice.actions
export default customerSlice.reducer