import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='unit_of_measurement'

export const fetchUnitOfMeasurementList=createAsyncThunk('unitOfMeasurement/fetct',
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

export const newUnitOfMeasurement=createAsyncThunk('unitOfMeasurement/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateUnitOfMeasurement=createAsyncThunk('unitOfMeasurement/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const unitOfMeasurementEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectUnitOfMeasurementList,
    selectById:selectUnitOfMeasurementById
}=unitOfMeasurementEntityAdapter.getSelectors(state=>state.inventory.unitOfMeasurement)



const unitOfMeasurementSlice=createSlice({
    name:'unitOfMeasurement',
    initialState:unitOfMeasurementEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchUnitOfMeasurementList.fulfilled]:unitOfMeasurementEntityAdapter.setAll,
        [newUnitOfMeasurement.fulfilled]:unitOfMeasurementEntityAdapter.addOne,
        [updateUnitOfMeasurement.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            unitOfMeasurementEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=unitOfMeasurementSlice.actions
export default unitOfMeasurementSlice.reducer