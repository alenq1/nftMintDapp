import { Box} from '@mui/system';
import React from 'react';
import {StyledMain} from './style';

const Main = ({children}: any) => {

  return (

  <Box sx={StyledMain} >    
    {children}
  </Box>

  )
};

export default Main;
