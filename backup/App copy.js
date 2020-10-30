import React from 'react';
import {CssBaseline} from '@material-ui/core/'
import {Route} from 'react-router-dom'
// -----Components

import './App.css';
import NavBar from './app/components/navbar/NavBar';
import DashBoard from './app/pages/dashboard/DashBoard';
import Inventory from './features/inventory';
import PointOfSale from './features/pos'
import Report from './features/report'
import Login from './features/login'
//-----Test code


function App() {
  
  
  return (
    <div className="app">
      <CssBaseline/>
      <div className='app__header'>
        <NavBar/>
      </div>
      <div className='app__body'>
       
        <Route
          path='/inventory/'
          component={Inventory}
        />
        <Route
          exact
          path='/pos'
          component={PointOfSale}
        />
        <Route
          exact
          path='/report'
          component={Report}
        />
        <Route
          exact
          path='/login'
          component={Login}
        />
        
        <Route
          exact
          path='/'
          component={DashBoard}
        />
      </div>
    </div>
  );
}

export default App;
