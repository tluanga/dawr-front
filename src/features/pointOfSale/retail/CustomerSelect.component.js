import React from 'react'

// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import {selectCustomerList} from '../../../features/inventory/customer/Customer.slice'

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
    const customers=useSelector(selectCustomerList)

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
                        <Select/>
                        
                        <section>Name:</section>
                        <section>Phone:</section>
                        <section>Discount Amount:</section>
                    </CardContent>
                   
                </Card>
            </Container>

    )
}

export default CustomerSelect
