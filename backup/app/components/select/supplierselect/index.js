import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

import AsyncSelect from 'react-select/async'

import {searchSupplier} from '../../../../api/search.select.api'
import {searchItem} from '../../../../api/api' ;

import {addSelectedProduct} from '../../components.store'


const ProductSelect=(props)=>{
    

    const dispatch=useDispatch()

//-----React Async Select
    const productOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchSupplier(inputValue));
        }, 1000);
    });
    
    return(
        <div>
            <AsyncSelect 
                cacheOptions
                placeholder='Select Product.........'
                defaultOptions        
                loadOptions={productOptions}
                className='__productselect'        
                size='small'
                onChange={ async data=>{
                    const inputValue=data.value
                    
                    const params={
                        url:'product',
                        searchParam:[     
                            {
                            key:'id_iexact',
                            value:inputValue
                            },          
                                    
                        ]
                }                                        
                const a= await searchItem(params)
                const b=a[0]
                
                // setProduct(a[0])
                
                dispatch(addSelectedProduct(b))  
            
                    }
                }
            /> 
           
        </div>
       
    )
}

export default ProductSelect