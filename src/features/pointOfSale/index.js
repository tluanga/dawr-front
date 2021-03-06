import React,{useState} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
// -------Redux

// ---UI library
import styled from 'styled-components'

//Component Import
import PosMode from './PosMode.component'
import Retail from './retail'
import Wholesale from './wholesale'

const Container=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:90vh;
    
`


const Pos = () => {
    const [showRetail,setShowRetail] =useState(false)
    const [showWholesale,setShowWholeSale]=useState(false)
    const [showPosMode,setShowPosMode]=useState(true)

    return (
       <Container>
           <Switch>
               
               <Route path='/pos/retail/'>
                   <Retail/>
               </Route>
               <Route path='/pos/wholesale/'>
                   <Wholesale/>
               </Route>
               <Route exact path='/pos'>
                   <PosMode/>
                </Route>
               
           </Switch>
           
           
       </Container>
    )
}

export default Pos
