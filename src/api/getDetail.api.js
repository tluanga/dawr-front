// // To get the full detail of the api endpoint for frontend
// import {baseUrl,getItem,searchItem,getList} from './api.js'

// // expected params: url:'product' id:1
// export const getCustomerDetail=async (id)=>{
//     const customerUrl='customer'
//     const _customer=await getItem({
//         url:customerUrl,
//         id
//     })
//     console.log(_customer)
//     const _customerType=await searchItem({
//         url:'customertype',
//         searchParam:[     
//         {
//             key:'name__icontains',
//             value:_customer.customer_type
//             }   
//         ]
//     })
//     console.log('customer Type',_customerType)
//     return {
//         'id': _customer.id,
//         'name': _customer.name,
//         'address': _customer.address,
//         'city': _customer.city,
//         'contact_no': _customer.contact_no,
//         'email': _customer.email,
//         'gst_no': _customer.gst_no,
//         'customer_type':_customerType[0].name,
//         'discount_percentage':_customerType[0].discount_percentage
//     }

// }

// // Point of Sale Get the Product Detail
// export const getProductDetail=async id=>{
//     const productId=id
//     const url='product'
//     console.clear()
    

//     // Step 1-get the product detail
//     const _product=await getItem({url:'product',id:productId})
//     console.log('Step-2, the getItem -Product',_product)
   
//     //Step-2 get current Product QuantityStock of the SelectedProduct
//     const searchProductStockParam={
//         url:'productstock',
//         searchParam:[     
//             {
//                 key:'current',
//                 value:true
//             },
//             {
//                 key:'product',
//                 value:productId
//             },  
//         ]
//     }
//     const _productStock=await searchItem(searchProductStockParam)
//     console.log('productStock',_productStock)
//     const stock=_productStock[0]
//     //Step-4 get the Product Gst information
//     const searchProductGstParam={
//         url:'gstcode',
//         searchParam:[     
//             {
//                 key:'code__iexact',
//                 value:_product.gstcode
//             },              
//         ]
//     } 
//     const _productGst=await searchItem(searchProductGstParam)
//     const gst=_productGst[0]
//     console.log('Step-4--Search ProductGst',_productGst)

//     // Step 5 get the sellRate Information
//     const searchProductSellRateParam={
//         url:'productsaleprice',
//         searchParam:[     
//             {
//                 key:'product',
//                 value:_product.id
//             },
//             {
//                 key:'current',
//                 value:true
//             }

//         ]
//     } 
//     const _sellRate=await searchItem(searchProductSellRateParam)
//     const sellRate=_sellRate[0]
//     console.log('Step 5---Sell Rate',_sellRate)


//     const productDetail={
//         product_id:_product.id,
//         name:_product.name,
//         stock:stock.quantity,
//         gstCode:gst.code,
//         gstRate:gst.totalGst,
//         sellingPrice:sellRate.per_piece_sell_price
        
//     }
//     return productDetail

// }

// //Point of Sale Related -  Get Product for 
// // -The api will be able select the product
// //     which are in 
// //         1) active 
// //         2) stock in quantity is greater than zero
// //         3) Sellable

// const productForPost={
//     name: '',
//     mode:'',
//     Manufacturer:'',
//     GstCode:'will be fetched from gst code',
//     GstRate:'will be fetched from gst code',
//     Rate:'Latest rate will be get from the rate model',
//     Mrp:'This will be fetched from the latest mrp',
//     quantist:'The Latest quantity from the inventory '
// }
    