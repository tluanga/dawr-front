import React from 'react'
import GstCodeTable from './GstCodeTable'
import GstCodeDialog from './GstCode.dialog'

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
            <GstCodeDialog isButtonEnabled={true}/>
            <TableWrapper>
                <GstCodeTable/>
            </TableWrapper>
        </Wrapper>
    )
}

export default CustomerType             