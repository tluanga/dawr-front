import React,{useEffect} from 'react';
import {useForm} from 'react-hook-form' ;
import {useDispatch} from 'react-redux';
import {changeNewCategoryDialogState} from '../dialog.store'
import {createCategory} from '../../../../features/inventory/category/categories/CategoriesSlice'



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
import { TextField } from '@material-ui/core';

//For Dialog Confirmation
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import '../dialog.css'



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// -> Inorder to use the Dialog, we have to spass the name , isButtonEnabled and OpenParam

export default function FullScreenDialog({name,isButtonEnabled=false}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(!isButtonEnabled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(changeNewCategoryDialogState())
  };

  
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
        New Customer
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
            New Category
          </Typography>            
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='dialog__container'>
          <div className='row1'>
            <TextField
              name='name'
              className='row1__item'
              variant='outlined'
              label='Name'
              size='small'
              defaultValue={name}
              error={!!errors.name}
              helperText={!!errors.name?'Name is required':''}
              inputRef={register({
              required:true,
                maxLength:100
              })}              
            />              
            
            
          </div>
          <div className='row2'>
            <TextField
              name='Address'
              className='row1__item'
              variant='outlined'
              label='Address'
              size='small'
              inputRef={register({
                maxLength:200
              })}
            />
              <TextField
                  name='abbreviation'
                  className='row1__item'
                  variant='outlined'
                  label='Abbreviation' 
                  size='small'              
                  />
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