import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PWAPrompt from 'react-ios-pwa-prompt';
import { AuthProvider} from "./config/auth-context.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <App />
      <PWAPrompt copyTitle="Install WINGS calisthenics app" />
    </AuthProvider>
  </>
);
