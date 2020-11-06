import React from 'react'

// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import styled from 'styled-components'



const Container=styled.section`
    display:flex;
    width:30vw;
    height:70vh;
    background-color:greenyellow;
`

const ProductSelect = () => {
    return(
        <Container>
             <h2>Customer Select</h2>            
        </Container>

    )
}

export default ProductSelect
