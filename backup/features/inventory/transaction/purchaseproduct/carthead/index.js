import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addCartHead} from './CartHeadSlice'
import Select from 'react-select';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AsyncSelect from 'react-select/async'
import {colourStyles} from './selectColourStyle'

import './CartHead.css'
import {searchSupplier,searchWarehouse} from '../../../../../api/search.select.api'

const paymentStatusOptions = [
    { value: 'PAID', label: 'Paid' },
    { value: 'CREDIT', label: 'Credit' },
    {value:'PARTIALPAYMENT',label:'Partial Payment'}
  ]


const CartHead=()=>{
    const [id,setId]=useState(10)
    const [supplier,setSupplier] =useState()
    const [warehouse,setWarehouse]=useState()
    const [date,setDate]=useState()
    const [billno,setBillNo]=useState()
    const [paymentStatus,setPaymentStatus]=useState()
    const [remarks,setRemarks]=useState()

    const dispatch=useDispatch()
    //------React Async Select
    const SupplierOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(searchSupplier(inputValue));
            }, 1000);
    });
    //------React Async Select
    const WareHouseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(searchWarehouse(inputValue));
            }, 1000);
    });

    const {register,handleSubmit} =useForm()
    const history=useHistory()
    const onSubmit=data=>{
        const payload={
            id,
            supplier,
            warehouse,
            date,
            billno:data.billno,
            remarks:data.remarks,
            paymentStatus
        }
        console.log(payload)
        dispatch(addCartHead(payload))
        history.push('/inventory/transaction/purchaseproduct/cart')
       
    }

    return(
        <div className='block'>
            <div className='block__container'>
                <div className='block__header'>
                    Please Fill the form to proceed to next step
                </div>
                <form class_name='block__form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__body'>
                        <AsyncSelect 
                            cacheOptions
                            placeholder='Select Supplier...'
                            defaultOptions
                            loadOptions={SupplierOptions}
                            className='form__item'
                            onChange={data=>setSupplier(data.value)}
                        />
                        <AsyncSelect 
                            cacheOptions
                            placeholder='Select Warehouse...'
                            defaultOptions
                            loadOptions={WareHouseOptions}
                            className='form__item'
                            onChange={data=>setWarehouse(data.value)}
                        />
                        <TextField
                            name='billno'
                            variant='outlined'
                            label='Bill No'                    
                            height='5px'
                            inputRef={register}
                            size='small'
                            onChange={e=>setBillNo(e.target.value)}
                            className='form__item'
                        />
                        <TextField
                                name='date' 
                                type='date'                                        
                                inputRef={register}
                                className='form__item'
                                variant='outlined'
                                onChange={e=>setDate(e.target.value)}
                        />
                    
                        <Select
                            placeholder='Payment Status..'
                            isSearchable={false}
                            className='form__item'
                            options={paymentStatusOptions}
                            onChange={data=>setPaymentStatus(data)}
                            // styles={colourStyles}
                        />

                    </div>
                    <div className='form__Button'>
                        <Button type='submit' variant='outlined' color='primary'>
                            Submit
                        </Button>
                        <Button variant='outlined' color='secondary'>
                            Clear
                        </Button>

                    </div>

                </form>
            </div>
           
           
        </div>
    )
}

export default CartHead
