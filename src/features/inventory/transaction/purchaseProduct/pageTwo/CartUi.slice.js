import {createSlice} from '@reduxjs/toolkit'

const cartUISlice=createSlice({
    name:'cartui',
    initialState:{
        openPriceEditModal:false,
        modalData:{
            product:{},
            costPrice:0,
            sellingPrice:0,
            sellingPrice_Bulk:0,
            mrp:0
        },
        priceEditModalData:{},
    },
    reducers:{
        setOpenPriceEditModal:(state,action)=>{
            state.openPriceEditModal=action.payload
        },
        setPriceEditModalData:(state,action)=>{
            state.priceEditModalData=action.payload
        },
        setModalData:(state,action)=>{
            state.modalData=action.payload
        }
    }
})
// select
export const selectOpenPriceEditModal=state=>
    state.inventory.transaction.purchaseProduct.cartUi.openPriceEditModal

export const selectPriceEditModalData=state=>
state.inventory.transaction.purchaseProduct.cartUi.priceEditModalData

export const selectModalData=state=>
state.inventory.transaction.purchaseProduct.cartUi.modalData

//export action
export const {
    setOpenPriceEditModal,
    setPriceEditModalData,
    setModalData
}=cartUISlice.actions

export default cartUISlice.reducer