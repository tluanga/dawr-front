import React from 'react'
import {useDispatch} from 'react-redux'
import {clear} from '../../../features/login/login.slice'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button' ;
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





const Login=()=>{
    const history=useHistory()
    const dispatch=useDispatch()
    const onClick=(event)=>{
        event.preventDefault()
        localStorage.clear()
        dispatch(clear())
        history.push('/login')
    }

    return(
        <div>
            <Button
                    variant='contained'
                    style={{backgroundColor:'white'}}
                    startIcon={<AccountCircleIcon/>}
                    onClick={onClick}
                    >
                    Log off
                </Button>
        </div>
    )
}

export default Login