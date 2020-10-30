import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Customer from './customer/Customer'
import CustomerType from './customer-type/CustomerType'
import CustomerTypeDetail from './customer-type/CustomerTypeDetail'


function Gst() {
    return (
        <div>
          <div>
        {/* <div className='block'> */}
            <Link to='/inventory/customer/'>
                <Button variant='outlined' color='primary'>Customer</Button>
            </Link>
            <Link to='/inventory/customer/customertype'>
                <Button variant='outlined' color='primary'>Customer Type</Button>
            </Link>
            
            <Switch>
                <Route exact path='/inventory/customer/'
                    component={Customer}/>
                <Route exact path='/inventory/customer/customertype'
                    component={CustomerType}/>
                <Route path='/inventory/customer/customertype/:id'
                    component={CustomerTypeDetail}/>                    
            </Switch>
           
        </div>
            
        </div>
    )
}

export default Gst
