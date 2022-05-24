import { Box} from '@mui/system';
import {MenuLinks, StyledHeader, BoxLogo, Wallet} from './style';


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import WalletInfo  from "../../components/WalletInfo";
import { dappConfig } from '../../config/dappConfig'


const Header = () => {

  const {title, logo} = dappConfig
  const theme = useTheme();
  const smallView = useMediaQuery(theme.breakpoints.down('tablet'));

  console.log(smallView, "MATCVHES QUERY")
  return( 
  <Box sx={StyledHeader}>
    <Box sx={BoxLogo}>
        <Logo title={title}
          logoImg={logo}
        />
    </Box>
    <Box sx={MenuLinks}>
      {
        // matches ?

        // <IconButton>
        //   <Menu smview={matches}/>
        // </IconButton>

        // :
        <Menu smallView={smallView}/>

      }
      
    </Box>
    <Box sx={Wallet}>
      <WalletInfo/>
    </Box>
    
  </Box>

  )
  
};

export default Header;
