aimport React,{useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import SelectOriginal from 'react-select'
// -----Redux--------
import {useDispatch,useSelector} from 'react-redux'
import {newProduct} from './Product.slice'
import {selectCategoryList} from 
    '../../../../../category/Category.slice'
import {selectManufacturerList} from 
    '../../../../../manufacturer/Manufacturer.slice'
import {selectGstCodeList} from 
    '../../../../../gstCode/GstCode.slice'
import {selectUnitOfMeasurementList} from 
    '../../../../../unitOfMeasurement/UnitOfMeasurement.slice'

import {
    OPEN, CLOSE,
    selectProductModalData,
    setProductModalData,
    selectProductModalOpen,
    setProductModalOpen

} from './ProductModal.slice'


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
        height:'750px',
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

const ProductModal = () => {
    //------Redux---------
    const dispatch=useDispatch()
    const modalState=useSelector(selectProductModalOpen)
    const categoryOptions=useSelector(selectCategoryList)
    const manufacturerOptions=useSelector(selectManufacturerList)
    const gstCodeOptions=useSelector(selectGstCodeList) 
    const unitOfMeasurementOptions=useSelector(selectUnitOfMeasurementList)
    
    const [category,setCategory]=useState()
    const [manufacturer,setManufacturer]=useState()
    const [gstCode,setGstCode]=useState()
    const [unitOfMeasurement,selectUnitOfMeasurement]=useState()
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
    
    //------------React Hook Form-----------
    const {register,handleSubmit} =useForm()
    const onSubmit=formData=>{
        // console.log('formDaata',formData)
        // formData.active=status
        // const payload={
        //     label:formData.name,
        //     name:formData.name,
        //     serial_no:formData.serialNo,
        //     model:formData.model,
        //     category:category,
        //     manufacturer:manufacturer,
        //     gst_code:gstCode,
        //     unit_of_measurement:unitOfMeasurement,
        //     remarks:formData.remarks,
        //     active:status,
        // }
        // setOpenModal(false)
        // console.log('modal Mode',modalMode)
        // if(modalMode===NEW){
        //     console.log('payload is',payload)
        //     dispatch(newProduct(payload))
        // }
        // else if(modalMode===EDIT){
            
        //     dispatch(updateProduct({id:modalData.id,data:payload}))
        //     setModalData(modalData.category)
        // }
        
    }
    
    return(
        <Modal
            isOpen={modalState}
            onRequestClose={()=>dispatch(setProductModalOpen(CLOSE))}
            shouldCloseOnOverlayClick={false}
            style={customStyles}
        >   
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant='outlined'
                        name='name'
                        label='Name'                        
                        placeholder='Name'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='serialNo'
                        label='Serial No'                        
                        placeholder='Serial No'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='model'
                        label='Model'                        
                        placeholder='Model'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <Select
                        isClearable
                        placeholder='Category'
                        options={categoryOptions}
                        onChange={data=>{
                            if(data){
                                setCategory(data.id)
                            }
                            
                        }}
                    />
                    <Select
                        isClearable
                        placeholder='Manufacturer'
                        options={manufacturerOptions}
                        onChange={data=>setManufacturer(data.id)}
                    />
                    <Select
                        options={gstCodeOptions}
                        placeholder='HSN Code'
                        onChange={data=>{setGstCode(data.id)}
                    }


                    />
                    <Select
                        placeholder='Unit of Measurement'
                        options={unitOfMeasurementOptions}
                        onChange={data=>selectUnitOfMeasurement(data.id)}
                    />
                    
                    <TextField
                        variant='outlined'
                        name='costPrice'
                        label='Cost Price'                    
                        placeholder='Cost Price'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='sellingPrice'
                        label='Selling Price'
                        placeholder='Selling Price'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <TextField
                        variant='outlined'
                        name='mrp'
                        label='Mrp'                        
                        placeholder='Mrp'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                   
                    <TextField
                        variant='outlined'
                        name='remarks'
                        label='Remarks'                                              
                        placeholder='Remarks'
                        size='small'
                        inputRef={register}
                        style={{width:'400px',paddingBottom:'1.3vh'}}
                    />
                    <Select
                        defaultValue={statusOption[0]}
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
                        <Button
                            variant='contained'
                            color='primary'
                            type='button'
                            startIcon={<MdClearAll/>}
                            >Clear
                        </Button>
                    
                        
                        <Button
                            variant='contained'
                            color='secondary'
                            type='button'
                            startIcon={<AiOutlineClose/>}
                            onClick={()=>{
                                setProductModalOpen(CLOSE)
                                setProductModalData({})
                            }}
                        >Cancel</Button>

                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default ProductModal
