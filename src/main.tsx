import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';
import { ThemeProvider } from './components/providers/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
    </Provider>

  </React.StrictMode>
);