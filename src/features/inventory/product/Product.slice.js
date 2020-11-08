import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList, create,update} from '../../../api/api'

const url='product'

export const fetchProductList=createAsyncThunk('product/fetch',
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

export const newProduct=createAsyncThunk('product/new',
    async data=>{
               
        const payload={
            url,
            data:data
        }
        
        const response= await create(payload)
        return response
           
    }
)

export const updateProduct=createAsyncThunk('product/update',
    async ({id,data})=>{
        console.log('update Prpduct',data)
        const response= await update({url,id,data})
        return response
    }
)

const productEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectProductList,
    selectById:selectProductById
}=productEntityAdapter.getSelectors(state=>state.inventory.product.product)



const productSlice=createSlice({
    name:'product',
    initialState:productEntityAdapter.getInitialState({
        select:{}
    }),
    reducers:{
        setSelect:(state,action)=>{
            state.select=action.payload
        }
    },
    extraReducers:{
        [fetchProductList.fulfilled]:productEntityAdapter.setAll,
        [newProduct.fulfilled]:(state,action)=>{
            const payload={
                label:action.payload.name,
                ...action.payload
            }
            productEntityAdapter.addOne(payload.data)
        },        
        [updateProduct.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            productEntityAdapter.updateOne(state,{id,changes})
            
        }    
    }
})



export const {setSelect}=productSlice.actions
export default productSlice.reducer