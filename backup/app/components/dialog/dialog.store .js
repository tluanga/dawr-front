import {createSlice} from '@reduxjs/toolkit'

export const NEW = 'NEW'
export const EDIT= 'EDIT'


const dialogSlice=createSlice({
    name:'dialog',
    initialState:{
        ConfirmDialogState:{
            open:false,
            mode:NEW,
            decline:false,
            agree:false
        },
        newProductDialogState:false,
        newCategoryDialogState:false,
        gstCodeDialogState:{
            open:false,
            action_type:NEW,
            data:{}
        },
        CustomerTypeDialogState:{
            open:false,
            action_type:NEW
        }
    },
    reducers:{
        changeConfirmDialogState:(state,action)=>{
            state.ConfirmDialogState.open=action.payload.open
            state.ConfirmDialogState.mode=action.payload.mode
        },
        changeNewProductDialogState:state=>{
            state.newProductDialogState=!state.newProductDialogState
        },
        changeGSTCodeDialogState:(state,action)=>{
            state.gstCodeDialogState.open=!state.gstCodeDialogState.open
            state.gstCodeDialogState.action_type=action.payload.action_type
            state.gstCodeDialogState.data=action.payload.data
        },
        changeNewCategoryDialogState:(state,action)=>{
            state.newCategoryDialogState=!state.newCategoryDialogState
        },
        changeNewCustomerDialogState:state=>{
            state.newCustomerDialogState=!state.newCustomerDialogState
        },
        changeCustomerTypeDialogState:(state,action)=>{
            state.CustomerTypeDialogState.open=!state.CustomerTypeDialogState.open
            state.CustomerTypeDialogState.action_type=action.payload
        }


    }
})
export const ConfirmDialogStateSelector=state=>state.component.dialog.ConfirmDialogState
export const productDialogStateSelector=state=>state.component.dialog.newProductDialogState
export const gstCodeDialogStateSelector=state=>state.component.dialog.gstCodeDialogState
export const categoryDialogStateSelector=state=>state.component.dialog.newCategoryDialogState
export const customerDialogStateSelector=state=>state.component.dialog.newCustomerDialogState
export const customerTypeDialogStateSelector=state=>state.component.dialog.newCustomerTypeDialogState
export const CustomerTypeDialogStateSelector=state=>state.component.dialog.CustomerTypeDialogState

// POS


export const {
    changeConfirmDialogState,
    changeNewProductDialogState,
    changeGSTCodeDialogState,
    changeNewCategoryDialogState,
    changeNewCustomerDialogState,
    changeNewCustomerTypeDialog,
    changeCustomerTypeDialogState,

}=dialogSlice.actions

export default dialogSlice.reducer