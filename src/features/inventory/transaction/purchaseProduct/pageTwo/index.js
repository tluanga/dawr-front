import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.component'
import CartTable from './CartTable.component'
import CartSummary from './CartSummary.component'



// -----Redux------
import ProductModal from '../../../product/Product.modal'



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
    height:76.5vh;
    width:77vw;
`
const NEW='New'

const PageTwo = ({showPageTwo}) => {
    const [openModal,setOpenModal]=useState(false)
    const [modalMode,setModalMode]=useState(NEW)
    const [modalData,setModalData]=useState({})
    return(
        <>
           {
               showPageTwo?
               <Wrapper>
                <CartItem 
                    setOpenModal={setOpenModal}
                    setModalMode={setModalMode}
                />
                <ProductModal 
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
            
            </Wrapper>:''
           } 
        </>
    )


}

export default PageTwo

