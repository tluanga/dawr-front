import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import Select from 'react-select'
import CustomerTypeSelect from '../customerType/CustomerType.select'
// -----Redux--------
import {useDispatch,useSelector} from 'react-redux'
import {newCustomer,updateCustomer} from './Customer.slice'
import {selectSelectedCustomerType} from '../customerType/CustomerType.slice'

import {NEW,EDIT,MODULE_NAME} from './Customer.constants'
import {AiOutlineClose} from 'react-icons/ai'
import {MdClearAll} from 'react-icons/md'
import {CgPushChevronUpO} from 'react-icons/cg'



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
        height:'95vh',
        top: '1.5vh',
        bottom: '2.5vh',
        left: '32.5vw',
        right: '32.5vw',        
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '5px'
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
    padding-top:5vh;
  `

Modal.setAppElement('#root')

const CustomerModal = ({openModal,setOpenModal,modalMode,modalData,setModalData}) => {
    const [status,setStatus]=useState()
    const statusOption=[
        {
            label:'Active',
            value:true
        },
        {
            label:'In Active',
            value:false
        }
    ]
    const customerType=useSelector(selectSelectedCustomerType)
    const dispatch=useDispatch()
    const {handleSubmit,register,reset}=useForm()
    
    const onSubmit=formData=>{
        console.log('selected Customer Type',customerType)
        formData.active=status
        formData.customer_type=customerType.id
        setOpenModal(false)
        if(modalMode===NEW){
            dispatch(newCustomer(formData))
        }
        else if(modalMode===EDIT){
            dispatch(updateCustomer({id:modalData.id,data:formData}))
            setModalData({})
        }
        
    }

    const onReset=()=>{
        if(modalMode===NEW){
            reset({
                name:'',
                address:'',
                city:'',
                contact_no:null,
                email:'',
                gst_no:'',
                active:''
            })
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
                        label='Name'
                        defaultValue={modalMode===EDIT?modalData.name:''}
                        placeholder='Name'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='address'
                        label='Address'
                        defaultValue={modalMode===NEW?'':modalData.address}
                        placeholder='Address'
                        multiline
                        rows={4}
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='city'
                        label='City'
                        defaultValue={modalMode===NEW?'':modalData.city}
                        placeholder='City'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='contact_no'
                        label='Contact No'
                        defaultValue={modalMode===NEW?'':modalData.contact_no}
                        placeholder='Contact No'
                        size='small'
                        type='number'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='email'
                        label='Email'
                        defaultValue={modalMode===NEW?'':modalData.email}
                        placeholder='email'
                        type='email'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='gst_no'
                        label='Gst Number'
                        defaultValue={modalMode===NEW?'':modalData.gst_no}
                        placeholder='Gst Number'
                        size='small'
                        inputRef={register}
                        style={{width:'30vw',paddingBottom:'1.3vh'}}
                    />                    
                    <CustomerTypeSelect defaultValue={modalData.customer_type}/>
                                       
                    <Select
                        defaultValue={modalData.active===true?statusOption[0]:statusOption[1]}
                        options={statusOption}
                        onChange={data=>setStatus(data.value)}
                    />
                    <Control>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            startIcon={<CgPushChevronUpO/>}
                        >Submit</Button>
                        {
                            modalMode===NEW?
                            <Button
                            variant='contained'
                            color='primary'
                            type='button'
                            startIcon={<MdClearAll/>}
                            onClick={onReset}
                            >Clear</Button>:null
                        }
                        
                        <Button
                            variant='contained'
                            color='secondary'
                            type='button'
                            startIcon={<AiOutlineClose/>}
                            onClick={()=>{
                                setOpenModal(false)
                                setModalData({})
                            }}
                        >Cancel</Button>

                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default CustomerModal
