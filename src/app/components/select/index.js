import React from 'react'
import ReactSelect from 'react-select';
import { setSelect } from '../../../features/inventory/vendor copy/Vendor.slice';

const Select = ({options,setSelected}) => {

    return (
        <ReactSelect
           isClearable
           isSearchable
           options={options}
           onChange={data=>setSelected(data)}
        />

    )
}

export default Select
