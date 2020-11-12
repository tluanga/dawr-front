import React from 'react'
import Creatable from 'react-select/creatable';

//----Redux-------
import {useSelector,useDispatch} from 'react-redux'
import {
    selectProductList
} from '../../../../../product/Product.slice'
import {
    selectGstCodeList
} from '../../../../../gstCode/GstCode.slice'
import{
    selectCostPrices
} from '../../../../../product/ProductCostPrice.slice'
import{
    selectMrp
} from '../../../../../product/ProductMrp.slice'
import{
    selectAllStock
} from '../../../../../product/ProductStock.slice'


import {
    setProductModalOpen,
    OPEN
}from '../ProductModal/ProductModal.slice'

import {
    setCartItemProduct,
    setCartItemStock,
    setCartItemCostPrice,
    setCartItemMrp,
    setCartItemGstCode,
    setCartItemTaxRate 
} from '../cartItem.slice.js'

const ProductSelect= () => {
    const productsOptions=useSelector(selectProductList)
    const stocks=useSelector(selectAllStock)
    const gstCodes=useSelector(selectGstCodeList)
    const costPrices=useSelector(selectCostPrices)
    const mrps=useSelector(selectMrp)    
    const dispatch=useDispatch()
    return (
        <Creatable
            isClearable
            placeholder='Select Product..'
            options={productsOptions}
            onCreateOption={()=>{
                dispatch(setProductModalOpen(OPEN))                
                }
            }
            onChange={data=>{
                if(data){
                dispatch(setCartItemProduct(data))
                if(stocks.length>0){
                    const stock= stocks.find(
                        stock=>stock.product===data.id)
                    dispatch(setCartItemStock(stock.quantity)) 
                }
                if(gstCodes.length>0){
                    const gstCode= gstCodes.find(
                        gstCode=>gstCode.id===data.gst_code)
                    console.log('product gst code',gstCode)
                    if(gstCode){
                        dispatch(setCartItemGstCode(
                            gstCode.code                          
                            )
                        )
                    }
                    
                }
                if(gstCodes.length>0){
                    const gstCode= gstCodes.find(
                        gstCode=>gstCode.id===data.gst_code)
                    console.log('product gst code',gstCode)
                    if(gstCode){
                        dispatch(setCartItemTaxRate(
                            gstCode.totalGst                          
                            )
                        )
                    }
                    
                }
                if(costPrices.length>0){
                    const costPrice=costPrices.find(
                        price=>price.product===data.id)
                    dispatch(setCartItemCostPrice(
                        costPrice.cost_price
                    ))                    
                }
                if(mrps.length>0){
                    const mrp= mrps.find(
                        mrp=>mrp.product===data.id)                     
                    dispatch(setCartItemMrp(
                        mrp.amount
                    ))
                }
                
                }
            }}
        />
    )
}

export default ProductSelect
