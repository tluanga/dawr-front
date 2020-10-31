import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='category'

export const fetchCategoryList=createAsyncThunk('category/fetct',
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

export const newCategory=createAsyncThunk('category/new',
    async data=>{
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateCategory=createAsyncThunk('category/update',
    async ({id,data})=>{
        const response= await update({url,id,data})
        return response
    }
)

const categoryEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectCategoryList,
    selectById:selectCategoryById
}=categoryEntityAdapter.getSelectors(state=>state.inventory.category)



const categorySlice=createSlice({
    name:'category',
    initialState:categoryEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchCategoryList.fulfilled]:categoryEntityAdapter.setAll,
        [newCategory.fulfilled]:categoryEntityAdapter.addOne,
        [updateCategory.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            categoryEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=categorySlice.actions
export default categorySlice.reducer