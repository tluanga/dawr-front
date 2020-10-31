import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
// -----Redux--------
import {useDispatch} from 'react-redux'
import {newVendor} from './Vendor.slice'
import {NEW,EDIT,MODULE_NAME} from './Vendor.constants'


const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: { 
        position: 'absolute',
        width:'35vw',
        height:'80vh',
        top: '10vh',
        bottom: '10vh',
        left: '32.5vw',
        right: '32.5vw',        
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
  };

const Wrapper=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
  `
const Form=styled.form`
    display:flex;
    flex-direction:column ;
  `
const Control=styled.section`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  `

Modal.setAppElement('#root')

const VendorModal = ({openModal,setOpenModal,modalMode,modalData}) => {
    const dispatch=useDispatch()
    const {handleSubmit,register}=useForm()
    
    const onSubmit=data=>{
        setOpenModal(false)
        if(modalMode===NEW){
            dispatch(newVendor(data))
        }
        else if(modalMode===EDIT){
            dispatch()
        }
        
    }
    return(       
        <Modal
            isOpen={openModal}
            onRequestClose={()=>setOpenModal(false)}
            style={customStyles}
        >
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {modalMode===NEW?
                        <p>New {MODULE_NAME} </p>
                        :<p>Edit {MODULE_NAME}</p>
                    }
                    <TextField
                        variant='outlined'
                        name='name'
                        placeholder='Name'
                        size='small'
                        label={modalMode===NEW?'':modalData.name}
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='address'
                        label={modalMode===NEW?'':modalData.address}
                        placeholder='Address'
                        multiline
                        rows={4}
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='mobile'
                        label={modalMode===NEW?'':modalData.mobile}
                        placeholder='Mobile No'
                        size='small'
                        type='number'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='email'
                        label={modalMode===NEW?'':modalData.email}
                        placeholder='email'
                        type='email'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='pincode'
                        label={modalMode===NEW?'':modalData.pincode}
                        placeholder='Pin Code'
                        type='number'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='gstNo'
                        label={modalMode===NEW?'':modalData.gstNo}
                        placeholder='Gst Number'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='remarks'
                        label={modalMode===NEW?'':modalData.remarks}
                        placeholder='Remarks'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    

                    <Control>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Submit</Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='button'
                        >Clear</Button>
                        <Button
                            variant='contained'
                            color='secondary'
                            type='submit'
                            onClick={()=>{
                                setOpenModal(false)
                            }}
                        >Cancel</Button>

                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default VendorModal
