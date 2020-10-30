
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchCategory} from '../../../api/search.select.api'

import {searchItem} from '../../../api/api'
import {setSelect} from './Category.slice'
import NewCategoryDialog from './Category.dialog'
import {NEW} from './Category.constants'


import {setDialog,dialogSelector,setSelectedCategory} from './Category.slice'


const Select=styled(AsyncCreatableSelect)`
    width:400px;
`


const CategorySelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const categoryDialogState=useSelector(dialogSelector)

//-----React Async Select
    const categoryOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchCategory({searchString:inputValue}));
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
                categoryDialogState.open?<NewCategoryDialog name={name} isButtonEnabled={false} />:''
            }
            <Select 
                cacheOptions               
                placeholder='Select Category.........'
                defaultOptions        
                loadOptions={categoryOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    console.log(inputValue)
                    console.clear()
                    const params={
                        url:'category',
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
                dispatch(setSelect(b))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default CategorySelect