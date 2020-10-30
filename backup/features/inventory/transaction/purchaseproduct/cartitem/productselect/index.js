import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {selectProductSelector} from '../../../../product/Product.slice'
import ProductSelect from '../../../../product/Product.select'
import Paper from '@material-ui/core/Paper'
import './productselect.css'

const ProductSelectForm=()=>{
    const product=useSelector(selectProductSelector)
    
    return(
        <div className='productselect'>
            <ProductSelect/>
            {product?<Paper elevation={3} className='detail'>
                <h4>Name:{product.name}</h4>
                <h4>Model:{product.model}</h4>
                <h4>Brand:{product.brand}</h4>
                <h4>Category:{product.category}</h4>
                <h4>Cost Price:{product.cost_price}</h4>
                <h4>Selling Price:{product.selling_price}</h4>
                <h4>MRP:{product.mrp}</h4>
                <h4>Remarks:{product.remarks}</h4>
            </Paper>
            :'Loading...'}       
                 
                
            
        </div>
    )
}


export default ProductSelectForm
