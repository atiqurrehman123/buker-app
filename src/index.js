import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from './pages/Admin/AdminLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user =localStorage.getItem("adminlogin");
console.log(user,"user")
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
    {user?<App />:<AdminLogin/>}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
