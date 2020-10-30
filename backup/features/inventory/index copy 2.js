import React from 'react'
import {Link,Route} from 'react-router-dom'
import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'
import Transaction from './transaction'

import Customer from './customer'
import Product from './product'
import Supplier from './supplier'
import Category from './category'


import Gst from './gstcode'
import UnitOfMeasurements from './unitofmeasurement'
import CustomerType from './customertype'

import 'react-tabs/style/react-tabs.css';



const Inventory=()=>{
    return(
        <div>
         <Tabs>
             <TabList>
                <Tab>
                    <Link to='/inventory/transaction'>TRANSACTION</Link>
                </Tab>
                <Tab>
                    <Link to='/inventory/customer'>CUSTOMER</Link>
                </Tab>
                <Tab>
                    <Link to='/inventory/product'>PRODUCT</Link>
                </Tab>                
                <Tab>
                    <Link to='/inventory/supplier'>SUPPLIER</Link>
                </Tab>
                
                <Tab>
                    <Link to='/inventory/category'>CATEGORY</Link>
                </Tab>
                
                <Tab>
                    <Link to='/inventory/gst'> GST CODE
                    </Link>
                </Tab>
                <Tab>
                    <Link to='/inventory/unitofmeasurement'> UNIT OF MEASUREMENT
                    </Link>
                </Tab>
                <Tab>
                    <Link to='/inventory/customertype'> CUSTOMER TYPE
                    </Link>
                </Tab>
                
             </TabList>           
                <TabPanel>                    
                    <Route path='/inventory'  component={Transaction}/>
                </TabPanel>
                <TabPanel>                    
                    <Route path='/inventory/customer' component={Customer}/>                    
                </TabPanel>                
                <TabPanel>                    
                    <Route path='/inventory/product' component={Product}/>                    
                </TabPanel>
                <TabPanel>                    
                    <Route path='/inventory/supplier' component={Supplier}/>                    
                </TabPanel>
                <TabPanel>
                    <Route path='/inventory/category' component={Category}/>                    
                </TabPanel>
                <TabPanel>                   
                    <Route path='/inventory/gst' component={Gst}/>                    
                </TabPanel>
                <TabPanel>                   
                    <Route path='/inventory/unitofmeasurement' component={UnitOfMeasurements}/>                    
                </TabPanel>
                <TabPanel>
                    <Route path='/inventory/customertype' component={CustomerType}/>
                </TabPanel>
         </Tabs>
         
        </div>
    )

}

export default Inventory