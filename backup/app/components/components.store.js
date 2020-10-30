import {combineReducers} from '@reduxjs/toolkit'
import select from './select/select.store'
import dialog from './dialog/dialog.slice'

const reducer=combineReducers({
    dialog,
    select
})

export default reducer