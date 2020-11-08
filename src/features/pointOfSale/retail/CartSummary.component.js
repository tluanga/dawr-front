import React,{useState,useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import {ComponentToPrint} from './invoice.component'
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
import Button from '@material-ui/core/Button'


const Container=styled.div`
    padding:10px;
    display:flex;
    flex-direction:row;  
    justify-content:center;  
       
`

const Control=styled.div`
    width:30vw;
    height:35px;
    display:flex;
    justify-content:space-between ;
    align-items:center;
`

const Summary=styled.div`
    background-color:white;
    width:20vw;
`
const Text=styled.div`
    font-size:14px;
    font-weight:bold;
    padding-bottom:9px;
   
`

const CustomerSelect = () => {
    // -redux
    const dispatch=useDispatch()
    const customers=useSelector(selectCustomerList)
    const customer=useSelector(selectCustomer)
    const customerTypes=useSelector(selectCustomerTypeList)

    //print invoice
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    // ---component state
    const [customerType,setCustomerType]=useState()

    return(
        <Container>
                <Card style={{
                    height:'100px',width:'75vw'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        height:'100px',
                        paddingTop:'2px',
                        
                    }}> 
                        <div style={{ display: "none" }}>
                            <ComponentToPrint ref={componentRef} />
                        </div>
                        <Control>
                            <Button
                                color='primary'
                                variant='contained'
                                style={{width:'180px'}}
                                onClick={handlePrint}
                            >
                                Print Invoice
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                style={{width:'180px'}}
                            >
                                Submit
                            </Button><Button
                                color='secondary'
                                variant='contained'
                                style={{width:'180px'}}
                            >
                                Clear
                            </Button>
                        </Control>
                        <Summary>
                            <Text>Amount:{customer?customer.name:''}</Text>
                            <Text>Total Tax(+):</Text>
                            <Text>Discount(-):</Text>
                            <Text>Grand Total:</Text>
                        </Summary>                        
                    </CardContent>
                   
                </Card>
            </Container>

    )
}

export default CustomerSelect
