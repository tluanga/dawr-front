import React,{useState} from 'react'
import VendorModal from './Vendor.modal'


const Vendor = () => {
    const [openModal,setOpenModal]=useState(false)
    return (
        <div>
            <button onClick={()=>setOpenModal(true)}>Open Modal</button>
            <VendorModal 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export default Vendor
