import React from 'react'
import styled from 'styled-components'
// import ProductCard from './components/ProductCard'

// material ui
const DashboardContainer=styled.div`
    display:flex;
    width:100vw;
    height:90vh;
    background-color:#F1F1F1;
`
const DashboardItem=styled.section`
    padding-left:20px;
    padding-top:30px;
`

function DashBoard() {
    return (
        <DashboardContainer>
            {/* <DashboardItem>
                <ProductCard/>
            </DashboardItem>
            <DashboardItem>
                <ProductCard/>
            </DashboardItem>
            <DashboardItem>
                <ProductCard/>
            </DashboardItem>
             */}
        </DashboardContainer>         
    )
}

export default DashBoard
