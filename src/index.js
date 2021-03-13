import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BlogState from './utils/context'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <BlogState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </BlogState>
    </React.StrictMode>,
    document.getElementById('root')
  );