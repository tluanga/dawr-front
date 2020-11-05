import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.component'


// -----Redux------




const Wrapper=styled.div`
    display:flex;
    flex-direction:column;    
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
`


const PageTwo = ({showPageTwo}) => {
    



    return (
        <>
        {
            showPageTwo?
            <Wrapper>
                <CartItem/>
            </Wrapper>:null
        }
        </>
        
    )
}

export default PageTwo
