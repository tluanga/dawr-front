import React from 'react'
import ReactSelect from 'react-select';
const Select = ({options,setSelected,label}) => {

    return (
        <ReactSelect
            isClearable
            isSearchable
            label={label}
            options={options}
            onChange={data=>setSelected(data)}
        />

    )
}

export default Select
