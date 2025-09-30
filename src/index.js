import React from 'react';
import ReactDOM from 'react-dom/client';
import './critical.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Defer non-critical CSS
const loadStyles = () => {
  const stylesheet = document.createElement('link');
  stylesheet.href = '/static/css/main.967c434f.css';
  stylesheet.rel = 'stylesheet';
  document.head.appendChild(stylesheet);
};

// Load non-critical CSS during idle time
if (window.requestIdleCallback) {
  window.requestIdleCallback(loadStyles);
} else {
  window.setTimeout(loadStyles, 0);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals();
