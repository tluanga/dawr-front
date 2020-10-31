import React from 'react'
import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'
import Vendor from './vendor/Vendor.component'
import Category from './category/Category.component'
import GstCode from './gstCode/GstCode.component'
import CustomerType from './customerType/CustomerType.component'





import 'react-tabs/style/react-tabs.css';




const Inventory=()=>{
    return(
        <div>
         <Tabs>
             <TabList>
                <Tab>TRANSACTION</Tab>
                <Tab>CUSTOMER</Tab>
                <Tab>PRODUCT</Tab>                
                <Tab>VENDOR</Tab>
                <Tab>CATEGORY</Tab>                
                <Tab>GST CODE</Tab>
                <Tab>UNIT OF MEASUREMENT</Tab>
                <Tab>CUSTOMER TYPE</Tab>
                
             </TabList>           
                <TabPanel>                    
                    <Vendor/>
                </TabPanel>
                <TabPanel>                    
                    <Vendor/>                    
                </TabPanel>                
                <TabPanel>                    
                    <Vendor/>                    
                </TabPanel>
                <TabPanel>                    
                    <Vendor/>                    
                </TabPanel>
                <TabPanel>
                    <Category/>                    
                </TabPanel>
                <TabPanel>
                    <GstCode/>                    
                </TabPanel>
                <TabPanel>                   
                    <Vendor/>                    
                </TabPanel>
                <TabPanel>
                    <CustomerType/>
                </TabPanel>
         </Tabs>
         
        </div>
    )

}

export default Inventory