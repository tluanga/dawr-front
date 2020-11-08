import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    width:800px;
    height:1130px;
    background-color:greenyellow;
`
const Header=styled.div`
    display:flex;
    flex-direction:column;
    background-color:blue;

`
const CompanyInfo=styled.section`
    width:200px;
`
const BillInfo=styled.section`
    width:200px
`
const Body=styled.div`
    display:flex;
`


const Footer=styled.div`
    display:flex;
`

const companyInfo={
    name:'Clamitz',
    address:'C-87, Biakin Mual',
    locality:'Ramhlun North',
    city:'Aizawl'
}

const billInfo={
    billno:'121213',
    date:'21/October/2020',
    gstNo:'121212'
}

export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <Container>
            <Header>
                <h3>TAX/INVOICE</h3>
                <CompanyInfo>
                    {companyInfo.name}
                    {companyInfo.address}
                    {companyInfo.locality}
                    {companyInfo.city}
                </CompanyInfo>
                <BillInfo>
                    {billInfo.billno}
                    {billInfo.date}
                    {billInfo.gstNo}
                </BillInfo>
            </Header>
            <Body>
                <table>
                    
                </table>
            </Body> 
            <Footer>
                this is the footer
            </Footer>
        </Container>
      );
    }
}
