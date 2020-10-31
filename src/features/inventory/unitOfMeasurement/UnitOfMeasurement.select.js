import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectVendorList,setSelect} from './UnitOfMeasurement.slice'
import Creatable from 'react-select/creatable';


const VendorSelect = ({setOpenModal}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectVendorList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default VendorSelect
