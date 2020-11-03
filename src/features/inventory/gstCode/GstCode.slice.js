import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='gstcode'

export const fetchGstCodeList=createAsyncThunk('gstCode/fetct',
    async ()=>{
        const response=await getList(url)
        const data=response.map(res=>{
            const data={
                label:res.code,
                ...res
            }
            return data

        })
        return data
    }
)

export const newGstCode=createAsyncThunk('gstCode/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateGstCode=createAsyncThunk('gstCode/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const gstCodeEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectGstCodeList,
    selectById:selectGstCodeById
}=gstCodeEntityAdapter.getSelectors(state=>state.inventory.gstCode)



const gstCodeSlice=createSlice({
    name:'gstCode',
    initialState:gstCodeEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchGstCodeList.fulfilled]:gstCodeEntityAdapter.setAll,
        [newGstCode.fulfilled]:gstCodeEntityAdapter.addOne,
        [updateGstCode.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            gstCodeEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=gstCodeSlice.actions
export default gstCodeSlice.reducer