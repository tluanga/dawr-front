import React from 'react'
// -------Redux---------
import {useSelector,useDispatch} from 'react-redux'
import {selectGstCodeList,setSelect} from './GstCode.slice'
import Creatable from 'react-select/creatable';


const GstCodeSelect = ({setOpenModal}) => {
    const dispatch=useDispatch()
    const options=useSelector(selectGstCodeList)
    return (
       <Creatable
            onChange={data=>dispatch(setSelect(data))}
            options={options}
            onCreateOption={()=>setOpenModal(true)}
       />
    )
}

export default GstCodeSelect
