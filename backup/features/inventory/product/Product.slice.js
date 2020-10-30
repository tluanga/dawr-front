import {createAsyncThunk,createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import {getList,create,update,searchItem} from '../../../api/api'
import {NEW,EDIT} from './Product.constants'

const url='product'

export const fetchProductList=createAsyncThunk('Product/List',()=>getList(url))


    

export const createProduct=createAsyncThunk('Product/New',
    payload=>{
        const params={
            url:url,
            data:payload
        }
        console.log('Params:',params)
        try{
            const response=create(params)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
       
    }
)

export const searchProduct=createAsyncThunk('Product/search',
    payload=>{
        const params={
            url:url,
            payload
        }
        try{
            const response=searchItem(params)
            
            console.log('search Product type',response)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)

export const updateProduct=createAsyncThunk('Product/update',
    
    params=>{
        const payload={
            url,
            id:params.id,
            data:params
        }
        try{
            const response=update(payload)
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
})




const ProductEntityAdapter=createEntityAdapter({})

export const {
    selectAll:selectProduct,
    selectById:selectProductById} =
    ProductEntityAdapter.getSelectors(state=>state.inventory.product)




// ------GST Code Slice
export const ProductSlice=createSlice({
    name:'product',
    initialState:ProductEntityAdapter.getInitialState({        
        dialog:{
            open:false,
            mode:NEW,
            data:{}
        },
        select:{},
        sellPrices:[],
        costPrices:[]
    }),
    reducers:{
        setSelectedProduct:(state,action)=>state.selectecProduct=action.payload,
        // --------Dialog reducer
        setDialog:(state,action)=>{
            state.dialog.open=action.payload.open
            state.dialog.mode=action.payload.mode
            state.dialog.data=action.payload.data
        },
        setSelect:(state,action)=>{
            state.select=action.payload
        },
        clearProductSelected:state=>{state.select={}}
    },
    extraReducers:{
        [fetchProductList.fulfilled]:ProductEntityAdapter.setAll,
        [searchProduct.fulfilled]:(state,action)=>console.log(action.payload),
        [createProduct.fulfilled]:ProductEntityAdapter.addOne,
        [updateProduct.fulfilled]:(state,action)=>{
            const {id,...changes}=action.payload
            console.log(changes)
            ProductEntityAdapter.updateOne(state,{id,changes})
        },
        // [fetchProductSellPrice.fulfilled]:
        //     (state,action)=>ProductEntityAdapter.setAll(state.sellPrices,action.payload)
       


    }
})
// --Selector
export const dialogSelector=state=>state.inventory.product.dialog
export const selectProductSelector=state=>state.inventory.product.select


export const {
        setSelectedProduct,
        setDialog,
        setSelect,
        clearProductSelected,

    } = ProductSlice.actions

export default ProductSlice.reducer