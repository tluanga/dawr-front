import React,{useState} from 'react';
import {useForm} from 'react-hook-form' ;
import {useDispatch,useSelector} from 'react-redux';
import {TITLE,NEW,EDIT} from './GstCode.constants';
import {createGstCode as create, 
  updateGstCode as update,
  setDialog,dialogSelector
} from './GstCode.slice'


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
  padding-bottom:20px;
  justify-content:space-between;
`
const DialogRow2=styled.div`
  display:flex;
  justify-items:center;
  
  justify-content:space-between;
  padding-bottom:20px;
`
const TextNumber=styled(TextField)`
  width:200px;
`
const TextString=styled(TextField)`
  width:300px;
`
const TextBox=styled(TextField)`
  width:500px;
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
  const gstCode=useSelector(dialogSelector)
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
    gstCode.mode===NEW?
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
  const [_igst,setIgst]=useState(0)
  const {handleSubmit,register,errors,watch, getValues}=useForm()
  const onSubmit=data=>{
    //--warning will be displayed to get the response from the user
    const payload={
      id:gstCode.data.id?gstCode.data.id:null,
      code:data.code,
      sgst:data.sgst,
      cgst:data.cgst,
      igst:data.igst,
      description_of_good:data.description_of_good,
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
          New GST Code
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
          {gstCode.mode===NEW?
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
            name='code' 
            type='text'              
            variant='outlined'
            label='GST Code'
            size='small'
            defaultValue={gstCode.data?gstCode.data.code:'Blank'}
            error={!!errors.name}
            helperText={!!errors.name?'Name is required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          /> 
          <TextNumber
            name='cgst'
            type='number'
            defaultValue={gstCode.data?gstCode.data.sgst:''}
            variant='outlined'
            label='Sgst'
            size='small'
            inputRef={register({
              required:true,
              maxLength:200
            })}
          />
          <TextNumber
            name='sgst'
            defaultValue={gstCode.data?gstCode.data.sgst:'Blank'}
            variant='outlined'
            label='Cgst'
            size='small'
            inputRef={register({
                required:true,
                maxLength:200
            })}
          />
          <TextNumber
            name='igst'
              // value={gstCode.data?gstCode.data.totalGst:_totalGst}
            defaultValue={gstCode.data?gstCode.data.igst:_igst}
            variant='outlined'
            label='Total GST Rate'
            size='small'
            inputRef={register({
                required:true,
                maxLength:200
            })}
          />

        </DialogRow1>
          <DialogRow2>
            <TextBox
              name='description_of_good'
              defaultValue={gstCode.data?gstCode.data.description_of_good:'Blank'}
              variant='outlined'
              label='Description'
              multiline
              rows={5}
              size='small'
              inputRef={register({
                required:true,
                maxLength:200
              })}
            />
            <TextBox
              name='remarks'
              defaultValue={gstCode.data?gstCode.data.remarks:'Blank'}
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
                    onChange={()=>gstCode?setActive(!gstCode.data.active):setActive(!active)}
                    defaultValue={gstCode?gstCode.data.active:active}>
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