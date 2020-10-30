
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import AsyncCreatableSelect from 'react-select/async-creatable'

import {searchCustomer,searchCustomerType} from '../../../api/search.select.api'

import {searchItem,getItem} from '../../../api/api'

import {addSelectedCustomer} from './select.store'
// // import NewCustomerDialog from '../dialog/customerType'
// import {changeNewCustomerDialogState,customerDialogStateSelector} from '../dialog/dialog.store'
import './select.style.css'


const CustomerSelect=(props)=>{
    const [name, setName] = useState()
    const dispatch=useDispatch()
    // const newCustomerDialogState=useSelector(customerDialogStateSelector)

//-----React Async Select
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

        // dispatch(changeNewCustomerDialogState())
        console.log()
    }
    
    return(
        <div>
            {/* {
                newCustomerDialogState?<NewCustomerDialog name={name} isButtonEnabled={false} />:''
            } */}
            <AsyncCreatableSelect 
                cacheOptions
                placeholder='Select Customer.........'
                defaultOptions        
                loadOptions={CustomerOptions}
                className='select'        
                size='small'                
                onCreateOption={handleCreateOption}
                onChange={ async data=>{
                    const inputValue=data.value
                    
                                                     
               
                    const _selectedCustomer=await getItem({url:'customer',id:inputValue})
                    console.log('selected Customer',_selectedCustomer)
                 
                    const _customertype= await getItem({url:'customertype',id:_selectedCustomer.customer_type})
                
                    const __selectedCustomer={
                        id:_selectedCustomer.name,
                        name:_selectedCustomer.address1,
                        city:_selectedCustomer.city,
                        contact_no:_selectedCustomer.contact_no,
                        email:_selectedCustomer.email,
                        gst_no:_selectedCustomer.gst_no,
                        customer_type_name:_customertype.name,
                        customer_type_discount_percentage:_customertype.discount_percentage,
                    }

                
                    dispatch(addSelectedCustomer(__selectedCustomer))  
            
                    }
                }
            /> 
        </div>
        
           
    
       
    )
}

export default CustomerSelect