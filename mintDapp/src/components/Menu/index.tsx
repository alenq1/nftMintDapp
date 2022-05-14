import { Box} from '@mui/system';
import { Link } from "react-router-dom";
import {StyledMenu} from './style';


const Menu = () => {
  
  return( 
  <Box sx={StyledMenu}>
    <Link to="/gallery">Gallery</Link>
    <Link to="/admin">Admin</Link>
  </Box>
  )
  
};

export default Menu;
