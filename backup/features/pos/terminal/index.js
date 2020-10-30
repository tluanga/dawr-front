import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

import CustomerSelect from './customer-select' ;
import ProductSelect from './product-select' ;
import ButtonGroup from './button-group'
import PosCart from './pos-cart' ;




const TerminalContainer=styled.section`
  display:flex;
  width:100vw;
  flex-direction:column; 
   
  background-color:#CED2CC;
`
const Terminal=styled.section`
  display:flex;
  justify-content:space-around;
`
const SelectSection=styled.section`
  width:26vw;
  height:87.1vh;
  display:flex;
  padding-left:15px;
  flex-direction:column;
  background-color:white ;
`
const EntrySection=styled.section`
  width:25vw;
  height:87.1vh;
  display:flex;  
  flex-direction:column;
  background-color:white ;
`
const CartSection=styled.section`
  width:70vw;
  height:87.1vh;
  display:flex;  
  flex-direction:column;
  background-color:white ;
  padding-right:15px;
`


const Header=styled.strong`
  font-size:90 ;
`
const SelectContainer=styled.section`
  width:200px;
`

function PosTerminal() {
  

  return (
    <TerminalContainer>
       
      <Header>POINT OF SALE TERMINAL</Header>
        <Terminal>          
          <SelectSection>
            <CustomerSelect/>
            <ProductSelect/>
          </SelectSection>          
          <CartSection>
           <PosCart/>
           <ButtonGroup/>
          </CartSection>     
          
        </Terminal> 
       
      </TerminalContainer>
           
    )
}

export default PosTerminal