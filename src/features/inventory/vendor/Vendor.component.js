import React,{useState} from 'react'
import VendorModal from './Vendor.modal'
import VendorSelect from './Vendor.select'


const Vendor = () => {
    const [openModal,setOpenModal]=useState(false)
    return (
        <div>
            <VendorSelect/>
            <button onClick={()=>setOpenModal(true)}>Open Modal</button>
            <VendorModal 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export default Vendor
