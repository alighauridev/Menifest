import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToastContainer theme='dark' />
  </BrowserRouter>,
  document.getElementById('root')
);


