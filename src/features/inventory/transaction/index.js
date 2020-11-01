import React from 'react'
import {TabList,Tabs,Tab,TabPanel} from 'react-tabs'
import PurchaseProduct from './purchaseProduct'

const Transaction = () => {
    return (
        <div> 
         <Tabs>
             <TabList>
                <Tab>PURCHASE PRODUCT</Tab>
                
             </TabList>
             <TabPanel>
                 <PurchaseProduct/>
             </TabPanel>

            
        </Tabs>   
        </div>
    )
}

export default Transaction
