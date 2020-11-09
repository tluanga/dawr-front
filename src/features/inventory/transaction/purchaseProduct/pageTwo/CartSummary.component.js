import React from 'react'
// ------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {
    selectCart,
    selectTotalAmount,
    selectTotalTax,
    selectTotalDiscount,
} from './Cart.Slice'
import {
    selectVendor,
    selectWarehouse
}from '../pageOne/PurchaseProductInfo.slice'
import Button from '@material-ui/core/Button'
const CartSummary= () => {
    // ------Redux---------
    const dispatch=useDispatch()
    const cart=useSelector(selectCart)
    const vendor=useSelector(selectVendor)
    const warehouse=useSelector(selectWarehouse)
    const totalAmount=useSelector(selectTotalAmount)
    const totalTax=useSelector(selectTotalTax)
    const totalDiscount=useSelector(selectTotalDiscount)

    // purchase_order_item": [
    //     {
    //         "product": 1,
    //         "cost_price": 100.0,
    //         "cost_price_bulk": 90.0,
    //         "sell_price": 200.0,
    //         "sell_price_bulk": 200.0,
    //         "mrp": 350.0,
    //         "discount": 10,
    //         "quantity": 100,
    //         "active": true,
    //         "created_at": "2020-10-28T15:06:41.439869Z",
    //         "updated_at": "2020-10-28T15:06:41.439869Z"
    //     }


    const handleSubmit=()=>{
        

        const payload={
            total_tax:totalTax,
            total_discount:totalDiscount,
            total_amount:totalAmount,
            warehouse:warehouse.id,
            vendor:vendor.id,
            purchase_order_item:cart
        }
        console.log('payload----->',payload)
    }
    return (
        <div>
            <div>
                <h4>Total Tax Amount(+):{totalTax?totalTax:0}</h4>
                <h4>Total Discount(-):{totalDiscount?totalDiscount:0}</h4>
                <h4>Total Amount:{totalAmount?totalAmount:0}</h4>
            </div>
            <Button
                variant='contained'
                color='primary'
                style={{width:'200px'}}
                onClick={handleSubmit}
            >Submit</Button>
            <Button
                variant='contained'
                color='secondary'
                style={{width:'200px'}}
            >Clear Cart</Button>

        </div>
    )
}

export default CartSummary
