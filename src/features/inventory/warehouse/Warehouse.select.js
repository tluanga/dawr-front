import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectWarehouseList,setSelect} from './Warehouse.slice'
import Creatable from 'react-select/creatable';


const WarehouseSelect = ({setOpenModal}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectWarehouseList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default WarehouseSelect
