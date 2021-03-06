import React from 'react'

// ---Redux
import {useSelector,useDispatch} from 'react-redux'
import {selectCustomerList} from '../../../features/inventory/customer/Customer.slice'

// ---Ui
import styled from 'styled-components'
import Select from 'react-select'


const Container=styled.div`
    display:flex;
    width:35vw;
    height:90vh;
    background-color:orange;
`
const SelectContainer=styled.div`
    width:300px;
`

const ProductSelect = () => {
    // -redux
    const customers=useSelector(selectCustomerList)

    return(
        <Container>
            <SelectContainer>
                <Select
                    options={customers}
                />
                <h3>Customer:</h3>
                <h3>Customer Discount:</h3>
            </SelectContainer>       
        </Container>

    )
}

export default ProductSelect
