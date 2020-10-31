import React from 'react'

import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'

import ProductSales from './ProductSales'



const SalesReport=()=>{
    return(
        <div>
            <Tabs>
                <TabList>
                    <Tab>Product Wise</Tab>
                    <Tab>Day</Tab>
                    <Tab>Week</Tab>
                    <Tab>Month</Tab>
                    <Tab>Year</Tab>
                </TabList>
                <TabPanel>
                    <ProductSales/>
                </TabPanel>
            </Tabs>
            
           Ultimately, business success is dependent on revenue which comes from product sales to customers. A sales report helps you to analyze your company’s performance. To have a good sales report, you will need to be able to break your sales down into different time periods, for various products, and customer level. Through these different insights, you can uncover trends to help you identify your top customers, and help you forecast inventory better in the future. 
        </div>
    )
}

export default SalesReport