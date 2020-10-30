
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchCategory} from '../../../api/search.select.api'

import {searchItem} from '../../../api/api'

import {addSelectedCategory} from './select.store'
import NewCategoryDialog from '../dialog/newcustomerType'
import {changeNewCategoryDialogState,customerTypeDialogStateSelector} from '../dialog/dialog.store'
import './select.style.css'


const CategorySelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const newCategoryDialogState=useSelector(customerTypeDialogStateSelector)

//-----React Async Select
    const customerTypeOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchCategory({searchString:inputValue}));
        }, 1000);
    });

    const handleCreateOption=data=>{
        console.clear()
        console.log('Handle create option',data)
        setName(data)

        dispatch(changeNewCategoryDialogState())
        console.log()
    }
    
    return(
        <div>
            {
                newCategoryDialogState?<NewCategoryDialog name={name} isButtonEnabled={false} />:''
            }
            <AsyncCreatableSelect 
                cacheOptions
                placeholder='Select Category.........'
                defaultOptions        
                loadOptions={customerTypeOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    console.log(inputValue)
                    console.clear()
                    const params={
                        url:'customerType',
                        searchParam:[     
                            {
                            key:'id__iexact',
                            value:inputValue
                            },          
                                    
                        ]
                }   
                console.log(params)                                     
                const a= await searchItem(params)
                const b=a[0]
                
                // setProduct(a[0])
                console.log('search result',b)
                dispatch(addSelectedCategory(b))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default CategorySelect