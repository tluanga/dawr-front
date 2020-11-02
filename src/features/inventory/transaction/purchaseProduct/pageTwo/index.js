import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

// -----Redux------
import {useSelector,useDispatch} from 'react-redux'


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;    
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
`
const ProductContent=styled.section`
    width:400px;
    padding:10px;
    display:flex;
    flex-direction:column;    
    
`

const PageTwo = ({showPageTwo}) => {
    const dispatch=useDispatch()

    return (
        <>
        {
            showPageTwo?
            <Wrapper>
            <ProductContent>
                <Card style={{height:'450px'}}>
                    <CardContent style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        height:'450px'
                    }}>
                        <Select
                            placeholder='Select Product..'
                        />
                        
                        <section>Name:</section>
                        <section>Quantity:</section>
                        <section>Gst Rate:</section>
                        <section>Hsn Code:</section>
                        <section>Rate:</section>
                        <section>Amount:</section>

                        
                        <TextField
                            variant='outlined'
                            size='small'
                            placeholder='Quantity'
                        />
                        <Button 
                            variant='contained'
                            color='primary'
                        >Add to Cart</Button>
                    </CardContent>
                   
                </Card>
            </ProductContent>

            
            {/* Select Product */}
            {/* Display the properties of Product */}
            {/*  */}
            </Wrapper>:null
        }
        </>
        
    )
}

export default PageTwo
