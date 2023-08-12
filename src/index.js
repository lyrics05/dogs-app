import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from  "./redux/store/store"
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
    <Auth0Provider
        domain="dev-c00x7crpo3lpgncd.us.auth0.com"
        clientId="YqHTT8sw5ppFwf8QIIUWaKGDfl9vfEQV"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
    >
    <App />
    </Auth0Provider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

