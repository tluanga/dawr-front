import {createSlice} from '@reduxjs/toolkit'


const appSlice=createSlice({
    name:'app',
    initialState:{
        loading:false
    },
    reducers:{
        setLoadingState:(state,action)=>{
            state.loading=action.payload
        }
    }
})

export const {
    setLoadingState
}=appSlice.actions

export const selectLoadingState=state=>state.app.loading


export default appSlice.reducer