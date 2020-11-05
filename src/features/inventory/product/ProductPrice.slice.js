import {createAsyncThunk,createSlice,createEntityAdapter} from '@reduxjs/toolkit'
import {searchItem} from '../../../api/api'

const url='product_sell_price'
const fetchCurrentSellPriceOfProduct=createAsyncThunk('ProductPrice/List',
    async (id)=>{
        const params={
            url:url,
            searchParam:[
                {
                    key:'id',
                    value:id
                },
                {
                    key:'current',
                    value:true,
                }

            ]
        }
        const response= await searchItem(searchParam)
        return response
    }
)
