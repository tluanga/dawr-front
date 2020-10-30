import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const Container=styled.section`
    width:25vw;
    height:86.5vh;
    padding-top:10px;
    align-items:flex-start;
    display:flex;
    flex-direction:column;    
    
`
const ProductInfoBox=styled(Box)`
    width:29vw;
    padding-left:4px;
    padding-bottom:20px;
`

const ProductInfoPaper=styled(Paper)`    
    display:flex;
    
    flex-direction:column;
`
const Label=styled.label`
    font-size:15px ;
    padding:5px;
`

const CustomerSelectBox=()=>{

    return(
        <Container>
            <ProductInfoBox>
                <ProductInfoPaper elevation={3} padding='5px'>
                    
                        <TextField
                            name='quantity'
                            label='Quantity'
                            placeholder='0'
                            variant='outlined'
                            style={{width:140}}
                        />
                        <TextField
                            name='discount'
                            label='Discount'
                            placeholder='0'
                            variant='outlined'
                            style={{width:140}}
                        />
                  
                </ProductInfoPaper>
            </ProductInfoBox>           
            <Button 
                variant='contained'
                style={{backgroundColor:'yellow'}}
                >Add to Cart</Button>
            <Button variant='contained'>Clear</Button>            
            
            
        </Container>
    )

}

export default CustomerSelectBox