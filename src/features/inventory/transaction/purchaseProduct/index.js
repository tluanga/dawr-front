import { Text } from '@react-pdf/renderer'
import React from 'react'
import styled from 'styled-components'

import CustomerSelect from '../../customer/Customer.select'
import WareHouseSelect from '../../Wa'

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ContainerSection=styled.section`
    display:flex;
    flex-direction:column;
    width:500px;
    height:600px;
    border-color:red;
`
const Form =styled.form`
    display:flex;
    flex-direction:column;
    width:400px;
`

const PurchaseProduct = () => {
    return (
        <Wrapper>
            <ContainerSection>
                <Form>
                    <CustomerSelect/>
                    <

                </Form>
            </ContainerSection>
        </Wrapper>
    )
}

export default PurchaseProduct
