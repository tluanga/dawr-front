import React,{useState} from 'react'
// ----------Redux---------
import {useDispatch} from 'react-redux'
import {fetchGstCodeList} from './GstCode.slice'

import GstCodeModal from './GstCode.modal'
import GstCodeTable from './GstCode.table'
import {NEW} from './GstCode.constants'
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

const GstCode = () => {
    // ---------Redux----------
    const dispatch=useDispatch()
    dispatch(fetchGstCodeList()) 


    const [openModal,setOpenModal]=useState(false)
    const [modalMode,setModalMode]=useState(NEW)
    const [modalData,setModalData]=useState({})
    
    return (
        <Wrapper>
            {/* <GstCodeSelect setOpenModal={setOpenModal}/> */}
            <Control>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<IoIosPeople/>}
                    onClick={()=>{
                        setOpenModal(true)
                        setModalMode(NEW)
                    }}
                >New GstCode</Button>
            </Control>
            
            <GstCodeModal 
                openModal={openModal}
                modalMode={modalMode}
                setOpenModal={setOpenModal}
                modalData={modalData}
                setModalData={setModalData}
            />
            <GstCodeTable 
                setOpenModal={setOpenModal}
                setModalMode={setModalMode}
                setModalData={setModalData}
            />
        </Wrapper>
    )
}

export default GstCode
