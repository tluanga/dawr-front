import React from 'react' ;
import {useSelector} from 'react-redux' ;
import {selectCart} from './cart.slice'
import styled from 'styled-components'
import {CartTable,Styles} from './CartTable'
import {Columns} from './CartTable/columns'


const Container=styled.section`
    width:70vw;
    height:86.5vh;  
    align-items:flex-start;
    display:flex;
    flex-direction:column;    
    
`

const PosCart=()=>{
    const cart=useSelector(selectCart)

    return(
        <Container>
                
                <CartTable columns={Columns} data={cart}/>
            
        </Container>
    )

}

export default PosCart