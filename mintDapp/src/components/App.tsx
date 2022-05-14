// import {useEffect} from 'react';
import  Header  from "../layouts/Header";
import Footer from "../layouts/Footer";
import CssBaseline from '@mui/material/CssBaseline';
import { appStyle } from "../theme/default";
import Box from '@mui/material/Box';
import WrappedRoutes from "../config/routes/routes";
import { SnackbarProvider } from 'notistack';
// import {useSelector, useDispatch} from 'react-redux';
// import {setContract} from '../store/contract/contractSlice'
// import {useContract} from '../hooks/useContract';

function App() {


  return (    
      <CssBaseline>        
          <SnackbarProvider>
            <Box sx={appStyle}>        
                <Header/>
                  <WrappedRoutes/>
                <Footer/>     
            </Box>
          </SnackbarProvider>
      </CssBaseline>    
  );
}

export default App;
