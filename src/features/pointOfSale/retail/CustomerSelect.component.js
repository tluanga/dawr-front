import React,{useState} from 'react'

// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import {selectCustomerList} from '../../../features/inventory/customer/Customer.slice'
import {
    setCustomer,
    selectCustomer,
    setDiscount
} from './CartInfo.slice'
import {selectCustomerTypeList} from '../../inventory/customerType/CustomerType.slice'
// ---Ui
import styled from 'styled-components'
import Select from 'react-select'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const Container=styled.div`
    padding:10px;
    display:flex;
    flex-direction:column;    
    
`
const CustomerSelect = () => {
    // -redux
    const dispatch=useDispatch()
    const customers=useSelector(selectCustomerList)
    const customer=useSelector(selectCustomer)
    const customerTypes=useSelector(selectCustomerTypeList)

    // ---component state
    const [customerType,setCustomerType]=useState()

    return(
        <Container>
                <Card style={{
                    height:'180px',width:'400px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        height:'180px',
                        
                    }}>
                        <Select
                            isClearable
                            options={customers}
                            onChange={data=>{
                                dispatch(setCustomer(data))
                                const _c=customerTypes.find(customerType=>
                                    customerType.id===data.id
                                )
                                dispatch(setDiscount(_c.discount_percentage))
                                setCustomerType(_c)
                            }}
                            
                        />
                        
                        <section>Name:{customer?customer.name:''}</section>
                        <section>Phone:{customer?customer.contact_no:''}</section>
                        <section>
                            Discount Amount:{
                            customerType?customerType.discount_percentage:''

                        }
                        </section>
                    </CardContent>
                   
                </Card>
            </Container>

    )
}

export default CustomerSelect
