import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// React.StrictMode
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Header/>
      <App />
      <Footer/>
  </BrowserRouter>
);


