import React,{useEffect,useState} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {selectCustomerTypeById,updateCustomeType,searchCustomerType} from '../CustomerType.slice'
import {useParams} from 'react-router-dom'
import {useForm, Controller} from 'react-hook-form'



//Material ui
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


import './CustomerTypeDetail.css'

// custom ui-component
import BackButton from '../../../../../app/components/backbutton/BackButton'


function GstDetail() {
    const {id}=useParams()
    
    
    const customerTypeUrlParams={
        url:'customertype',
        searchParam:[
            {
            key:'id__iexact',
            value:id
            },
            
            
        ]
    }
    
    const dispatch = useDispatch() 
    const customerType=useSelector(state=>selectCustomerTypeById(state,id)) 
    const [active, setActive] = useState(customerType?customerType.active:false)
    
    console.log(customerTypeUrlParams)
    useEffect(()=>{
        dispatch(searchCustomerType(customerTypeUrlParams))
    },[])
    


   
    //-------React hook form part
    const {register, handleSubmit,reset,errors} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })

   
    //----Submitting data
    const onSubmit=data=>{
        //--converting the data
        reset(data)
        const payload={
            id:customerType.id,
            name:data.name,
            discount_percentage:data.discount,
            remarks:data.remarks,
            active:active
        }       
        dispatch(updateCustomeType({
            url:customerTypeUrlParams.url,
            id:id,
            data:payload
        }))
        console.clear()
        console.log(payload)
        
    }

    return customerType?(
        <Box className='box'>
          
            <div className='box__header'>
                
                <BackButton 
                    text='Back to Customer Type Dashboard'
                    link='/inventory/customer/customertype'/>
            </div>
            <Paper elevation={3} className='box__paper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='customerType__row'>
                        <TextField
                            name='name'
                            defaultValue={customerType.name}
                            label='Name'
                            variant='outlined'
                            className='customerType__name'
                            width='5vw'
                            inputRef={register}
                        />
                         
                         <TextField
                            name='discount'
                            defaultValue={customerType.discount_percentage}
                            label='Discount'
                            variant='outlined'
                            className='customerType__discount'
                            inputRef={register({
                                required:true,
                                maxLength:{value:2,message:'cannot exceed two digit'}
                            })}
                            
                            
                            error={errors.discount?true:false}
                            helperText={errors?errors.message:''}
                        />
                        
                        
                        
                    </div>
                    <div className='customerType__row'>
                    <FormControl className=''>
                        <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={customerType.active}
                         onChange={()=>setActive(!active)}
                        >
                        
                        <MenuItem value={true}>Active</MenuItem>
                        <MenuItem value={false}>InActive</MenuItem>
                        </Select>
                    </FormControl>
                        <TextField
                            name='remarks'
                            defaultValue={customerType.remarks}
                            label='Remarks'
                            variant='outlined'
                            className='customerType__remarks'
                            inputRef={register}
                        />
                    </div>
                     
                    
                    <div className='customerType__row2'>
                        <Button
                            type='submit'
                            variant='outlined'
                            color='primary'
                            className='row4__button'
                        >Update</Button>
                        <Button
                            type='reset'
                            variant='outlined'
                            color='secondary'
                            className='row4__button'
                            onClick={()=>reset()}
                        >Reset</Button>

                    </div>           
                </form>   
            </Paper>
            
        </Box>
    ):'Loading...'
}

export default GstDetail
