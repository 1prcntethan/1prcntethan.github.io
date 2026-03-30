import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./config/auth-context.jsx";

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

export function triggerInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
