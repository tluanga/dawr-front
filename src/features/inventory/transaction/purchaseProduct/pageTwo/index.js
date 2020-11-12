import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import CartItem from './cartItem/CartItem.component'
// import CartItem from './CartItem.component'
// import CartTable from './CartTable.component'
// import CartSummary from './CartSummary.component'



// -----Redux------
// import EditPriceModal from './EditPrice.modal'


const Wrapper=styled.div`
    display:flex;
    flex-direction:row;    
    height:76.5vh;
    width:100vw;
    background-color:#C5CAE9;
    
`
const Table=styled.section`
    display:flex;
    flex-direction:column;
    padding:10px ;
    height:73vh;
    width:77vw;
`


const PageTwo = ({showPageTwo}) => {
    return(
        <>
           {
               showPageTwo?
               <Wrapper>       
                <CartItem/>
                {/* <ProductModal 
                    openModal={openModal}
                    modalMode={modalMode}
                    setOpenModal={setOpenModal}
                    modalData={modalData}
                    setModalData={setModalData}
                />
                <Table>
                    <CartTable/>
                    <CartSummary/>
                </Table>
                <EditPriceModal/> */}
            </Wrapper>:''
           } 
        </>
    )


}

export default PageTwo

