import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
// -------Redux
import Button from '@material-ui/core/Button'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:90vh;
    
`
const Control=styled.div`
    display:flex;
    justify-content:space-between;
    width:800px;

`

const PurchaseProduct = () => {
    const history=useHistory()
   

    return (
        <Container>
            <Control>
                <Button
                    startIcon={<AddShoppingCartRoundedIcon 
                    style={{height:'80px', width:'80px', color:'white'}}/>}
                    variant='contained'
                    color='primary'
                    style={{width:'300px', height:'100px', color:'#e54304'}}
                    onClick={()=>history.push('/pos/retail')}
                ><h1 style={{color:'white'}}>Retail</h1>
                </Button>

                <Button
                    startIcon={<FilterNoneIcon 
                    style={{height:'80px', width:'80px', color:'white'}}/>}
                    variant='contained'
                        color='primary'
                        style={{width:'300px', height:'100px', color:'#e54304'}}
                    onClick={()=>history.push('pos/wholesale')}      
                    ><h1 style={{color:'white'}}>Wholesale</h1>
                    </Button>
            </Control>
        </Container> 
        
    )
}

export default PurchaseProduct
