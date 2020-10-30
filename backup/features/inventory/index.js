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
import DeviceHubIcon from '@material-ui/icons/DeviceHub';



const Inventory=()=>{
    return(
        <div>
         <Tabs>
             <TabList>
                <Tab>TRANSACTION</Tab>
                <Tab>CUSTOMER</Tab>
                <Tab>PRODUCT</Tab>                
                <Tab>SUPPLIER</Tab>
                <Tab>CATEGORY</Tab>                
                <Tab>GST CODE</Tab>
                <Tab>UNIT OF MEASUREMENT</Tab>
                <Tab>CUSTOMER TYPE</Tab>
                
             </TabList>           
                <TabPanel>                    
                    <Transaction/>
                </TabPanel>
                <TabPanel>                    
                    <Customer/>                    
                </TabPanel>                
                <TabPanel>                    
                    <Product/>                    
                </TabPanel>
                <TabPanel>                    
                    <Supplier/>                    
                </TabPanel>
                <TabPanel>
                    <Category/>                    
                </TabPanel>
                <TabPanel>
                    <Gst/>                    
                </TabPanel>
                <TabPanel>                   
                    <UnitOfMeasurements/>                    
                </TabPanel>
                <TabPanel>
                    <CustomerType/>
                </TabPanel>
         </Tabs>
         
        </div>
    )

}

export default Inventory