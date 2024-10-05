import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  // <Router basename="/team3-slimmom-frontend">
  <App />
  // </Router>
  // </PersistGate>
  // </Provider>
  // </React.StrictMode>
);
