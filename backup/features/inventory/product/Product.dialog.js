import React,{useState} from 'react';
import {useForm} from 'react-hook-form' ;
import {useDispatch,useSelector} from 'react-redux';
import {TITLE,NEW,EDIT} from './Product.constants';
import {selectedGstCodeSelector} from '../gstcode/GstCode.slice'
import {selectSelector} from '../category/Category.slice'
import CategorySelect from '../category/Category.select' ;
import GstCodeSelect from '../gstcode/GstCode.select' ;
import UnitOfMeasurementSelect from '../unitofmeasurement/UnitOfMeasurement.select' ;

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
import PlusOneIcon from '@material-ui/icons/PlusOne';

import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';




import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



import {createProduct as create, 
  updateProduct as update,
  setDialog,dialogSelector
} from './Product.slice'
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
  padding-bottom:60px;
  justify-content:space-between;
`
const DialogRow2=styled.div`
  display:flex;
  justify-items:center;
  
  justify-content:space-between;
  padding-bottom:60px;
`
const DiaglogNumberSection=styled.section`
  width:400px;
  display:flex;  
  justify-content:space-between;
`
const TextNumber=styled(TextField)`
  width:170px;
`
const TextString=styled(TextField)`
  width:400px;
`
const TextBox=styled(TextField)`
  width:400px;
`
const SelectBox=styled(FormControl)`
  width: 170px;
`
const DialogButton=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-left:35vw;
  padding-right:35vw;
  
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
  const productDialog=useSelector(dialogSelector)
  const gstCode=useSelector(selectedGstCodeSelector)
  const category=useSelector(selectSelector)
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
    productDialog.mode===NEW?
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
      id:productDialog.data.id?productDialog.data.id:null,
      name:data.name,
      brand:data.brand,
      model:data.model,
      cost_price:data.cost_price,
      selling_price:data.selling_price,
      mrp:data.mrp,
      gstcode:gstCode.id,
      unit_of_measurement:1,      
      remarks:data.remarks,
      category:category.id,
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
        <Button 
          variant="contained"
          color="primary"
          startIcon={<PlusOneIcon/>}
          onClick={handleClickOpen}>
          New Product 
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
          {productDialog.mode===NEW?
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
            defaultValue={productDialog.data?productDialog.data.name:''}
            error={!!errors.name}
            helperText={!!errors.name?'Name is required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          />
          <TextString
            name='brand' 
            type='text'              
            variant='outlined'
            label='Brand'
            size='small'
            defaultValue={productDialog.data?productDialog.data.abbreviation:''}
            error={!!errors.abbreviation}
            helperText={!!errors.abbreviation?'Abbreviationis required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          />
           <TextString
            name='model' 
            type='text'              
            variant='outlined'
            label='Model'
            size='small'
            defaultValue={productDialog.data?productDialog.data.abbreviation:''}
            error={!!errors.abbreviation}
            helperText={!!errors.abbreviation?'Abbreviationis required':''}
              inputRef={register({
              required:true,
              maxLength:100
            })}              
          />
             
        </DialogRow1>
        <DialogRow2>
          <CategorySelect />
          <GstCodeSelect/>
          <UnitOfMeasurementSelect/>
          
        </DialogRow2>
        <DialogRow2>
          <DiaglogNumberSection>
            <TextNumber
              name='cost_price' 
              type='text'              
              variant='outlined'
              label='Cost Price'
              size='small'
              defaultValue={productDialog.data?productDialog.data.abbreviation:''}
              error={!!errors.abbreviation}
              helperText={!!errors.abbreviation?'Abbreviationis required':''}
                inputRef={register({
                required:true,
                maxLength:100
              })}              
            />
             <TextNumber
                name='selling_price' 
                type='text'              
                variant='outlined'
                label='Selling Price'
                size='small'
                defaultValue={productDialog.data?productDialog.data.abbreviation:''}
                error={!!errors.abbreviation}
                helperText={!!errors.abbreviation?'Abbreviationis required':''}
                  inputRef={register({
                  required:true,
                  maxLength:100
                })}              
              />
            </DiaglogNumberSection>
            <DiaglogNumberSection>
              <TextNumber
                  name='mrp' 
                  type='text'              
                  variant='outlined'
                  label='Mrp'
                  size='small'
                  defaultValue={productDialog.data?productDialog.data.abbreviation:''}
                  error={!!errors.abbreviation}
                  helperText={!!errors.abbreviation?'Abbreviationis required':''}
                    inputRef={register({
                    required:true,
                    maxLength:100
                  })}              
                />
                <SelectBox>
                <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                      id="demo-simple-select"                        
                      onChange={()=>productDialog.mode===EDIT?
                        setActive(!productDialog.data.active):active
                          
                      }
                      defaultValue={productDialog.mode===NEW?true:productDialog.data.active}>
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>InActive</MenuItem>
                  </Select>
                </SelectBox>      
            </DiaglogNumberSection>
            <TextBox
              name='remarks'
              defaultValue={productDialog.data?productDialog.data.remarks:''}
              variant='outlined'
              label='Remarks'
              size='small'
              multiline
              rows={2}
              inputRef={register({
                maxLength:200
              })}
            />            
             
        </DialogRow2>
 
        <DialogButton>
          <Button
            size="large"
            type='submit'
            variant='contained'
            color='primary'
            startIcon={<SaveIcon/>}

          >Submit</Button>
          <Button
            size="large"
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon/>}
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