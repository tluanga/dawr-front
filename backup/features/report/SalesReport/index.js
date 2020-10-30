import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import {TabList,Tabs,Tab, TabPanel} from 'react-tabs'
import Select from 'react-select';
import ProductSales from './ProductSales'
import Button from '@material-ui/core/Button'
import ProductSelect from '../../inventory/product/Product.select';

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