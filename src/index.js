import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppReceitasProvider from './context/AppReceitasProvider';
import SearchBarProvider from './context/SearchBarProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AppReceitasProvider>
      <SearchBarProvider>
        <App />
      </SearchBarProvider>
    </AppReceitasProvider>,
  );

serviceWorker.unregister();
