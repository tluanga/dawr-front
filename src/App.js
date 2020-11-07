import React from 'react';
import './App.css'
import {Route,Switch} from 'react-router-dom'
// -----Components
import Main from './app/pages/main';
import Login from './features/login'
import ProtectedRoute from './ProtectedRoute'

// ---------Reduct


function App() {
  
  const isAuthenticated=true
 
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
