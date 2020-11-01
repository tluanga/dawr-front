import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='warehouse'

export const fetchWarehouseList=createAsyncThunk('warehouse/fetct',
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

export const newWarehouse=createAsyncThunk('warehouse/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateWarehouse=createAsyncThunk('warehouse/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const warehouseEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectWarehouseList,
    selectById:selectWarehouseById
}=warehouseEntityAdapter.getSelectors(state=>state.inventory.warehouse)



const warehouseSlice=createSlice({
    name:'warehouse',
    initialState:warehouseEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchWarehouseList.fulfilled]:warehouseEntityAdapter.setAll,
        [newWarehouse.fulfilled]:warehouseEntityAdapter.addOne,
        [updateWarehouse.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            warehouseEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=warehouseSlice.actions
export default warehouseSlice.reducer