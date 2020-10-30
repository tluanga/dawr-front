import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ConfirmSaveDialog=()=>{
    const [warningOpen,setWarningOpen]=React.useState(false)
    const handleClose=()
    const handleWarningOpen = () =>setWarningOpen(true)
    const handleWarningClose = () =>setWarningOpen(false)
    const handleDecline=()=>{
        setWarningOpen(false)
        handleClose()
      }
      const handleAgree=()=>{
        setWarningOpen(false)
      }
    
    return(
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
    )
    
}

export default ConfirmSaveDialog