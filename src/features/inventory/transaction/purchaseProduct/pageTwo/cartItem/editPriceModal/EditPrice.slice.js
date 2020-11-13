import {createSlice} from '@reduxjs/toolkit'

export const OPEN=true
export const CLOSE=false

const EditPriceModalSlice=createSlice({
    name:'cartui',
    initialState:{
        open:CLOSE,
        data:{
            product:{},
            costPrice:0,
            sellingPrice:0,
            sellingPrice_Bulk:0,
            mrp:0
        },
    },
    reducers:{
        setEditPriceModalOpen:(state,action)=>{
            state.open=action.payload
        },
        setEditPriceModalData:(state,action)=>{
            state.data=action.payload
        },
    }
})
// select
export const selectEditPriceModalOpen=state=>
    state.inventory.transaction.purchaseProduct.
    cartUi.editPriceModal.open

export const selectEditPriceModalData=state=>
    state.inventory.transaction.purchaseProduct.
    cartUi.editPriceModal.data



//export action
export const {
    setEditPriceModalOpen,
    setEditPriceModalData,
    
}=EditPriceModalSlice.actions

export default EditPriceModalSlice.reducer