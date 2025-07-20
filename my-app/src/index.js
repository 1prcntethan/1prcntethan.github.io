import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PWAPrompt from 'react-ios-pwa-prompt';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/><PWAPrompt copyTitle="Install WINGS calisthenics app" />
  </>
);
