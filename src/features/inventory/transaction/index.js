import React from 'react'
// ---------Redux-----------
import {useDispatch} from 'react-redux'
import {fetchVendorList} from '../vendor/Vendor.slice'
import {fetchWarehouseList} from '../warehouse/Warehouse.slice'
import {fetchProductList} from '../product/Product.slice'
import {fetchGstCodeList} from '../gstCode/GstCode.slice'
import {fetchCurrentStock} from '../product/ProductStock.slice'
import {
    fetchCurrentSellPrice,
    fetchCurrentCostPrice,
    fetchCurrentMrp
} from '../product/ProductPrice.slice'


 

import {TabList,Tabs,Tab,TabPanel} from 'react-tabs'
import PurchaseProduct from './purchaseProduct'

const Transaction = () => {
    //-------Redux------------
    const dispatch=useDispatch()
    dispatch(fetchVendorList())
    dispatch(fetchWarehouseList())
    dispatch(fetchProductList())
    dispatch(fetchGstCodeList())
    dispatch(fetchCurrentSellPrice())
    dispatch(fetchCurrentCostPrice())
    dispatch(fetchCurrentMrp())
    dispatch(fetchCurrentStock())

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
