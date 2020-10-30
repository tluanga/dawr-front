import {createEntityAdapter,createSlice} from '@reduxjs/toolkit'


export const selectEntityAdapter=createEntityAdapter({})

// --Selected Item

export const selectSlice=createSlice({
    name:'select',
    initialState:{
        product:{},
        gstcode:{},
        supplier:{},
        customer:{},
        customerType:{},
        
    },
    reducers:{
        addSelectedProduct:(state,action)=>{
            state.product=action.payload
        },
        addSelectedGstCode:(state,action)=>{
            state.gstcode=action.gstcode
        },
        addSelectedSupplier:(state,action)=>{
            state.supplier=action.payload
        },
        addSelectedCustomer:(state,action)=>{
            state.customer=action.payload
        },
        addSelectedCustomerType:(state,action)=>{
            state.customer=action.payload
        }

    }

})

export const selectedCustomer=state=>state.component.select.customer
export const selectedProduct=state=>state.component.select.product
export const selectedGstCode=state=>state.component.select.gstcode

export const{
    addSelectedProduct,
    addSelectedGstCode,
    addSelectedSupplier,
    
    addSelectedCustomer,
    addSelectedCustomerType
} = selectSlice.actions
export default selectSlice.reducer