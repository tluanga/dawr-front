import React,{useState} from 'react';
import {useForm} from 'react-hook-form' ;
import {useDispatch,useSelector} from 'react-redux';
import {changeGSTCodeDialogState,gstCodeDialogStateSelector} from './dialog.store'
import {createCategory} from '../../../features/inventory/category/categories/CategoriesSlice'



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

//For Dialog Confirmation
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import './dialog.css'



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
  const gstCode=useSelector(gstCodeDialogStateSelector)
  console.log('Inside GstDialog',gstCode)
  const classes = useStyles();
  const [open, setOpen] = React.useState(!isButtonEnabled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(changeGSTCodeDialogState())
  };

  const [active, setActive] = useState(true)

  
  const [warningOpen,setWarningOpen]=React.useState(false)
  const handleWarningOpen = () =>setWarningOpen(true)
  const handleWarningClose = () =>setWarningOpen(false)
  const handleDecline=()=>{
    setWarningOpen(false)
    handleClose()
  }
  const handleAgree=()=>{
    setWarningOpen(false)
  }
  

  const dispatch=useDispatch()
  const url='category'
  // react-hook form
  
  const {handleSubmit,register,reset,errors}=useForm()
  const onSubmit=data=>{
    dispatch(createCategory({url,data}))
    //--warning will be displayed to get the response from the user
    handleWarningOpen()
    reset()//reset the form    
  }

  return (
    <div>
      {isButtonEnabled?
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          New Customer Type
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
          <Typography variant="h6" className={classes.title}>
            New Customer Type
          </Typography>            
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='dialog__container'>
          <div className='row1'>
            <TextField
              name='Code'
              className={classes.name}
              placeholder={gstCode.data?gstCode.data.code:'Blank'}
              variant='outlined'
              label='Name'
              size='small'
              defaultValue={gstCode.data?gstCode.data.code:'Blank'}
              error={!!errors.name}
              helperText={!!errors.name?'Name is required':''}
              inputRef={register({
              required:true,
                maxLength:100
              })}              
            /> 
            <TextField
              name='discount_percentage'
              className={classes.discount}
              variant='outlined'
              label='Discount Percentage'
              size='small'
              inputRef={register({
                maxLength:200
              })}
            /> 
            <FormControl className=''>
                        <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"                        
                         onChange={()=>setActive(!active)}
                        >
                        
                        <MenuItem value={true}>Active</MenuItem>
                        <MenuItem value={false}>InActive</MenuItem>
                        </Select>
            </FormControl>            
            
            
          </div>
          <div className='row3'>
              <TextField
              name='description'
              className='row1__item'
              variant='outlined'
              label='Description' 
              size='small'
              multiline
              rows={5}

              />
          </div>         
        
          <div className='buttongroup'>
            <Button
              type='submit'
              variant='outlined'
              color='primary'            
              >Submit</Button>
            <Button
              variant='outlined'
              color='secondary'
            >Reset</Button>
          </div>  
        </div>
        
        
        
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
          Do you want to Create another Product
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDecline} color="primary">
          No
        </Button>
        <Button onClick={handleAgree} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
    
    </div>:''


      }
      
      
    </div>
  );
}