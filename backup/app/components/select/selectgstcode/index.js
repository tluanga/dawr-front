import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import AsyncCreatableSelect from 'react-select/async-creatable'
import {searchProduct} from '../../../../api/search.select.api'
import {searchItem} from '../../../../api/api' ;
import {addSelectedProduct} from '../../select/select.store'
import {changeNewProductDialogState,productDialogStateSelector} from '../../dialog/dialog.store'
import NewProductDialog from '../../dialog/newproduct/index'
import '../select.style.css'

const ProductSelect=(props)=>{
    // const new=useSelector(state=>state.component.productSelect.openCreateProductDialog)
    const newProductDialogState=useSelector(productDialogStateSelector)
    const [name,setName]=useState('') 

    const dispatch=useDispatch()

//-----React Async Select
    const productOptions = inputValue =>
    new Promise(resolve => {
        
        setTimeout(() => {        
        resolve(searchProduct({id:inputValue}));
        }, 1000);
    });

    const handleCreateOption=data=>{
        console.clear()
        console.log('Handle create option',data)
        setName(data)

        dispatch(changeNewProductDialogState())
        console.log(newProductDialogState)
    }
    
    return(
        <div>
           
            {/* {createProduct?<NewProduct name={name}/>:'' } */}
            {
                newProductDialogState?<NewProductDialog name={name} isButtonEnabled={false}/>:''
            }
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
                    
                    const params={
                        url:'product',
                        searchParam:[     
                            {
                            key:'id__iexact',
                            value:inputValue
                            },          
                                    
                        ]
                    }
                                                          
                    const a= await searchItem(params)
                    const b=a[0]
                    
                
                    dispatch(addSelectedProduct(b))  
            
                    }
                }
            /> 
        </div>

      
            
       
    )
}

export default ProductSelect