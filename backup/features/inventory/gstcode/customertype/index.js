import React from 'react'
import CustomerTypeTable from './CustomerType.table'
import CustomerTypeDialog from './CustomerType.dialog'


import styled from 'styled-components'

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding: 1em;  
`
const TableWrapper=styled.section`
    
`

const CustomerType=()=>{
    return(
        <Wrapper>
            <CustomerTypeDialog isButtonEnabled={true}/>
            <TableWrapper>
                <CustomerTypeTable/>
            </TableWrapper>
            test
            

        </Wrapper>
    )
}

export default CustomerType             