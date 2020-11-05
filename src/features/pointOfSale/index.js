import React,{useState} from 'react'

// -------Redux

// ---UI library
import styled from 'styled-components'

//Component Import
import PosMode from './PosMode.component'
import Retail from './retail'

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
           <PosMode
                showPosMode={showPosMode}
                setShowPosMode={setShowPosMode}
                setShowRetail={setShowRetail}
                setShowWholeSale={setShowWholeSale}
           />
           <Retail
                showRetail={showRetail}
                setShowWholeSale={setShowWholeSale}

           />
           
       </Container>
    )
}

export default Pos
