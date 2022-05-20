import { Box} from '@mui/system';
import {MenuWallet, StyledHeader} from './style';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import WalletInfo  from "../../components/WalletInfo";
import { dappConfig } from '../../config/dappConfig'


const Header = () => {

  const {title, logo} = dappConfig
  return( 
  <Box sx={StyledHeader}>
    <Box sx={{display: "flex"}}>
        <Logo title={title}
          logoImg={logo}
        />
    </Box>
    <Box sx={MenuWallet}>
      <Menu/>
      <WalletInfo/>
    </Box>
  </Box>

  )
  
};

export default Header;
