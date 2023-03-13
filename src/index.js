import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Provider store={store}>
    <App />
    </Provider>
  </div>
  
  
);

