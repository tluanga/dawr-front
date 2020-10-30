
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchCustomerType} from '../../../api/search.select.api'

import {searchItem,getItem} from '../../../api/api'
import {setSelect} from './CustomerType.slice'
import NewCustomerTypeDialog from './CustomerType.dialog'
import {NEW} from './CustomerType.constants'


import {setDialog,dialogSelector,setSelectedCustomerType} from './CustomerType.slice'



const CustomerTypeSelect=(props)=>{    
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const CustomerTypeDialogState=useSelector(dialogSelector)

//-----React Async Select
    const CustomerTypeOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchCustomerType({searchString:inputValue}));
        }, 1000);
    });

    const handleCreateOption=data=>{
        console.clear()
        console.log('Handle create option',data)
        setName(data)

        dispatch(setDialog({open:true,mode:NEW}))
        
    }
    
    return(
        <div>
            {
                CustomerTypeDialogState.open?<NewCustomerTypeDialog name={name} isButtonEnabled={false} />:''
            }
            <AsyncCreatableSelect                
                cacheOptions
                placeholder='Select CustomerType.........'
                defaultOptions        
                loadOptions={CustomerTypeOptions}
                className='select'        
                // size='small'                
                onCreateOption={handleCreateOption}
                
                onChange={ async data=>{
                    const inputValue=data.value
                    const _customer=await getItem({url:'customertype',id:inputValue})
                    
                    dispatch(setSelect(_customer))  
            
                    }
                } 
            /> 
        </div>
        
           
    
       
    )
}

export default CustomerTypeSelect