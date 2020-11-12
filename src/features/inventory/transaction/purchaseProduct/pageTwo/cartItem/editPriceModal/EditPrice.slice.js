import { NewReleases } from '@material-ui/icons'
import {createSlice} from '@reduxjs/toolkit'

const priceEditModalSlice=createSlice({
    name:'cartui',
    initialState:{
        open:false,
        data:{
            product:{},
            costPrice:0,
            sellingPrice:0,
            sellingPrice_Bulk:0,
            mrp:0
        },
    },
    reducers:{
        setOpen:(state,action)=>{
            state.openPriceEditModal=action.payload
        },
        setData:(state,action)=>{
            state.priceEditModalData=action.payload
        },
    }
})
// select
export const selectOpen=state=>
    state.inventory.transaction.purchaseProduct.cartUi.openPriceEditModal

export const selectPriceEditModalData=state=>
state.inventory.transaction.purchaseProduct.cartUi.priceEditModalData

export const selectProductModal=state=>
state.inventory.transaction.purchaseProduct.cartUi.productModal

//export action
export const {
    setOpenPriceEditModal,
    setPriceEditModalData,
    
}=priceEditModalSlice.actions

export default priceEditModalSlice.reducer