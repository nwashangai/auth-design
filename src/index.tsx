import React from 'react';
import ReactDOM from 'react-dom';

// third party packages
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';

require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
