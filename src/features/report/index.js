import React from 'react'
import {Link,Route} from 'react-router-dom'
import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'

import SalesReport from './SalesReport'
import PurchaseOrderReport from './PurchaseOrder'
import InventoryOnHand from './InventoryOnHand'
import InventoryChange from './InventoryChange'
import MultiStockLocation from './MultiStockLocation'


// import Transaction from './transaction'
// import Customer from './customer'
// import Product from './product'
// import Supplier from './supplier'
// import Category from './category'

import 'react-tabs/style/react-tabs.css';



const Inventory=()=>{
    return(
        <div>
         <Tabs>
            <TabList>
               <Tab>Sales</Tab>
               <Tab>Purchase Order</Tab>
               <Tab>Inventory On-Hand</Tab>
               <Tab>Inventory Change</Tab>   
               <Tab>Multi-Stock Location</Tab>
               <Tab>Inventory Pick List</Tab>
               <Tab>Inventory Packing List</Tab>
            </TabList>

            <TabPanel>                    
               <SalesReport/>
            </TabPanel>
            <TabPanel>                    
               <PurchaseOrderReport/>
            </TabPanel>
            <TabPanel>
               <InventoryOnHand/>
            </TabPanel>                
            <TabPanel>                    
                <InventoryChange/>                    
            </TabPanel>
            <TabPanel>                    
                <MultiStockLocation/>                    
            </TabPanel>
            <TabPanel>
                                Inventory Pick List Report
                    A pick list is a list of items for your operations team to take from inventory. Typically this is for the purpose of fulfilling customers’ orders for the day or for supplying to the production of finished goods. The use of pick lists enables accurate inventory on-hand numbers because it includes consideration of inventory dedicated to orders or production.
            </TabPanel>
            <TabPanel>
            Inventory Packing List
                    An inventory packing list or production report details the total amount of each item required to fulfill each customer’s order. It allows you to take into account each customer’s orders and how the finished goods inventory should get assigned separately for each customer. With it, you can quickly check that each customer order contains the right products in the right quantities.
            </TabPanel>
            
         </Tabs>
         
        </div>
    )

}

export default Inventory