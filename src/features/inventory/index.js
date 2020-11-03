import React from 'react'
import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'
import Transaction from './transaction'
import Customer from './customer/Customer.component'
import Vendor from './vendor/Vendor.component'
import Category from './category/Category.component'
import GstCode from './gstCode/GstCode.component'
import CustomerType from './customerType/CustomerType.component'
import UnitOfMeasurement from './unitOfMeasurement/UnitOfMeasurement.component'
import WareHouse from './warehouse/Warehouse.component'
import Product from './product/Product.component'
import Manufacturer from './manufacturer/Manufacturer.component'



import 'react-tabs/style/react-tabs.css';




const Inventory=()=>{
    return(
        <div>
         <Tabs>
             <TabList>
                <Tab>TRANSACTION</Tab>
                <Tab>CUSTOMER</Tab>
                <Tab>CUSTOMER TYPE</Tab>
                <Tab>PRODUCT</Tab> 
                <Tab>CATEGORY</Tab>              
                <Tab>VENDOR</Tab>                                
                <Tab>GST CODE</Tab>
                <Tab>UNIT OF MEASUREMENT</Tab>
                <Tab>WAREHOUSE</Tab>
                <Tab>MANUFACTURER</Tab>

                
                
             </TabList>           
                <TabPanel>                    
                    <Transaction/>
                </TabPanel>
                <TabPanel>                    
                    <Customer/>                    
                </TabPanel>
                <TabPanel>
                    <CustomerType/>
                </TabPanel>                
                <TabPanel>                    
                    <Product/>                    
                </TabPanel>
                <TabPanel>
                    <Category/>                    
                </TabPanel>
                <TabPanel>                    
                    <Vendor/>                    
                </TabPanel>                
                <TabPanel>
                    <GstCode/>                    
                </TabPanel>
                <TabPanel>                   
                    <UnitOfMeasurement/>                    
                </TabPanel>
                <TabPanel>
                    <WareHouse/> 
                </TabPanel>
                <TabPanel>
                    <Manufacturer/>
                </TabPanel>
               
         </Tabs>
         
        </div>
    )

}

export default Inventory