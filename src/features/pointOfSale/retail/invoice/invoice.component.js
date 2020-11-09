import React from 'react'
import styled from 'styled-components'
import {Table,Tr,Td,Th} from './Invoice.style'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    width:800px;
    height:1130px;
    padding:20px;
    /* background-color:greenyellow; */
`
const Header=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    /* background-color:blue; */

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
    name:'CLD Enterprise',
    address:'C-87, Biakin Mual',
    locality:'Ramhlun NorTh',
    city:'Aizawl',
    ph:9774058922
}

const billInfo={
    billno:'121213',
    date:'21/October/2020',
    gstNo:'121212'
}
const Title=styled.section`
    font-size:25px;
    font-weight:bold;
`
const TitleBig=styled.section`
    font-size:35px;
    font-weight:bold;
`

const SubHeadText=styled.section`
    font-size:15px;
`

export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <Container>
            <Header>                
                <CompanyInfo>
                    <Title>{companyInfo.name}</Title>
                    <SubHeadText>{companyInfo.address}</SubHeadText>
                    <SubHeadText>{companyInfo.locality}</SubHeadText>
                    <SubHeadText>{companyInfo.city}</SubHeadText>
                    <SubHeadText>{companyInfo.ph}</SubHeadText>
                </CompanyInfo>
                <TitleBig>TAX INVOICE</TitleBig>
            </Header>
            <hr
                style={{
                    color: "red",
                    backgroundColor: "black",
                    height: 5
                }}
            />
            <Header><Title style={{fontSize:20}}>Bill to:</Title></Header>
            <Header>
                <CompanyInfo>                    
                    <SubHeadText>Laljohna</SubHeadText>
                    <SubHeadText>Ramhlun NorTh</SubHeadText>
                    <SubHeadText>Aizawl, Mizoram</SubHeadText>
                </CompanyInfo>
                <BillInfo>
                    
                    <SubHeadText>BillNo:{billInfo.billno}</SubHeadText>
                    <SubHeadText>Date:{billInfo.date}</SubHeadText>
                    <SubHeadText>GstNo:{billInfo.gstNo}</SubHeadText>
                </BillInfo>
            </Header>
            <hr
                style={{
                    color: "red",
                    backgroundColor: "black",
                    height: 5
                }}
            />
            
            <Body>
                <Table style={{width:'100%'}}>
                    <Tr>
                        <Th>Sl.no</Th>
                        <Th>Particulars</Th>
                        <Th>HSN Code</Th>
                        <Th>Quantity</Th>
                        <Th>Discount</Th>
                        <Th>Amount</Th>
                    </Tr>
                    <Tr>
                        <Td>Jill</Td>
                        <Td>SmiTh</Td>
                        <Td>50</Td>
                    </Tr>
                    <Tr>
                        <Td>Eve</Td>
                        <Td>Jackson</Td>
                        <Td>94</Td>
                    </Tr>
                </Table>
            </Body> 
            <Footer>
                This is The footer
            </Footer>
        </Container>
      );
    }
}