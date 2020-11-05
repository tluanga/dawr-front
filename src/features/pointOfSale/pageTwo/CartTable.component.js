import React from 'react'
import styled from 'styled-components'
import {ReactTable} from '../../../app/components/table/ReactTable'
// -----REDUX
import {useSelector,useDispatch} from 'react-redux'
import {
    selectCart,
    removeCartItem,
    selectCartTotalAmount,
    setTotalAmount,
    selectCartTotalTax,
    setTotalTax
} from './Cart.Slice'


import Button from '@material-ui/core/Button'

const Container=styled.div`
    flex-direction:column;
    display:flex;
    width:75vw;    
    background-color:white;
`

const CartTable = () => {
    const data=useSelector(selectCart)
    const cartTotalAmount=useSelector(selectCartTotalAmount)
    const cartTotalTax=useSelector(selectCartTotalTax)
    const dispatch=useDispatch()

    const columns=React.useMemo(
        ()=>[
            {
                Header:'Id',
                accessor:'id'
            },
            {
                Header:'Product',
                accessor:'product',
                Cell:({cell:{value}})=>value.name                
                
            },
            {
                Header:'HSN Code',
                accessor:'gstCode',
                Cell:({cell:{value}})=>value.code 
            },
            {
                Header:'Quantity',
                accessor:'quantity',
               
            }, 
            {
                Header:'Tax Amount',
                accessor:'tax',                
            },
            {
                Header:'Discount',
                accessor:'discount'
            },
            {
                Header:'Amount',
                accessor:'amount'
            },
            {
                //    id:'selection',
                   Header:'Action',
                   Cell:({row})=>{
                    console.log('row data', row.original)
                    return(
                        <Button 
                            variant='contained'
                            color='primary'
                            onClick={()=>{
                            dispatch(removeCartItem(row.original.id))
                            dispatch(setTotalAmount(cartTotalAmount-row.amount))
                            dispatch(setTotalTax(cartTotalTax-row.tax))
                            // setModalData(row.original)
                        }}>
                            Remove</Button>
                        // <ActionButton row={row.original} />
                    )
                }
        
            },
              
            
        ],
            []
    )

    return (
        <Container>
            
            <ReactTable 
                columns={columns}
                data={data}
            />
        </Container>
    )
}

export default CartTable
