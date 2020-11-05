import React from 'react'

const Retail = ({showRetail,setShowRetail}) => {
    return (
        <>
            {
                showRetail?<h1>Retail</h1>:null
            }
        </>
      
    )
}

export default Retail
