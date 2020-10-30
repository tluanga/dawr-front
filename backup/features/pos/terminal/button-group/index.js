import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearSelectedCustomer} from '../../../inventory/customer/Customer.slice'
import {clearProductSelected} from '../../../inventory/product/Product.slice'

import {
    selectPosCustomer,
    clearCustomer
} from '../customer-select/posCustomer.slice'
import {
    selectCart,
    clearCart
} from '../pos-cart/cart.slice'

import {createNewSell} from '../invoice.slice'

 
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import PrintIcon from '@material-ui/icons/Print';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PublishIcon from '@material-ui/icons/Publish';





const ButtonGroupStyle=styled.section`
width:71vw;
padding-top:2px;
padding-bottom:2px;   
display:flex;
flex-direction:row ;
justify-content:space-evenly;
/* background-color:red; */
`


const ButtonGroup = () => {
    const customer=useSelector(selectPosCustomer)
    const cart=useSelector(selectCart)

    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearSelectedCustomer())
        dispatch(clearProductSelected())
        dispatch(clearCart())
    }
    const handleSubmit=()=>{
        const newSell={
            // customer:customer.customerid,
            // total:calculateTotal()
            // customer,
            // orderitem:cart
        }
        dispatch(createNewSell(newSell))
        
    }

    return (
        <ButtonGroupStyle>
            <Button
                variant='contained'
                color='primary'
                size='medium'
                startIcon={<PrintIcon/>}
            >Print</Button>
            <Button
                variant='contained'
                color='primary'
                size='medium'
                startIcon={<PublishIcon/>}
                onClick={handleSubmit}
                
            >Submit</Button>
            <Button
                variant='contained'
                color='primary'
                size='medium'
                startIcon={<ClearAllIcon/>}
                onClick={handleClear}
            >Clear</Button>
           </ButtonGroupStyle>
    )
}

export default ButtonGroup



