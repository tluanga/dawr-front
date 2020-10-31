import React,{useState} from 'react'
import VendorModal from './Vendor.modal'
import VendorSelect from './Vendor.select'
import VendorTable from './Vendor.table'

const Vendor = () => {
    const [openModal,setOpenModal]=useState(false)
    return (
        <div>
            {/* <VendorSelect setOpenModal={setOpenModal}/> */}
            
            <VendorModal 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <VendorTable/>
        </div>
    )
}

export default Vendor
