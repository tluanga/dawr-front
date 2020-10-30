import React from 'react'
import CustomerTypeTable from './CustomerTypeTable'
import CustomerTypeDetail from './CustomerTypeDetail'
// import CustomerDialog from '../../../../app/components/dialog/customerType'
import styled from 'styled-components'

const Wrapper = styled.section`
    display:flex;
    padding: 1em;  
`
const TableWrapper=styled.section`
    
`
const DetailWrapper=styled.section`    
    
`



const CustomerType=()=>{
    return(
        <Wrapper>
            <TableWrapper>
                <CustomerTypeTable handle/>
            </TableWrapper>
            <DetailWrapper>
                <CustomerTypeDetail/>
            </DetailWrapper>
           
            
            
        </Wrapper>
    )
}

export default CustomerType