import React from 'react'
// -------redux-------
import {useDispatch,useSelector} from 'react-redux'
import {selectCategoryList,fetchCategoryList} from './Category.slice' 
import {EDIT} from './Category.constants'
import {ReactTable} from '../../../app/components/table/ReactTable'
import Button from '@material-ui/core/Button'


const CategoryTable = ({setOpenModal,setModalMode,setModalData}) => {
    
    const columns = React.useMemo(
        () => [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'name',
            accessor: 'name', // accessor is the "key" in the data
        },
        {
            Header: 'abbreviation',
            accessor: 'abbreviation', // accessor is the "key" in the data
        },
        {
            Header: 'description',
            accessor: 'description',
        },
       
        {
            Header: "Status",
            accessor: "active",
            width:400,
            Cell: ({ cell: { value } }) => {
                if (value === true) {
                    return 'active'
                } else {
                    return 'in-active'
                }

            }
        },
        {
            //    id:'selection',
               Header:'Action',
               Cell:({row})=>{
                return(
                    <Button 
                        variant='contained'
                        color='primary'
                        onClick={()=>{
                        setModalMode(EDIT)
                        setOpenModal(true)
                        setModalData(row.original)
                    }}>
                        Edit</Button>
                    // <ActionButton row={row.original} />
                )
            }
    
            },
        ],
        [setModalData,setOpenModal,setModalMode]
      )
    // ----Redux-----
    const dispatch=useDispatch()
    dispatch(fetchCategoryList())
    const categoryList=useSelector(selectCategoryList)
    return (
        <div>
            <ReactTable columns={columns} data={categoryList}/>
        </div>
    )
}

export default CategoryTable
