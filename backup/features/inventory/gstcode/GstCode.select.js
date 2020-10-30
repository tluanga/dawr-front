
import React,{useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchGstCode} from '../../../api/search.select.api'

import {searchItem} from '../../../api/api'

import NewGstCodeDialog from './GstCode.dialog'
import {NEW} from './GstCode.constants'


import {setDialog,dialogSelector,setSelect} from './GstCode.slice'


const Select=styled(AsyncCreatableSelect)`
    width:400px;
`


const GstCodeSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    const gstCodeDialogState=useSelector(dialogSelector)

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

        dispatch(setDialog({open:true,mode:NEW}))
        console.log()
    }
    
    return(
        <div>
            {
                gstCodeDialogState.open?<NewGstCodeDialog name={name} isButtonEnabled={false} />:''
            }
            <Select 
                cacheOptions               
                placeholder='Select GstCode.........'
                defaultOptions
                LoadingIndicator        
                loadOptions={gstCodeOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    console.log(inputValue)
                    console.clear()
                    const params={
                        url:'gstcode',
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

export default GstCodeSelect