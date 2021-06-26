import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import "./App.css";
import { Provider } from "react-redux";
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
