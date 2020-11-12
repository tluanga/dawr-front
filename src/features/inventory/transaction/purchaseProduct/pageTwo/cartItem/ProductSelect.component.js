import React from 'react'
import Creatable from 'react-select/creatable';

//----Redux-------
import {useSelector,useDispatch} from 'react-redux'
import {
    selectProductList,
    fetchProductList
} from '../../../product/Product.slice'
import {
    setCartItemProduct,
    setCartItemCostPrice,
    setCartItemMrp,
    setCartItemGstCode,
    setCartItemTax,
    setCartItemDiscount,
    setCartItemAmount
} from './cartItem.slice'



const ProductSelect= () => {
    const productsOptions=useSelector(fetchProductList)
    return (
        <Creatable
            isClearable
            placeholder='Select Product..'
            options={productsOptions}
            onCreateOption={()=>{
                setOpenModal(true)
                setModalMode(NEW)
                }
            }
            onChange={data=>{
                if(data){
                setProduct(data)                                
                const _gstCode=gstCodes.find(
                gstCode=>gstCode.id===data.gst_code)
                const _price=costPrices.find(
                price=>price.product===data.id)
                const _mrp=mrps.find(
                price=>price.product===data.id)
                const _stock=productStocks.find(
                    stock=>stock.product===data.id)
                    console.log('stock------->',_stock)
                    setGstCode(_gstCode)
                    setCostPrice(_price)
                    setMrp(_mrp)
                    setProductStock(_stock)
                    setAmount(0)
                    } else{
                    setProduct()
                    setCostPrice()
                    setGstCode()
                    setMrp()
                    setProductStock()
                    setAmount()
                    setQuantity()
                }
            }}
        />
    )
}

export default ProductSelect
