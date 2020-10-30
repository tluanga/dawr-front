import {createEntityAdapter,createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {create,searchItem} from '../../../../api/api'

const url='purchaseorder'
const payload={
    ref_no:"ABC",
    total_tax: 0,
    total_discount: 10,
    total_amount: 9000,
    remarks:'',
    warehouse: 1,
    supplier: 1,
    // purchase_order_item: [
    //     {            
    //         product:1,  
    //         bulk:false,
    //         cost_price:90, 
    //         sell_price:120, 
    //         discount:0,
    //         quantity:100    
            
    //     }
    // ]
}


export const createPurchaseOrder=createAsyncThunk('createPurchaseOrder',
    payload=>{
        try{
            const response=create({url,data:{
                ref_no:"ABC",
                total_tax: 0,
                total_discount: 10,
                total_amount: 9000,
                remarks:'dfsgfs',
                warehouse: 1,
                supplier: 1,
                purchase_order_items: [
                    // {
                    //     bulk: false,
                    //     cost_price: 100,
                    //     cost_price_bulk: null,
                    //     sell_price: 200,
                    //     sell_price_bulk: null,
                    //     discount: 0,
                    //     quantity: 100,
                    //     active: true,
                    //     product: 1
                    // }
                ]
            }})
            return response
        }
        catch(err){
            console.log(err)
            return(err)
        }
    }
)
// test----

const purchaseOrderEntityAdapter=createEntityAdapter([])

export const  purchaseOrderSlice=createSlice({
    name:'purchaseOrder',
    initialState:purchaseOrderEntityAdapter.getInitialState([]),
    reducers:{},
    extraReducers:{
        [createPurchaseOrder.fulfilled]:purchaseOrderEntityAdapter.addOne,
        [createPurchaseOrder.rejected]:purchaseOrderEntityAdapter.setAll

    }
})

export default purchaseOrderSlice.reducer