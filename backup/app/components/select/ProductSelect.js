
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchProduct} from '../../../api/search.select.api'

import {getItem} from '../../../api/api'

import {addSelectedProduct} from './select.store'
// import NewProductDialog from '../dialog/newproduct'
// import {changeNewProductDialogState,productDialogStateSelector} from '../dialog/dialog.store'
import './select.style.css'


const PrpductSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    // const newCategoryDialogState=useSelector(productDialogStateSelector)

//-----React Async Select
    const productOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchProduct({searchString:inputValue}));
        }, 1000);
    });

    const handleCreateOption=data=>{
        console.clear()
        console.log('Handle create option',data)
        setName(data)

        // dispatch(changeNewProductDialogState())
        console.log()
    }
    
    return(
        <div>
            {/* {
                newCategoryDialogState?<NewProductDialog name={name} isButtonEnabled={false} />:''
            } */}
            <AsyncCreatableSelect 
                cacheOptions
                placeholder='Select Product.........'
                defaultOptions        
                loadOptions={productOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    const _product=await getItem({url:'product',id:inputValue})
                    
                    dispatch(addSelectedProduct(_product))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default PrpductSelect