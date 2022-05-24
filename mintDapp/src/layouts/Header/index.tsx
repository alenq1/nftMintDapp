import { Box} from '@mui/system';
import {MenuLinks, StyledHeader, BoxLogo, Wallet} from './style';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import WalletInfo  from "../../components/WalletInfo";
import { dappConfig } from '../../config/dappConfig'


const Header = () => {

  const {title, logo} = dappConfig
  return( 
  <Box sx={StyledHeader}>
    <Box sx={BoxLogo}>
        <Logo title={title}
          logoImg={logo}
        />
    </Box>
    <Box sx={MenuLinks}>
      <Menu/>
    </Box>
    <Box sx={Wallet}>
      <WalletInfo/>
    </Box>
    
  </Box>

  )
  
};

export default Header;
