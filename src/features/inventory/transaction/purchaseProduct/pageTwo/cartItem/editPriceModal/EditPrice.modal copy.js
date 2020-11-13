import React,{useEffect} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
// -----Redux--------
import {useSelector,useDispatch} from 'react-redux'
import {
    selectCartItemProduct
} from '../cartItem.slice'

import {
    selectCostPrices,
    newCostPrice
} from '../../../../../product/ProductCostPrice.slice'
import {
    selectSellingPrices,
    newSellingPrice
    
} from '../../../../../product/ProductSellingPrice.slice'
import {
    selectMrp,
    newMrp
} from '../../../../../product/ProductMrp.slice'

import {
    setEditPriceModalOpen,
    selectEditPriceModalOpen,
    setEditPriceModalData,
    selectEditPriceModalData
} from './EditPrice.slice' 

import {AiOutlineClose} from 'react-icons/ai'
import {MdClearAll} from 'react-icons/md'
import {CgPushChevronUpO} from 'react-icons/cg'
import {customStyles,Wrapper,
    Form, Control
} from './EditPrice.style'
import { CLOSE } from '../ProductModal/ProductModal.slice';



Modal.setAppElement('#root')
const EditPriceModal = () => {
    // ------Redux
    const dispatch=useDispatch()
    const product=useSelector(selectCartItemProduct)
    const costPrices=useSelector(selectCostPrices)
    const sellingPrices=useSelector(selectSellingPrices)
    const mrps=useSelector(selectMrp)
    

    //--selector------ui
    const modalOpen=useSelector(selectEditPriceModalOpen)

    // ----React hook form
    const {handleSubmit,register,reset}=useForm()    
    const onSubmit=formData=>{  
        // console.log('formdata',formData)
        // dispatch(setCurrentCostPrice({
        //     cost_price:formData.costPrice,
        //     product:modalData.product.id
        //     }))
        // dispatch(setOpenPriceEditModal(false))
    }

    return(       
        <Modal
            isOpen={true}
            onRequestClose={()=>dispatch(setEditPriceModalOpen(CLOSE))}
            style={customStyles}
        >
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* <h3>Edit-{product.name}-Prices</h3>                     */}
                    {/* {/* <TextField
                        variant='outlined'
                        name='costPrice'
                        label='Cost Price'                            
                        placeholder='Cost Price'
                        value={()=>{
                           const costprice=costPrices.map(c=>{
                               if(c.product===product.id){
                                    return c
                               }
                            })
                            return costprice.cost_price
                        }}
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    /> */}
                    {/* <TextField
                        variant='outlined'
                        name='sellingPrice'
                        label='Selling Price'                            
                        placeholder='Selling Price'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />
                    <TextField
                        variant='outlined'
                        name='sellingPriceBulk'
                        label='Selling Price Bulk'                            
                        placeholder='Selling Price(Bulk)'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />  */}
                    {/* <TextField
                        variant='outlined'
                        name='mrp'
                        label='Mrp'                            
                        placeholder='Mrp'
                        inputRef={register}
                        style={{width:'200px',paddingBottom:'1.3vh'}}
                        size='small'
                    />                     */}
                    
                    
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
                       
                        
                        {/* <Button
                            variant='contained'
                            color='secondary'
                            type='button'
                            startIcon={<AiOutlineClose/>}
                            onClick={()=>dispatch(setEditPriceModalOpen(CLOSE))}
                            >
                            Cancel</Button> */}

                    </Control>
                </Form>                
            </Wrapper>
            
        </Modal>
        
    )
}

export default EditPriceModal
