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




function App() {
  const dispatch=useDispatch()
  // const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('accessToken'))  
  const isAuthenticated=true
  useEffect(()=>{
    dispatch(fetchVendorList())
    dispatch(fetchCategoryList())
    // setIsAuthenticated(localStorage.getItem('accessToken')
    // ?true:false)
    
    
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
