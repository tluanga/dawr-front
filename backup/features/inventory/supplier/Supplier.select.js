
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchSupplier} from '../../../api/search.select.api'

import {searchItem} from '../../../api/api'
import {setSelect} from './Supplier.slice'
import NewSupplierDialog from './Supplier.dialog'
import {NEW} from './Supplier.constants'


import {setDialog,dialogSelector,setSelectedSupplier} from './Supplier.slice'


const Select=styled(AsyncCreatableSelect)`
    width:300px;
`


const SupplierSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const supplierDialogState=useSelector(dialogSelector)

//-----React Async Select
    const supplierOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchSupplier({searchString:inputValue}));
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
                supplierDialogState.open?<NewSupplierDialog name={name} isButtonEnabled={false} />:''
            }
            <Select 
                cacheOptions
                placeholder='Select Supplier.........'
                defaultOptions        
                loadOptions={supplierOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    console.log(inputValue)
                    console.clear()
                    const params={
                        url:'supplier',
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

export default SupplierSelect