import React,{useState} from 'react'
// ---------Redux--------
import {useDispatch} from 'react-redux'
import {fetchCustomerList} from './Customer.slice'
import CustomerModal from './Customer.modal'
import CustomerTable from './Customer.table'
import {NEW} from './Customer.constants'
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

const Customer = () => {
    // ----Redux------
    const dispatch=useDispatch()
    dispatch(fetchCustomerList()) 

    const [openModal,setOpenModal]=useState(false)
    const [modalMode,setModalMode]=useState(NEW)
    const [modalData,setModalData]=useState({})
    
    return (
        <Wrapper>
            {/* <CustomerSelect setOpenModal={setOpenModal}/> */}
            <Control>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<IoIosPeople/>}
                    onClick={()=>{
                        setOpenModal(true)
                        setModalMode(NEW)
                    }}
                >New Customer</Button>
            </Control>
            
            <CustomerModal 
                openModal={openModal}
                modalMode={modalMode}
                setOpenModal={setOpenModal}
                modalData={modalData}
                setModalData={setModalData}
            />
            <CustomerTable 
                setOpenModal={setOpenModal}
                setModalMode={setModalMode}
                setModalData={setModalData}
            />
        </Wrapper>
    )
}

export default Customer
