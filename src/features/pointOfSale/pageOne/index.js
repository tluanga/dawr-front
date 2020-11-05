import React,{useState} from 'react'
import Select from 'react-select'
import DateFnsUtils from '@date-io/date-fns';
// -------Redux
import {useSelector,useDispatch} from 'react-redux'
import {selectVendorList} from '../../inventory/vendor/Vendor.slice'
import {selectWarehouseList} from '../../inventory/warehouse/Warehouse.slice'
import {setVendor,setWarehouse, setDate} from './PurchaseProductInfo.slice'
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
    // ---------Redux-----------
    const dispatch=useDispatch()
    const vendor=useSelector(selectVendorList)
    const warehouse=useSelector(selectWarehouseList)

    //-------component state
    const [mode,setMode]=useState()

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
                <h1>Point of Sale Terminal</h1>
                <Form>
                    <Select
                        options={vendor}
                        placeholder='Select Vendor...'
                        isClearable
                        isSearchable
                        onChange={data=>dispatch(setVendor(data))}
                    />
                    <Select
                        options={warehouse}
                        placeholder='Select Warehouse...'
                        isClearable
                        isSearchable
                        onChange={data=>dispatch(setWarehouse(data))}
                    />
                    <Button>Retail</Button>
                    
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
