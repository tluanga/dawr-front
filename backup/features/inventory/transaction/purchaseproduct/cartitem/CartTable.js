import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {selectCartItems} from './cartitem.slice'
import {Styles,ReactTable,RowLink} from '../../../../../app/components/table/ReactTable'


function CartTable() {
    const cartItems=useSelector(selectCartItems)
    let total_costprice=0
    let total_gst=0
    let total_discount=0
    let grand_total=0
    const cartTotal=cartItems.map(cartItem=>{
        total_costprice+=cartItem.cost_price?cartItem.cost_price:0
        total_gst+=cartItem.gst?cartItem.gst:0
        total_discount+=cartItem.discount?cartItem.discount:0
        grand_total+=cartItem.total_costprice?cartItem.total_costprice:0
    })
    console.log(cartItems)

    const columns=React.useMemo(()=>[
        {
            Header:'Sl.No',
            accessor:'id'
        },
        {
            Header:'Name',
            accessor:'name',            
        },
        {
            Header:'Qtty',
            accessor:'quantity'
        },
        {
            Header:'CostPrice',
            accessor:'cost_price'
        },
        {
            Header:'Gst',
            accessor:'gst'
        },
        {
            Header:'Discount',
            accessor:'discount'
        },
        {
            Header:'TTCostPrice',
            accessor:'total_costprice',
        },       

        ],[]
    )

    const data=''
    return (
        <div>
            <Styles>
                <ReactTable
                    columns={columns}
                    data={cartItems}
                />
            </Styles>
            Total Cost Price:{total_costprice}
            Total Gst:{total_gst}
            Total Discount:{total_discount}
            Grand Total:{grand_total}

        </div>
    )
}

export default CartTable
