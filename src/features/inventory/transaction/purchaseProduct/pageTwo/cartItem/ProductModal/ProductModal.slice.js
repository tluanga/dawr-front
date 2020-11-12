import {createSlice} from '@reduxjs/toolkit'

export const OPEN='true'
export const CLOSE='false'

const productModalSlice=createSlice({
    name:'productModal',
    initialState:{
        open:CLOSE,
        data:{}
    },
    reducers:{
        setProductModalOpen:(state,action)=>{
            state.open=action.payload
        },
        setProductModalData:(state,action)=>{
            state.data=action.payload
        }
    }
})
// ------export actions------
export const{
    setProductModalOpen,setProductModalData
}=productModalSlice.actions

//-----export selector----------
export const selectProductModalOpen=state=>
    state.inventory.transaction.purchaseProduct.cartUi.productModal.open


export const selectProductModalData=state=>
    state.inventory.transaction.purchaseProduct.cartUi.
    productModal.data




export default productModalSlice.reducer