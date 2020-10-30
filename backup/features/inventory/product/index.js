import React from 'react'
import ProductTable from './ProductTable'
import ProductDialog from './Product.dialog'


import styled from 'styled-components'

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding: 1em;  
`
const TableWrapper=styled.section`
    
`

const Product=()=>{
    return(
        <Wrapper>
            <ProductDialog isButtonEnabled={true}/>
            <TableWrapper>
                <ProductTable/>
            </TableWrapper>
            

        </Wrapper>
    )
}

export default Product             