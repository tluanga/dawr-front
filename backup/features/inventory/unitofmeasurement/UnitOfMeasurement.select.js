
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchUnitOfMeasurement} from '../../../api/search.select.api'

import {searchItem} from '../../../api/api'
import {setSelect} from './UnitOfMeasurement.slice'
import NewUnitOfMeasurementDialog from './UnitOfMeasurement.dialog'
import {NEW} from './UnitOfMeasurement.constant'


import {setDialog,dialogSelector,setSelectedUnitOfMeasurement} from './UnitOfMeasurement.slice'


const Select=styled(AsyncCreatableSelect)`
    width:400px;
`


const UnitOfMeasurementSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const unitOfMeasurementDialogState=useSelector(dialogSelector)

//-----React Async Select
    const unitOfMeasurementOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchUnitOfMeasurement({searchString:inputValue}));
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
                unitOfMeasurementDialogState.open?<NewUnitOfMeasurementDialog name={name} isButtonEnabled={false} />:''
            }
            <Select 
                cacheOptions
                placeholder='Select UnitOfMeasurement.........'
                defaultOptions        
                loadOptions={unitOfMeasurementOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    console.log(inputValue)
                    console.clear()
                    const params={
                        url:'unitOfMeasurement',
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

export default UnitOfMeasurementSelect