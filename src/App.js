import React,{useEffect} from 'react';
import './App.css'
import {Route,Switch} from 'react-router-dom'
// -----Components
import Main from './app/pages/main';
import Login from './features/login'
import ProtectedRoute from './ProtectedRoute'

// ---------Reduct
import {useDispatch,useSelector} from 'react-redux'
import {setLoadingState,selectLoadingState} from './App.slice'
import {fetchProductList} from './features/inventory/product/Product.slice'
import {fetchCurrentCostPrice} from './features/inventory/product/ProductCostPrice.slice'
import {fetchCurrentSellPrice} from './features/inventory/product/ProductSellingPrice.slice'
import {fetchCurrentMrp} from './features/inventory/product/ProductMrp.slice'
import {fetchCurrentStock} from './features/inventory/product/ProductStock.slice'
import {fetchVendorList} from './features/inventory/vendor/Vendor.slice'
import {fetchCategoryList} from './features/inventory/category/Category.slice'
import {fetchCustomerList} from './features/inventory/customer/Customer.slice'
import {fetchCustomerTypeList} from './features/inventory/customerType/CustomerType.slice'
import {fetchGstCodeList} from './features/inventory/gstCode/GstCode.slice'
import {fetchManufacturerList} from './features/inventory/manufacturer/Manufacturer.slice'
import {fetchUnitOfMeasurementList} from './features/inventory/unitOfMeasurement/UnitOfMeasurement.slice'
import {fetchWarehouseList} from './features/inventory/warehouse/Warehouse.slice'


function App() {
  const dispatch=useDispatch()
  const loadingState=useSelector(selectLoadingState)
  useEffect(()=>{
    dispatch(fetchProductList())
    dispatch(fetchCurrentCostPrice())
    dispatch(fetchCurrentSellPrice())
    dispatch(fetchCurrentMrp())
    dispatch(fetchCurrentStock())
    dispatch(fetchVendorList())
    dispatch(fetchCategoryList())
    dispatch(fetchCustomerList())
    dispatch(fetchCustomerTypeList())
    dispatch(fetchGstCodeList())
    dispatch(fetchManufacturerList())
    dispatch(fetchUnitOfMeasurementList())
    dispatch(fetchWarehouseList())

  },[])


  const isAuthenticated=true
 
  return (
    <div>
      {/* <CssBaseline/>       */}
      {loadingState?'Loading............':''}
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
