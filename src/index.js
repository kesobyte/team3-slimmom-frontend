import React from 'react';
import {PersistGate} from "redux-persist/integration/react";
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import './index.css';
import {App} from 'components/App';
import {customTheme} from "./theme/theme";
import {persistor, store} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename='/slimmom'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={customTheme}>
            <App/>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
