import React from 'react'
// -------redux-------
import {useSelector} from 'react-redux'
import {selectVendorList} from './Vendor.slice' 
import {ReactTable} from '../../../app/components/table/ReactTable'



const VendorTable = () => {
    const columns = React.useMemo(
        () => [
          {
            Header: 'name',
            accessor: 'name', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
        ],
        []
      )
      
    const vendorList=useSelector(selectVendorList)
    return (
        <div>
            <ReactTable columns={columns} data={vendorList}/>
        </div>
    )
}

export default VendorTable
