import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppReceitasProvider from './context/AppReceitasProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AppReceitasProvider>
      <App />
    </AppReceitasProvider>,
  );

serviceWorker.unregister();
