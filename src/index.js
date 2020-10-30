import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

import { normalize } from 'styled-normalize'
import './index.css'


const GlobalStyle=createGlobalStyle`
${normalize}

// You can continue writing global styles here
body {
  padding: 0;
  font-family: 'Roboto', sans-serif;  
}
`

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

