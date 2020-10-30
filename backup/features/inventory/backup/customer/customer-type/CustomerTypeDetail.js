import React,{useState} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {selectCustomerTypeById,
        selectCustomerType,
        updateCustomeType,
        searchCustomerType,
        createCustomerType,
        selectedCustomerType    
    } from './CustomerType.slice'
import {useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'



//Material ui
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


import './CustomerTypeDetail.css'
const NEW='NEW'
const EDIT='EDIT'




function GstDetail() {
    
    
    // const customerTypeUrlParams={
    //     url:'customertype',
    //     searchParam:[
    //         {
    //         key:'id__iexact',
    //         value:1
    //         },
            
            
    //     ]
    // }
    const [mode,setMode]=useState(NEW)
    
    
    // const dispatch = useDispatch() 
    const selectedCustomerType={name:'Electrician',dicount:5,remarks:'test',active:true}
    // const [active, setActive] = useState(mode===EDIT?selectedCustomerType.active:false)
    // selectedCustomerType?setMode(EDIT):setMode(NEW)
    
    // const customerType=useSelector(state=>selectCustomerTypeById(state,id))
    // const customerTypes=useSelector(searchCustomerType) 
    const [active, setActive] = useState(mode===EDIT?true:false)



   
    //-------React hook form part
    const {register, handleSubmit,reset,errors} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })

   
    //----Submitting data
    const onSubmit=data=>{
        //--converting the data
        reset(data)
        // const payload={
        //     id:customerTypes.length+1,
        //     name:data.name,
        //     discount_percentage:data.discount,
        //     remarks:data.remarks?data.remarks:data.name,
        //     active:active
        // }
        // if(mode===NEW){
            
        //     console.log('CREATING NEW CUSTOMER TYPE')
        //     console.log(payload)
        //     dispatch(createCustomerType({url:customerTypeUrlParams.url,payload}))
        // }else if(mode===EDIT){
        //     dispatch(updateCustomeType({
        //         url:customerTypeUrlParams.url,
        //         id:id,
        //         data:payload
        //     }))
        // }       
        
       
        console.log(data)
        
    }
    return(
        <Box className='box'>
            <Paper elevation={3} className='box__paper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {mode===NEW?<h3>New Customer Type</h3>:
                        <h3>Edit Customer Type</h3>
                    }
                    
                    <div className='customerType__row'>
                        <TextField
                            name='name'
                            defaultValue={mode===NEW?'':selectedCustomerType.name}
                            label='Name'
                            variant='outlined'
                            className='customerType__name'
                            width='5vw'
                            inputRef={register}
                        />
                        <TextField
                            name='discount'
                            defaultValue={mode===NEW?0.0:selectedCustomerType.discount_percentage}
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

                        <FormControl className='customerType__select'>
                            <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={mode===NEW?true:selectedCustomerType.active}
                            onChange={()=>setActive(!active)}
                            >
                            
                            <MenuItem value={true}>Active</MenuItem>
                            <MenuItem value={false}>InActive</MenuItem>
                            </Select>
                        </FormControl>
                    
                        <TextField
                            name='remarks'
                            defaultValue={mode===NEW?'':selectedCustomerType.remarks}
                            label='Remarks'
                            variant='outlined'
                            className='customerType__remarks'
                            row={3}
                            multiline
                            inputRef={register}
                        />
                        
                    
                    <div className='.customerType__button'>
                        {mode===NEW?
                            <Button
                            type='submit'
                            variant='outlined'
                            color='primary'
                            className='row4__button'
                            >Create New</Button>
                            :
                            <Button
                            type='submit'
                            variant='outlined'
                            color='primary'
                            className='row4__button'
                            >Update</Button>
                        }
                        
                        <Button
                            type='reset'
                            variant='outlined'
                            color='secondary'
                            className='row4__button'
                            onClick={()=>reset()}
                        >Reset</Button>

                    </div>           
                    </div>
                </form>   
            </Paper>            
        </Box>
    )
}

export default GstDetail
