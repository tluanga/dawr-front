import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectCustomerList,setSelect} from './Customer.slice'
import Creatable from 'react-select/creatable';


const CustomerSelect = ({setOpenModal}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectCustomerList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default CustomerSelect
