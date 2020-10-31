// import {searchItem} from './api'

// export const searchProduct=async({searchString}) =>{
    
//     const params={
//         url:'product',
//         searchParam:[     
                       
//             {
//                 key:'name__icontains',
//                 value:searchString
//             },
                 
//           ]
//         }
     
//       const a= await searchItem(params)
    
//       const b=[]
//       a.map(a=>{
//         const c={
//             value:a.id,
//             label:a.name
//         }
//         b.push(c)
        
//         return a
//       }     
//     )
//     return b
// }

// export const searchCategory=async({searchString}) =>{
  
//   const params={
//       url:'category',
//       searchParam:[     
                   
//           {
//               key:'name__icontains',
//               value:searchString
//           },
//           {
//           key:'abbreviation__icontains',
//           value:searchString
//           },
                   
//       ]
//   }
    
//     const a= await searchItem(params)
//     console.log(a)
//     const b=[]
//     a.map(a=>{
//       const c={
//           value:a.id,
//           label:a.name
//       }
//       b.push(c)
      
//       return a
//     }     
//   )
//   return b
// }



// export const searchSupplier=async({id,inputValue})=>{
//   const supplierUrlParams={
//     url:'supplier',
//     searchParam:[
//         {
//         key:'id__iexact',
//         value: id?id:null
//         },
//         {
//         key:'name__icontains',
//         value:inputValue?inputValue:''
//         },
        
//     ]
// }
    
//   const a= await searchItem(supplierUrlParams)
//   const b=[]
//   a.map(a=>{
//     const c={
//         value:a.id,
//         label:a.name
//     }    
//     b.push(c)
//     return a
//   }     
//   )
//   return b
// }
// export const searchWarehouse=async({id,inputValue})=>{
//   const warehouseUrlParams={
//     url:'warehouse',
//     searchParam:[
//         {
//         key:'id__iexact',
//         value: id?id:null
//         },
//         {
//         key:'name__icontains',
//         value:inputValue?inputValue:''
//         },
        
//     ]
// }
    
//   const a= await searchItem(warehouseUrlParams)
//   const b=[]
//   a.map(a=>{
//     const c={
//         value:a.id,
//         label:a.name,        
//     }    
//     b.push(c)
//     return a
//   }     
//   )
//   return b
// }

// //-------------- Point of Sale

// export const searchCustomer=async({searchString}) =>{
    
//   const params={
//       url:'customer',
//       searchParam:[     
                     
//           {
//               key:'name__icontains',
//               value:searchString
//           },
//         //   {
//         //   key:'model__icontains',
//         //   value:searchString
//         //   },
//         //  {
//         //   key:'tag__icontains',
//         //   value:searchString
//         //   }            
//         ]
//       }
    
//     const a= await searchItem(params)

//     const b=[]
//     a.map(a=>{
//       const c={
//           value:a.id,
//           label:a.name
//       }
//       b.push(c)
      
//       return a
//     }     
//   )
//   return b
// }


// export const searchCustomerType=async({searchString}) =>{
    
//   const params={
//       url:'customertype',
//       searchParam:[
                     
//           {
//               key:'name__icontains',
//               value:searchString
//           },
//         //   {
//         //   key:'model__icontains',
//         //   value:searchString
//         //   },
//         //  {
//         //   key:'tag__icontains',
//         //   value:searchString
//         //   }            
//         ]
//       }
    
//     const a= await searchItem(params)
  
//     const b=[]
//     a.map(a=>{
//       const c={
//           value:a.id,
//           label:a.name
//       }
//       b.push(c)
      
//       return a
//     }     
//   )
//   return b
// }

// export const searchGstCode=async({searchString}) =>{
    
//   const params={
//       url:'gstcode',
//       searchParam:[
                     
//           {
//               key:'name__icontains',
//               value:searchString
//           }
               
//         ]
//       }
    
//     const a= await searchItem(params)
    
//     const b=[]
//     a.map(a=>{
//       const c={
//           value:a.id,
//           label:a.code+'---'+a.description_of_good
//       }
//       b.push(c)
      
//       return a
//     }     
//   )
//   return b
// }

// export const searchUnitOfMeasurement=async({searchString}) =>{
    
//   const params={
//       url:'unit_of_meaurement',
//       searchParam:[
                     
//           {
//               key:'name__icontains',
//               value:searchString
//           }
               
//         ]
//       }
    
//     const a= await searchItem(params)
    
//     const b=[]
//     a.map(a=>{
//       const c={
//           value:a.id,
//           label:a.abbreviation+'---'+a.unit_of_measurement
//       }
//       b.push(c)
      
//       return a
//     }     
//   )
//   return b
// }

