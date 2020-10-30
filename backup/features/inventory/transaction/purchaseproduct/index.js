// ----Only for Product Acquisition
import React from 'react'
import {useDispatch} from 'react-redux'
import {createPurchaseOrder} from './PurchaseProductSlice'
import {Route,Switch} from 'react-router-dom'
import CartHead from './carthead'
import Cart from './cart'
import Summary from './summary'
import Stepper from './stepper'
function PurchaseProduct() {
    const dispatch=useDispatch()
    const handleClick=data=>{
        dispatch(createPurchaseOrder())
    }
    return (
        <div>
          <button onClick={handleClick}>Test Purchase Order</button>
            <Switch>
                <Route 
                    exact path='/inventory/transaction/purchaseproduct'
                    component={CartHead}
                />

                <Route 
                    path='/inventory/transaction/purchaseproduct/cart'
                    component={Cart}
                />
                
                <Route
                    path='/inventory/transaction/purchaseproduct/summary'
                    component={Summary}
                />
            </Switch>
            
            
        </div>
    )
}

export default PurchaseProduct
