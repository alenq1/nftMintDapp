import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import { ThemeProvider} from '@mui/material/styles'
import { theme } from "./theme/default";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./config/connectors/provider";
import  WalletConnector from "./config/connectors/walletConnector";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* <Provider store={store}> */}
      <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <WalletConnector>
            <App />
          </WalletConnector>
        </ThemeProvider>
      </BrowserRouter>
      </Web3ReactProvider>
    {/* </Provider>     */}
  </React.StrictMode>
)
