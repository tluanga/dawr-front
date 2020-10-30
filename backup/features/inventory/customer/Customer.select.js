
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchCustomer} from '../../../api/search.select.api'

import {getCustomerDetail} from '../../../api/getDetail.api'
import NewCustomerDialog from './Customer.dialog'
import {NEW} from './Customer.constants'


import {setDialog,dialogSelector,setSelect} from './Customer.slice'

const SelectContainer=styled.section`
    /* width:${props=>props.width} ; */
    width:50;
`



const CustomerSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const CustomerDialogState=useSelector(dialogSelector)

//-----React Async Select
    const customTheme=(theme)=>(
        {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'orange',
                primary: 'green',
        
            },
        }
    )
    
    
    const CustomerOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchCustomer({searchString:inputValue}));
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
                CustomerDialogState.open?<NewCustomerDialog name={name} isButtonEnabled={false} />:''
            }
            <SelectContainer>
                <AsyncCreatableSelect
                    menuColor='red'
                    theme={customTheme}                
                    cacheOptions
                    placeholder='Select Customer.........'
                    defaultOptions        
                    loadOptions={CustomerOptions}
                    className='select'        
                    size='small'                
                    onCreateOption={handleCreateOption}
                    onChange={ async data=>{
                        const inputValue=data.value
                        const _customer=await getCustomerDetail(inputValue)
                        
                        dispatch(setSelect(_customer))  
                
                        }
                    }
                /> 

            </SelectContainer>
            
        </div>
        
           
    
       
    )
}

export default CustomerSelect