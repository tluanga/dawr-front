import React from 'react'

// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import styled from 'styled-components'

// ---Component import
import CustomerSelect from './CustomerSelect.component'
import ProductSelect from './ProductSelect.component'


const Container=styled.div`
    display:flex;
    width:100vw;
    height:90vh;
    background-color:teal;
`
const Column1=styled.section`
    display:flex;
    flex-direction:column;
    width:35vw;
    height:90vh;
    padding:10px;
`


const Retail = () => {
    return(
        <Container>
            <Column1>
                <CustomerSelect/>
                <ProductSelect/>
            </Column1>            
        </Container>

    )
}

export default Retail
