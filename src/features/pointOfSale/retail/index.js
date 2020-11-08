import React from 'react'
import {ComponentToPrint} from './invoice.component'
// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import styled from 'styled-components'

// ---Component import
import CustomerSelect from './CustomerSelect.component'
import CartItem from './CartItem.component'
import CartTable from './CartTable.component'
import CartSummary from './CartSummary.component'


const Container=styled.div`
    display:flex;
    width:100vw;
    height:90vh;
    background-color:teal;
`
const Column1=styled.section`
    display:flex;
    flex-direction:column;  
`
const Column2=styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top:10px;
`

const Retail = () => {
    return(
        // <div>
        //     <ComponentToPrint/>
        // </div>

        <Container>
            <Column1>
                <CustomerSelect/>
                <CartItem/>
            </Column1>
            <Column2>
                <CartTable/>
                <CartSummary/>
            </Column2>

        </Container>

    )
}

export default Retail
