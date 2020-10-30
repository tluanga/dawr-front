import React from 'react'
import SupplierTable from './CustomerTable'
import SupplierDialog from './Customer.dialog'


import styled from 'styled-components'

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding: 1em;  
`
const TableWrapper=styled.section`
    
`

const Supplier=()=>{
    return(
        <Wrapper>
            <SupplierDialog isButtonEnabled={true}/>
            <TableWrapper>
                <SupplierTable/>
            </TableWrapper>
            

        </Wrapper>
    )
}

export default Supplier             