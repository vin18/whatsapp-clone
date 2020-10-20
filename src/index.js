import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WhatsappState from './context/WhatsappState';

ReactDOM.render(
  <React.StrictMode>
    <WhatsappState>
      <App />
    </WhatsappState>
  </React.StrictMode>,
  document.getElementById('root')
);
