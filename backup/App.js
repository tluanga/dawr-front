import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {fetchProductList} from './features/inventory/product/Product.slice'
import {fetchProductSellPrice} from './features/inventory/product/ProductSellPrice.slice'
import {fetchCustomerList} from './features/inventory/customer/Customer.slice'
import {fetchCategoryList} from './features/inventory/category/Category.slice'
import {fetchGstCodeList} from './features/inventory/gstcode/GstCode.slice'
import {fetchSupplierList} from './features/inventory/supplier/Supplier.slice'
import {fetchUnitOfMeasurementList} from './features/inventory/unitofmeasurement/UnitOfMeasurement.slice'



import './App.css'
import {Route,Switch} from 'react-router-dom'
// -----Components
import Main from './app/pages/main';
import Login from './features/login'
import ProtectedRoute from './ProtectedRoute'





function App() {
  const dispatch=useDispatch()
  // const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('accessToken'))  
  const isAuthenticated=true
  useEffect(()=>{
    // setIsAuthenticated(localStorage.getItem('accessToken')
    // ?true:false)
    dispatch(fetchProductList())
    dispatch(fetchProductSellPrice())
    dispatch(fetchCustomerList())
    dispatch(fetchCategoryList())
    dispatch(fetchGstCodeList())
    dispatch(fetchSupplierList())
    dispatch(fetchUnitOfMeasurementList())
    
  },[])
  return (
    <div>
      {/* <CssBaseline/>       */}
      <div>
        <Switch>
          <Route
            path='/login'
            component={Login}
            
          />        
          <ProtectedRoute            
            path='/'
            component={Main}
            auth={isAuthenticated}
          />       
        </Switch>
        App
      </div>
    </div>
  );
}

export default App;
