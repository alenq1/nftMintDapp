import { Box} from '@mui/system';
import {StyledTitle} from './style';
import { Link } from "react-router-dom";




const Title = () => {
  
  return( 
  <Box sx={StyledTitle}>
   <Link to={"/"}>
      LOGO
    </Link>
  </Box>
  )
  
};

export default Title;
