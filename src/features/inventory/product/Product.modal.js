import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import SelectOriginal from 'react-select'
// -----Redux--------
import {useDispatch,useSelector} from 'react-redux'
import {newProduct,updateProduct} from './Product.slice'
import {selectCategoryList} from '../category/Category.slice'
import {selectManufacturerList} from '../manufacturer/Manufacturer.slice'
import {selectGstCodeList} from '../gstCode/GstCode.slice'
import {selectUnitOfMeasurementList} from '../unitOfMeasurement/UnitOfMeasurement.slice'

import {NEW,EDIT,MODULE_NAME} from './Product.constants'
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
        width:'450px',
        height:'550px',
        top: '1vh',
        bottom: '15vh',
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

const Select=styled(SelectOriginal)`
    padding-bottom:1.3vh;
`

Modal.setAppElement('#root')

const ProductModal = ({openModal,setOpenModal,modalMode,modalData,setModalData}) => {
    
    const [category,setCategory]=useState(modalData.category?modalData.category:0)
    const [manufacturer,setManufacturer]=useState(modalData.manufacturer)
    const [gstCode,setGstCode]=useState(modalData.gst_code)
    const [unitOfMeasurement,selectUnitOfMeasurement]=useState(modalData.unit_of_measurement)
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
     
    useEffect(()=>{
        if(modalData)
            setCategory(modalData.category)
            setManufacturer(modalData.manufacturer)
            setGstCode(modalData.gst_code)
            selectUnitOfMeasurement(modalData.unit_of_measurement)
    },[modalData])
  
    // -------Redux
    const dispatch=useDispatch()
    
    const categoryOptions=useSelector(selectCategoryList)
    const manufacturerOptions=useSelector(selectManufacturerList)
    const gstCodeOptions=useSelector(selectGstCodeList)
    const unitOfMeasurementOptions=useSelector(selectUnitOfMeasurementList)
    const {handleSubmit,register,reset}=useForm()
    
    const onSubmit=formData=>{
        console.log('category-->',category.id, manufacturer.id,gstCode.id,unitOfMeasurement.id)
        formData.active=status
        setOpenModal(false)
        if(modalMode===NEW){
            dispatch(newProduct(formData))
        }
        else if(modalMode===EDIT){
            
            dispatch(updateProduct({
                name:formData.name,
                mode:formData.model,
                category:category,
                manufacturer:manufacturer,
                gst_code:gstCode,
                unit_of_measurement:unitOfMeasurement,
                remarks:formData.remarks,
                active:status,

            }))
            setModalData(modalData.category)
        }
        
    }
    
    
    const onReset=()=>{
        if(modalMode===NEW){
            reset({
                name:'',
                address:'',
                mobile:null,
                email:'',
                pincode:null,
                gst_no:'',
                remarks:'',
                active:''
            })
        }        
        
    }

   
 

    return(modalData?
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
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='model'
                        label='Model'
                        defaultValue={modalMode===NEW?'':modalData.model}
                        placeholder='Model'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <Select
                        isClearable
                        placeholder='Category'
                        options={categoryOptions}
                        defaultValue={
                            modalData.category?
                            categoryOptions[modalData.category.id-1]:''}
                        onChange={data=>setCategory(data)}
                    />
                    <Select
                        name='manufacturer'
                        isClearable
                        placeholder='Manufacturer'
                        options={manufacturerOptions}
                        defaultValue={
                            modalData.manufacturer?
                            manufacturerOptions[
                                modalData.manufacturer.id-1]:''}
                        onChange={data=>setManufacturer(data)}
                    />
                    <Select
                        name='gstCode'
                        options={gstCodeOptions}
                        placeholder='HSN Code'
                        defaultValue={
                            modalData.gst_code?
                            gstCodeOptions[
                                modalData.gst_code.id-1]:''}
                        onChange={data=>setGstCode(data)}


                    />
                    <Select
                        name='unitOfMeasurement'
                        placeholder='Unit of Measurement'
                        options={unitOfMeasurementOptions}
                        defaultValue={
                            modalData.unit_of_measurement?
                            unitOfMeasurementOptions[
                                modalData.unit_of_measurement.id-1
                            ]:''
                        }
                        onChange={data=>selectUnitOfMeasurement(data)}
                    />
                   
                    <TextField
                        variant='outlined'
                        name='remarks'
                        label='Remarks'
                        defaultValue={modalMode===NEW?'':modalData.remarks}                        
                        placeholder='Remarks'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <Select
                        defaultValue={
                            modalData.active===true?statusOption[0]:statusOption[1]}
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
            
        </Modal>:null
        
    )
}

export default ProductModal
