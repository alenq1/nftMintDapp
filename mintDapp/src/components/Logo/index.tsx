import { Box} from '@mui/system';
import {StyledLogo} from './style';
import { Link } from "react-router-dom";

interface ILogo {
  title: string,
  logoImg: any
}


const Logo = ({title, logoImg}: ILogo) => {
  
  return( 
  <Box sx={StyledLogo}>
   <Link to={"/"}>
      {logoImg}
      <h2>{title}</h2> 
    </Link>
  </Box>
  )
  
};

export default Logo;
