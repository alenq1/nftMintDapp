import { Box} from '@mui/system';
import {StyledLogo} from './style';
import { Link } from "react-router-dom";
import {ReactComponent as Svgss} from '../../assets/img/logo.svg';



interface ILogo {
  title: string
}


const Logo = ({title}: ILogo) => {
  
  return( 
  <Box sx={StyledLogo}>
   <Link to={"/"}>
     <Svgss/>
     <h2>{title}</h2> 
    </Link>
  </Box>
  )
  
};

export default Logo;
