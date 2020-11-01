import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectCustomerTypeList,setSelect} from './CustomerType.slice'
import Creatable from 'react-select/creatable';


const CustomerTypeSelect = ({setOpenModal,defaultValue}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectCustomerTypeList)
    return (
       <Creatable
            defaultValue={options[defaultValue-1]}
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default CustomerTypeSelect
