import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';

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
        width:'30vw',
        height:'60vh',
        top: '20pvh',
        bottom: '20vh',
        left: '35vw',
        right: '35vw',        
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
  `
  const Form=styled.form`
    display:flex;
    flex-direction:column ;
  `
  const Control=styled.section`
    display:flex;
    flex-direction:row;
  `


const VendorModal = ({openModal,setOpenModal}) => {
    const {handleSubmit,register}=useForm()

    const onSubmit=data=>console.log(data)
    return(       
        <Modal
            isOpen={openModal}
            onRequestClose={()=>setOpenModal(false)}
            style={customStyles}
        >
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>EDIT/CREATE</h1>
                    <TextField
                        variant='outlined'
                        name='name'
                        placeholder='Name'
                        size='small'
                        inputRef={register}
                    />
                    <Control>
                        <Button
                            variant='contained'
                            color='blue'
                            type='submit'
                        >Submit</Button>
                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default VendorModal
