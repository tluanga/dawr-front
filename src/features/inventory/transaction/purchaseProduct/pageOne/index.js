import React,{useState} from 'react'
import Select from 'react-select'
import DateFnsUtils from '@date-io/date-fns';
// -------Redux
import {useSelector} from 'react-redux'
import {selectVendorList} from '../../../vendor/Vendor.slice'
import {selectWarehouseList} from '../../../warehouse/Warehouse.slice'
// -------Material Ui
import {
    MuiPickersUtilsProvider,
    
    KeyboardDatePicker,
  } from '@material-ui/pickers';


import styled from 'styled-components'



const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ContainerSection=styled.section`
    display:flex;
    flex-direction:column;
    width:500px;
    height:600px;
    border-color:red;
`
const Form =styled.form`
    display:flex;
    flex-direction:column;
    width:400px;
`

const PurchaseProductPageOne = () => {
    const [selectedVendor,setSelectedVendor]=useState()
    const vendor=useSelector(selectVendorList)
    const warehouse=useSelector(selectWarehouseList)

    const [selectedDate, setSelectedDate] = React.useState(
            new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
  };

 
    return (
        <Wrapper>
            <ContainerSection>
                <Form>
                    <Select
                        name='vendor'
                        options={vendor}
                        placeholder='Select Vendor...'
                        isClearable
                        isSearchable
                    />
                    <Select
                        name='warehouse'
                        options={warehouse}
                        placeholder='Select Warehouse...'
                        isClearable
                        isSearchable
                    />
                    <Select
                        name='date'
                        options={vendor}
                        placeholder='Select Date...'
                        isClearable
                        isSearchable
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                    

                </Form>
            </ContainerSection>
        </Wrapper>
    )
}

export default PurchaseProductPageOne
