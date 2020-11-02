import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectProductList,setSelect} from './Product.slice'
import Creatable from 'react-select/creatable';


const ProductSelect = ({setOpenModal}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectProductList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default ProductSelect
