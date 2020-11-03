import React,{useState} from 'react'
import VendorModal from './Manufacturer.modal'
import VendorTable from './Manufacturer.table'
import {NEW} from './Manufacturer.constants'
import Button from '@material-ui/core/Button'
import {IoIosPeople} from 'react-icons/io'
import styled from 'styled-components'

const Wrapper=styled.div`
    display:flex;
    flex-direction:column ;
    padding-left:1vw;
    padding-right:1vw;
`
const Control=styled.section`
    display:flex;
    flex-direction:row;
    justify-content:left;
    padding-bottom:1vh;

`

const Manufacturer = () => {
    const [openModal,setOpenModal]=useState(false)
    const [modalMode,setModalMode]=useState(NEW)
    const [modalData,setModalData]=useState({})
    
    return (
        <Wrapper>
            {/* <VendorSelect setOpenModal={setOpenModal}/> */}
            <Control>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<IoIosPeople/>}
                    onClick={()=>{
                        setOpenModal(true)
                        setModalMode(NEW)
                    }}
                >New Manufacturer</Button>
            </Control>
            
            <VendorModal 
                openModal={openModal}
                modalMode={modalMode}
                setOpenModal={setOpenModal}
                modalData={modalData}
                setModalData={setModalData}
            />
            <VendorTable 
                setOpenModal={setOpenModal}
                setModalMode={setModalMode}
                setModalData={setModalData}
            />
        </Wrapper>
    )
}

export default Manufacturer
