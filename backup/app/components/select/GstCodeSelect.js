
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchGstCode} from '../../../api/search.select.api'
import {getItem} from '../../../api/api'

import {addSelectedGstCode} from './select.store'
import NewCategoryDialog from '../dialog/newcategory'
import {changeNewCategoryDialogState,categoryDialogStateSelector} from '../dialog/dialog.store'
import './select.style.css'


const CategorySelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const newCategoryDialogState=useSelector(categoryDialogStateSelector)

//-----React Async Select
    const gstCodeOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchGstCode({searchString:inputValue}));
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
                placeholder='Select GST.........'
                defaultOptions        
                loadOptions={gstCodeOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const _gstCode=await getItem({
                        url:'gstcode',
                        id:data.value
                    })
                dispatch(addSelectedGstCode(_gstCode))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default CategorySelect