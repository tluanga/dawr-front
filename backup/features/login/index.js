import React,{useEffect} from 'react'
import {login} from '../../api/auth.api'
import {useDispatch,useSelector, } from 'react-redux'
import {useHistory,Redirect} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {createLoginToken,loginSelector} from './login.slice'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;    
    background-color:#bccbde;
    padding-top:17vh;
    height:100vh;   
`
const LoginContainer=styled(Card)`    
    display:flex;
    width:75vw;
    height:65vh;
    /* background-color:blue;    */
`
const InfoCard=styled.section`
    display:flex;
    flex-direction:column;
    width:45vw;
    background-color:#a28089;
    padding-top:1rem;
    padding-left:2rem;
    padding-right:1rem;        
`

const LoginCard=styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;    
    width:50vw;
`
const ButtonSection=styled.section`
    height:19vh;
    width:20vw ;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top:2rem;
    
`
const NameField =styled(TextField)`
    width:20vw ;
    
`
const PasswordField=styled(TextField)`
    width:20vw ;
    
`
const TextHeader=styled.h2`
    color:white ;
    padding:0rem;
`

function Login() {
    const history=useHistory()
    const dispatch=useDispatch()
    const login=useSelector(loginSelector)
    const {register,handleSubmit,errors}=useForm()
    const onSubmit=data=>{
        dispatch(createLoginToken({
            username:data.username,
            password:data.password
        }))  
    }
    if(login.isLoggedIn===true){
        return(
            <Redirect to='/'/>
        )
    }
        
    else return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>

                <LoginContainer>        
                <InfoCard>
                    <TextHeader>Dawr Manager</TextHeader>
                    <TextHeader>The Complete Inventory Management</TextHeader>
                    <TextHeader>Point of Sale</TextHeader>
                    <TextHeader>Software</TextHeader>
                    <TextHeader>CLD Technologies</TextHeader>
                </InfoCard>                          
                <LoginCard>
                
                    {login.isLoggedIn==='rejected'?'Incorrect UserName or Password':''}
                    

                    <h1>Login</h1>
                    <NameField
                        name='username'
                        placeholder='User Name'
                        label='User Name'
                        error={!!errors.username}
                        helperText={!!errors.username?'User Name is required':''}
                        inputRef={register({
                        required:true,
                        maxLength:100
                        })}  
                    />

                    <PasswordField
                        name='password'
                        type='password'
                        placeholder='password'
                        label='Password'
                        error={!!errors.password}
                        helperText={!!errors.password?'Password is required':''}
                        inputRef={register({
                        required:true,
                        maxLength:100
                        })} 
                        
                    />
                    <ButtonSection>
                        <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            
                        >
                            Login
                        </Button>
                        <Button
                            color='secondary'
                            variant='contained'
                        >
                            Clear
                        </Button>
                        </ButtonSection>
                    </LoginCard>
                </LoginContainer>
                
                </form>
                
        </Container>
    ) 
        
    
    
}

export default Login
