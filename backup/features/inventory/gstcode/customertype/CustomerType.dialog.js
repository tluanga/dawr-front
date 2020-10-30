import React,{useState} from 'react';
import {useForm} from 'react-hook-form' ;
import {useDispatch,useSelector} from 'react-redux';
import {TITLE,NEW,EDIT} from './CustomerType.constants';


// ---Material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import TextField from '@material-ui/core/TextField'


import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {createCustomerType as create, 
  updateCustomerType as update,
  setDialog,dialogSelector
} from './CustomerType.slice'
//For Dialog Confirmation
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import styled from 'styled-components' ;

const DialogFieldContainer=styled.div`
  display:flex;
  flex-direction:column;
  height:60vh;
  padding:40px;
`
const DialogRow1=styled.div`
  display:flex;
  justify-items:center;  
  padding-bottom:50px;
  justify-content:space-between;
  padding-left:25vw;
  padding-right:22vw;
   
`
const DialogRow2=styled.div`
  display:flex;  
  justify-content:space-between; 
  padding-bottom:50px;
  padding-left:25vw;
  padding-right:22vw;
  
    
`
const TextNumber=styled(TextField)`
  width:200px;
`
const TextString=styled(TextField)`
  width:400px;
`
const TextBox=styled(TextField)`
  width:400px;
`
const SelectBox=styled(FormControl)`
  width:200px;
`
const DialogButton=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-left:40vw;
  padding-right:40vw;
  
`

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  name:{
    width:'400px',
    padding:'20px'
  },
  discount:{
    width:'200px'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// -> Inorder to use the Dialog, we have to spass the name , isButtonEnabled and OpenParam

export default function FullScreenDialog({isButtonEnabled=false}) {
  const customerTypeDialog=useSelector(dialogSelector)
  const [payload,setPayload]=useState({})
  const [active, setActive] = useState(true)

  const classes = useStyles();
  const [open, setOpen] = React.useState(!isButtonEnabled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setDialog({open:false}))
  };


  
  const saveData=payload=>{
    console.log('saving the data',payload)
    customerTypeDialog.mode===NEW?
    dispatch(create(payload)):
    dispatch(update(payload))

  }
  //---warning Dialog
  const [warningOpen,setWarningOpen]=React.useState(false)
  const handleWarningOpen = () =>setWarningOpen(true)
  const handleWarningClose = () =>setWarningOpen(false)
  const handleDecline=()=>{
    setWarningOpen(false)
    handleClose()
  }
  const handleAgree=()=>{
    setWarningOpen(false)
    saveData(payload)
    handleClose()
  }
  
  

  const dispatch=useDispatch() 
  // react-hook form
  
  const {handleSubmit,register,errors,watch, getValues}=useForm()
  const onSubmit=data=>{
    //--warning will be displayed to get the response from the user
    const payload={
      id:customerTypeDialog.data.id?customerTypeDialog.data.id:null,
      name:data.name,
      discount_percentage:data.discount_percentage,      
      remarks:data.remarks,
      active:active
    }
    console.log('the payload is',payload)
    setPayload(payload)
    handleWarningOpen(payload)    
  }
  const watchGstRate=watch([
    'sgst','cgst'
  ])
  if(watchGstRate){
    console.log(getValues('sgst'))
  }

  return (
    <div>
      {isButtonEnabled?
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          New CustomerType
      </Button>: ''
      }
      {open?
      <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          {customerTypeDialog.mode===NEW?
            <Typography variant="h6" className={classes.title}>
              New {TITLE}
            </Typography>:
             <Typography variant="h6" className={classes.title}>
             EDIT {TITLE}
           </Typography>          
          }
                      
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
      <DialogFieldContainer>
        <DialogRow1>            
          <TextString
            name='name' 
            type='text'              
            variant='outlined'
            label='Name'
            size='small'
            defaultValue={customerTypeDialog.data?customerTypeDialog.data.name:'Blank'}
            error={!!errors.name}
            helperText={!!errors.name?'Name is required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          />
          <TextNumber
            name='discount_percentage' 
            type='text'              
            variant='outlined'
            label='Discount Percentage'
            size='small'
            defaultValue={customerTypeDialog.data?customerTypeDialog.data.discount_percentage:'Blank'}
            error={!!errors.abbreviation}
            helperText={!!errors.abbreviation?'Abbreviationis required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          />
             
        </DialogRow1>
        <DialogRow2>
            
            <TextBox
              name='remarks'
              defaultValue={customerTypeDialog.data?customerTypeDialog.data.remarks:'Remarks..'}
              variant='outlined'
              label='Remarks'
              size='small'
              multiline
              rows={5}
              inputRef={register({
                maxLength:200
              })}
            /> 
            
            <SelectBox>
              <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                    id="demo-simple-select"                        
                    onChange={()=>customerTypeDialog.mode===EDIT?
                      setActive(!customerTypeDialog.data.active):MenuItem.value
                        
                    }
                    defaultValue={customerTypeDialog.mode===NEW?customerTypeDialog.data.active:true}>
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>InActive</MenuItem>
                </Select>
            </SelectBox>             
             
        </DialogRow2>        
        <DialogButton>
          <Button
            type='submit'
            variant='outlined'
            color='primary'            
          >Submit</Button>
          <Button
            variant='outlined'
            color='secondary'
            >Reset</Button>
          </DialogButton>
        </DialogFieldContainer>
        
      </form>
    </Dialog>
    <Dialog
      open={warningOpen}
      onClose={handleWarningClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <h3>Do you want to save</h3>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgree} color="primary" autoFocus>
          Yes
        </Button>
        <Button onClick={handleDecline} color="primary">
          No
        </Button>        
      </DialogActions>
    </Dialog>
    
    </div>:''


      }
      
      
    </div>
  );
}