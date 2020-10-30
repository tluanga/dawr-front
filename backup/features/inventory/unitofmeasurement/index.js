import React from 'react'
import UnitOfMeasurementTable from './UnitOfMeasurement.table'
import UnitOfMeasurementDialog from './UnitOfMeasurement.dialog'


import styled from 'styled-components'

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding: 1em;  
`
const TableWrapper=styled.section`
    
`

const UnitOfMeasurement=()=>{
    return(
        <Wrapper>
            <UnitOfMeasurementDialog isButtonEnabled={true}/>
            <TableWrapper>
                <UnitOfMeasurementTable/>
            </TableWrapper>
            

        </Wrapper>
    )
}

export default UnitOfMeasurement             