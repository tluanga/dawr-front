import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectVendorList,setSelect} from './Vendor.slice'
import Creatable from 'react-select/creatable';


const VendorSelect = () => {
    const dispatch=useDispatch()
    const options=useSelector(selectVendorList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
       />
    )
}

export default VendorSelect
