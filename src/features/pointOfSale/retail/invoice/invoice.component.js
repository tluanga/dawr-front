import React from 'react'
// --------Redux--------


// --------Styled Component
import {
    Container,
    Header,
    CompanyInfo,
    BillInfo,
    Body,
    Footer,   
    Table,
    Title,
    TitleBig,
    SubHeadText,
    Tr,
    Td,
    Th} from './Invoice.style'

    
export const companyInfo={
    name:'CLD Enterprise',
    address:'C-87, Biakin Mual',
    locality:'Ramhlun NorTh',
    city:'Aizawl',
    ph:9774058922
}

export const billInfo={
    billno:'121213',
    date:'21/October/2020',
    gstNo:'121212'
}


export class ComponentToPrint extends React.PureComponent {
    render() {
        const customer=this.props.customer
        console.log('inside invoice customer',customer)
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
                    <SubHeadText>{customer.name}</SubHeadText>
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
                    <Tr id='ivoiceTr'>
                        <Th id='invoiceTh'>Sl.no</Th>
                        <Th id='invoiceTh'>Particulars</Th>
                        <Th id='invoiceTh'>HSN Code</Th>
                        <Th id='invoiceTh'>Quantity</Th>
                        <Th id='invoiceTh'>Discount</Th>
                        <Th id='invoiceTh'>Amount</Th>
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
