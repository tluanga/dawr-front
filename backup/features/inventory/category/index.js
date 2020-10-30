import React from 'react'
import CategoryTable from './CategoryTable'
import CategoryDialog from './Category.dialog'


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
            <CategoryDialog isButtonEnabled={true}/>
            <TableWrapper>
                <CategoryTable/>
            </TableWrapper>
            

        </Wrapper>
    )
}

export default CustomerType             