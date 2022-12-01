import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gjsq7wdjzklksj60.us.auth0.com"
    clientId="wrxU01Z1BJJsKLWnJhnz5iRV5N5fjkpt"
    redirectUri={window.location.origin} >
    <App />
  </Auth0Provider>
);

//domain : dev-gjsq7wdjzklksj60.us.auth0.com
//client id : wrxU01Z1BJJsKLWnJhnz5iRV5N5fjkpt


