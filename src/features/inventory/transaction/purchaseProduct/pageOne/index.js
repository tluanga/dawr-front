import React from 'react'
import Select from 'react-select'
import DateFnsUtils from '@date-io/date-fns';
// -------Redux
import {useSelector,useDispatch} from 'react-redux'
import {selectVendorList} from '../../../vendor/Vendor.slice'
import {selectWarehouseList} from '../../../warehouse/Warehouse.slice'
import {setVendor,setWarehouse, setDate} from '../PurchaseProduct.slice'
// -------Material Ui
import {
    MuiPickersUtilsProvider,
    
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import styled from 'styled-components'



const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
`
const ContainerSection=styled.section`
    display:flex;
    flex-direction:column;
    width:500px;
    height:400px;
    border-color:red;
    justify-content:center;
    align-items:center;
`
const Form =styled.form`
    display:flex;
    flex-direction:column;
    width:400px;
    height:300px;
    justify-content:space-around;
    
`

const PurchaseProductPageOne = ({
    showPageOne,setShowPageOne,setShowPageTwo
}) => {
    const dispatch=useDispatch()
    const vendor=useSelector(selectVendorList)
    const warehouse=useSelector(selectWarehouseList)

    const [selectedDate, setSelectedDate] = React.useState()
            

    const handleDateChange = (date) => {
        setSelectedDate(date);
  };
    
   
    return (
        <>
        {showPageOne?
        <Wrapper>
        <Paper elevation={10}>
            <ContainerSection>
                <h1>Purchase Product</h1>
                <Form>
                    <Select
                        name='vendor'
                        options={vendor}
                        placeholder='Select Vendor...'
                        isClearable
                        isSearchable
                        onChange={data=>dispatch(setVendor(data))}
                    />
                    <Select
                        name='warehouse'
                        options={warehouse}
                        placeholder='Select Warehouse...'
                        isClearable
                        isSearchable
                        onChange={data=>dispatch(setWarehouse(data))}
                    />
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={data=>dispatch(setDate(data))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={()=>{
                            setShowPageOne(false)
                            setShowPageTwo(true)
                        }}
                    >Submit</Button>

                </Form>
                    
                    </ContainerSection>
                </Paper>
            </Wrapper>


        :null
        }
        </>
        
    )
}

export default PurchaseProductPageOne
