import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
// -----Redux--------
import {useSelector,useDispatch} from 'react-redux'
import {updateProduct} from '../../../product/Product.slice'
import {
    selectCostPrices,
    fetchCurrentCostPrice
} from '../../../product/ProductCostPrice.slice'
import {
    selectSellingPrices,
    fetchCurrentSellPrice
} from '../../../product/ProductSellingPrice.slice'
import {
    selectMrp,
    fetchCurrentMrp
} from '../../../product/ProductMrp.slice'

import {
    selectOpenPriceEditModal,
    selectPriceEditModalData,
    setOpenPriceEditModal
} from './CartUi.slice' 

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
        height:'400px',
        top: '22.5vh',
        bottom: '22.5vh',
        left: '35vw',
        right: '35vw',        
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
    justify-content:center;
    align-items:center;
  `
const Control=styled.section`
    display:flex;
    width:380px;
    flex-direction:row;
    justify-content:space-between;
    padding-top:5vh;
  `

Modal.setAppElement('#root')

const EditPriceModal = () => {
    // ------Redux
    const dispatch=useDispatch()
    const openPriceEditModal=useSelector(selectOpenPriceEditModal)
    const priceEditModalData=useSelector(
        selectPriceEditModalData
    )
    


    console.log('price edit modal data-->>',priceEditModalData)
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
    
    const {handleSubmit,register,reset}=useForm()
    
    const onSubmit=formData=>{
        formData.active=status
        setOpenPriceEditModal(false)
       
        
    }

    const onReset=()=>{
        
    }
    return(       
        <Modal
            isOpen={openPriceEditModal}
            onRequestClose={()=>setOpenPriceEditModal(false)}
            style={customStyles}
        >
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h3>EDIT PRICE</h3>
                    <section><h3>Cooler</h3></section>
                    <TextField
                        variant='outlined'
                        name='costprice'
                        label='New Cost Price'                            
                        placeholder='New Cost Price'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='sellingprice'
                        label='New Selling Price'                            
                        placeholder='New Selling Price'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='sellingPriceBulk'
                        label='New Selling Price Bulk'                            
                        placeholder='New Selling Price(Bulk)'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='mrp'
                        label='New Mrp'                            
                        placeholder='New Mrp'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
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
                            onClick={onReset}
                            >Clear
                        </Button>
                       
                        
                        <Button
                            variant='contained'
                            color='secondary'
                            type='button'
                            startIcon={<AiOutlineClose/>}
                            onClick={()=>dispatch(setOpenPriceEditModal(false))}
                            >
                            Cancel</Button>

                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default EditPriceModal
