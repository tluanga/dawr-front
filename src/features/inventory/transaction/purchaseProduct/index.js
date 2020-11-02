import React,{useState} from 'react'
// -------Redux


import PurchaseProductPageOne from './pageOne'
import PurchaseProductPageTwo from './pageTwo'
const PurchaseProduct = () => {
    const [showPageOne,setShowPageOne] =useState(true)
    const [showPageTwo,setShowPageTwo]=useState(false)

    return (
       <div>
           <PurchaseProductPageOne 
                showPageOne={showPageOne}
                setShowPageOne={setShowPageOne}
                setShowPageTwo={setShowPageTwo}
            />
           <PurchaseProductPageTwo 
                showPageTwo={showPageTwo}
                setShowPageTwo={setShowPageTwo}
            />
            
       </div>
    )
}

export default PurchaseProduct
