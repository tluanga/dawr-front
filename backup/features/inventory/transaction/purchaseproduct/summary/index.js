import React from 'react'
import {useSelector} from 'react-redux'
import {selectCartHead} from '../carthead/CartHeadSlice'
import {selectCartItems}from '../cartitem/cartitem.slice'

function Summary() {
    return (
        <div>
            <h1>Summary</h1>
        </div>
    )
}

export default Summary
