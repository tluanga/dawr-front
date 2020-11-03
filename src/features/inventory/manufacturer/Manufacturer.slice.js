import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='manufacturer'

export const fetchManufacturerList=createAsyncThunk('manufacturer/fetct',
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

export const newManufacturer=createAsyncThunk('manufacturer/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateManufacturer=createAsyncThunk('manufacturer/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const manufacturerEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectManufacturerList,
    selectById:selectManufacturerById
}=manufacturerEntityAdapter.getSelectors(state=>state.inventory.manufacturer)



const manufacturerSlice=createSlice({
    name:'manufacturer',
    initialState:manufacturerEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchManufacturerList.fulfilled]:manufacturerEntityAdapter.setAll,
        [newManufacturer.fulfilled]:manufacturerEntityAdapter.addOne,
        [updateManufacturer.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            manufacturerEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=manufacturerSlice.actions
export default manufacturerSlice.reducer