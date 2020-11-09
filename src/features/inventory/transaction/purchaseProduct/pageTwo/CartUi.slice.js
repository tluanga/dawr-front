import {createSlice} from '@reduxjs/toolkit'

const cartUISlice=createSlice({
    name:'cartui',
    initialState:{
        openPriceEditModal:false,
        priceEditModalData:{},
    },
    reducers:{
        setOpenPriceEditModal:(state,action)=>{
            state.openPriceEditModal=action.payload
        },
        setPriceEditModalData:(state,action)=>{
            state.priceEditModalData=action.payload
        }
    }
})
// select
export const selectOpenPriceEditModal=state=>
    state.inventory.transaction.purchaseProduct.cartUi.openPriceEditModal

export const selectPriceEditModalData=state=>
state.inventory.transaction.purchaseProduct.cartUi.priceEditModalData


//export action
export const {
    setOpenPriceEditModal,
    setPriceEditModalData
}=cartUISlice.actions

export default cartUISlice.reducer