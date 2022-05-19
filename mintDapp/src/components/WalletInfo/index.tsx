import { Box} from '@mui/system';
import {StyledWalletInfo, DisconnectButton, WalletButton} from './style';
import Button from "../../components/Button"; 
import useWalletInfo from "./utils"


const WalletInfo = () => {

  const {
    active,
    address,
    balance,
    connect,
    disconnect,
    isUnSupportedChain
  } = useWalletInfo()


  return( 
      <Box sx={StyledWalletInfo}>
      {active ?
        <>
          <Button text={ `${address} Balance: ${balance}`} styled={WalletButton} action={connect}/>    
          <Button text={"x"} action={disconnect} styled={DisconnectButton}/>    
        </>
      :
        <Button text={ isUnSupportedChain? "Unsupported Network" : "connect"} styled={WalletButton} action={connect}/>    
      }   
      </Box>
  )  
};

export default WalletInfo;
