import React from 'react';
import ReactDOM from 'react-dom';
// adding stripe
import { loadStripe } from '@stripe/stripe-js'
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);