import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='vendor'

export const fetchVendorList=createAsyncThunk('vendor/fetct',
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

export const newVendor=createAsyncThunk('vendor/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateVendor=createAsyncThunk('vendor/update',
    async ({id,data})=>{
        console.log('formdata',data)
        const response= await update({url,id,data})
        return response
    }
)

const vendorEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectVendorList,
    selectById:selectVendorById
}=vendorEntityAdapter.getSelectors(state=>state.inventory.vendor)



const vendorSlice=createSlice({
    name:'vendor',
    initialState:vendorEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchVendorList.fulfilled]:vendorEntityAdapter.setAll,
        [newVendor.fulfilled]:vendorEntityAdapter.addOne,
        [updateVendor.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            vendorEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=vendorSlice.actions
export default vendorSlice.reducer