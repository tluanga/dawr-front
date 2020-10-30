import {createSlice} from '@reduxjs/toolkit'

export const NEW = 'NEW'
export const EDIT= 'EDIT'


const dialogSlice=createSlice({
    name:'dialog',
    initialState:{
        ConfirmSaveDialogState:{
            open:false,
            mode:NEW,
        }
       
    },
    reducers:{
        setConfirmSaveDialogState:(state,action)=>{
            state.ConfirmSaveDialogState.open=action.payload.open
            state.ConfirmSaveDialogState.mode=action.payload.mode
        },
        


    }
})
export const confirmSaveDialogStateSelector=state=>state.component.dialog.ConfirmDialogState


// POS


export const {
    setConfirmSaveDialogState,    

}=dialogSlice.actions

export default dialogSlice.reducer