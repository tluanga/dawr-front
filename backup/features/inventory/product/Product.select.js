
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchProduct} from '../../../api/search.select.api'
import {getProductDetail} from '../../../api/getDetail.api'

import {getItem} from '../../../api/api'
import ProductDialog from './Product.dialog'
import {NEW} from './Product.constants'


import {setDialog,dialogSelector,setSelect} from './Product.slice'


const Select=styled(AsyncCreatableSelect)`
    width:1300px;
`


const ProductSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const CustomerDialogState=useSelector(dialogSelector)

//-----React Async Select
    const CustomerOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchProduct({searchString:inputValue}));
        }, 1000);
    });

    const handleCreateOption=data=>{
        console.clear()
        console.log('Handle create option',data)
        setName(data)

        dispatch(setDialog({open:true,mode:NEW}))
        console.log()
    }
    
    return(
        <div>
            {
                CustomerDialogState.open?<ProductDialog name={name} isButtonEnabled={false} />:''
            }            
            <AsyncCreatableSelect 
                width={700}
                cacheOptions
                placeholder='Select Product.........'
                defaultOptions        
                loadOptions={CustomerOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    const _customer=await getProductDetail(inputValue)
                    
                    dispatch(setSelect(_customer))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default ProductSelect