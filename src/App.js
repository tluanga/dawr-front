import React,{useEffect} from 'react';
import './App.css'
import {Route,Switch} from 'react-router-dom'
// -----Components
import Main from './app/pages/main';
import Login from './features/login'
import ProtectedRoute from './ProtectedRoute'

// ---------Reduct
import {useDispatch} from 'react-redux'
import {fetchVendorList} from './features/inventory/vendor/Vendor.slice'
import {fetchCategoryList} from './features/inventory/category/Category.slice'
import {fetchCustomerTypeList} from './features/inventory/customerType/CustomerType.slice'
import {fetchGstCodeList} from './features/inventory/gstCode/GstCode.slice'
import {fetchUnitOfMeasurementList} from './features/inventory/unitOfMeasurement/UnitOfMeasurement.slice'
import {fetchCustomerList} from './features/inventory/customer/Customer.slice'
import {fetchWarehouseList} from './features/inventory/warehouse/Warehouse.slice'
import {fetchProductList} from './features/inventory/product/Product.slice'
import {fetchManufacturerList} from './features/inventory/manufacturer/Manufacturer.slice'

function App() {
  const dispatch=useDispatch()
  const isAuthenticated=true
  useEffect(()=>{
    dispatch(fetchVendorList())
    dispatch(fetchCategoryList())
    dispatch(fetchCustomerTypeList())
    dispatch(fetchGstCodeList())
    dispatch(fetchUnitOfMeasurementList())
    dispatch(fetchCustomerList())
    dispatch(fetchWarehouseList())
    dispatch(fetchProductList())
    dispatch(fetchManufacturerList())
   
    
  },[dispatch])
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
        
      </div>
    </div>
  );
}

export default App;
