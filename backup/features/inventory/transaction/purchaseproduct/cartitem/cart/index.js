import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  Button from '@material-ui/core/Button'
import {addCartItem,updateCartItem,selectCartItems} from '../cartitem.slice'
import {ReactTable,Styles} from '../../../../../../app/components/table/ReactTable'
import SaveIcon from '@material-ui/icons/Save';
import ClearAllIcon from '@material-ui/icons/ClearAll';
// import {Styles,CartTable} from './CartTable'

const Cart=()=>{
    const dispatch=useDispatch()
    const cart=useSelector(selectCartItems)
    const columns=React.useMemo(
        ()=>[
        {
            Header:'Sl.No',
            accessor:'id',
            width:50
        },
        {
            Header:'Name',
            accessor:'name'
        },
        {
            Header:'Quantity',
            accessor:'quantity'
        },
        {
            Header:'Cost Price',
            accessor:'cost_price'
        },
        {
            Header:'Gst',
            accessor:'gst'
        },
        {
            Header:'Discount',
            accessor:'discount'
        },
        {
            Header:'Total Cost Price',
            accessor:'total_costprice'
        },
        

        
    ],
    [])
    return(
        <div>
            <Styles>
                <ReactTable data={cart} columns={columns}/>
            </Styles>
            <div className='carttable__button'>
                <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    startIcon={<SaveIcon/>}
                    >Submit</Button>
                <Button
                    variant='contained'
                    type='submit'
                    color='secondary'
                    startIcon={<ClearAllIcon/>}
                    >Clear</Button>
            </div>

        </div>
    )
}

export default Cart