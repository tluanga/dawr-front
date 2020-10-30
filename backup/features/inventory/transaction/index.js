import React from 'react'
import PurchaseProduct from './purchaseproduct'
import ReOrderProduct from './reorderproduct'
import {Link,Route,Switch} from 'react-router-dom'
import {Button } from '@material-ui/core'
import './Transaction.css'

function Transcation() {
    return (
        <div>
        {/* <div className='block'> */}
            <Link to='/inventory/transaction/purchaseproduct'>
                <Button variant='outlined' color='primary'>New Purchase Product</Button>
            </Link>
            <Link to='/inventory/transaction/purchaseproduct'>
                <Button variant='outlined' color='primary'>Edit Purchase Product</Button>
            </Link>
            <Link to='/inventory/transaction/reorderproduct'>
                <Button variant='outlined' color='primary'>Re Order Product</Button>
            </Link>
            <Switch>
                <Route path='/inventory/transaction/purchaseproduct'
                    component={PurchaseProduct}/>
                <Route path='/inventory/transaction/reorderproduct'
                    component={ReOrderProduct}/>                
            </Switch>
           
        </div>
    )
}

export default Transcation
