import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.component'
import CartTable from './CartTable.component'


// -----Redux------




const Wrapper=styled.div`
    display:flex;
    flex-direction:row;    
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
    
`
const Table=styled.section`
    display:flex;
    flex-direction:column;
    padding:10px ;
    height:76.5vh;
    width:77vw;
`


const PageTwo = ({showPageTwo}) => {
    



    return (
        <>
        {
            showPageTwo?
            <Wrapper>
                <CartItem/>
                <Table>
                    <CartTable/>
                </Table>
                
            </Wrapper>:null
        }
        </>
        
    )
}

export default PageTwo
