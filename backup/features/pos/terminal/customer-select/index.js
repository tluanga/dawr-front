import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setCustomer,selectPosCustomer} from './posCustomer.slice'


import {selectedCustomerSelector} from '../../../inventory/customer/Customer.slice'
import styled from 'styled-components'
import CustomerSelect from '../../../inventory/customer/Customer.select'

import Paper from '@material-ui/core/Paper'

const CustomerSelectSection=styled.section`
    width:350px;
    height:160px;
    padding-top:5px;
`
const Text=styled.p`
    padding-bottom:2px;
`
const TextLabel=styled.strong`
    color:green;
`

const CustomerSelectBox = () => {
    const dispatch=useDispatch()
    const customerSelect=useSelector(selectedCustomerSelector)
    if(customerSelect) dispatch(setCustomer(customerSelect))

    return (
        <CustomerSelectSection>
            <Paper elevation={3}>
                <CustomerSelect/>
                <Text>
                    <TextLabel>Name:</TextLabel>
                    {customerSelect?customerSelect.name:''}
                </Text>
                <Text>
                    <TextLabel>Customer Type:</TextLabel>
                    {customerSelect?customerSelect.customer_type:''}
                </Text>
                <Text>
                    <TextLabel>Discount Percentage:</TextLabel>
                    {customerSelect?customerSelect.discount_percentage:''}
                </Text>
            </Paper> 
                    
        </CustomerSelectSection>
    )
}

export default CustomerSelectBox
