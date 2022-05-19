import { useCallback, useState, useEffect } from 'react'
// import { Network } from '@web3-react/network'
import {  useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useSelector, useDispatch } from 'react-redux'
import { Box} from '@mui/system';
import {MenuWallet, StyledHeader} from './style';
import Logo from "../../components/Logo"; 
import Menu from "../../components/Menu"; 
import Button from "../../components/Button"; 
import WalletInfo  from "../../components/WalletInfo";
import { connector } from "../../config/connectors/provider";
import { Link } from "react-router-dom";
// import { metaMask, hooks } from "../../config/connectors/provider";
// import {useWeb3Connector} from '../../config/connectors/web3Connector';
import { mint, loadNFTS, loadWeb3Account, loadWeb3Contract  } from "../../store/web3/web3Slice";



const Header = () => {

  const {active, activate, deactivate, account, error, library} = useWeb3React()

  const isUnSupportedChain = error instanceof UnsupportedChainIdError
  const [chainID, setChainId] = useState(0);
  const [balance, setBalance] = useState<any>(0)
 

  // const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider } = hooks
  // const [balance, setBalance] = useState<any>(0);
  // const web3Connector = useWeb3Connector()  
  // const accounts = useAccounts() 
  // // const error = useError() || 0
  // const isActivating = useIsActivating()
  // const isActive = useIsActive() 
  // const provider = useProvider()
  // const ENSNames = useENSNames(provider)
  // const isNetwork = metaMask instanceof Network
  // const chainIds = (isNetwork ? Object.keys(1) : Object.keys(1)).map((chainId) => Number(chainId))
  
  useEffect(() => {
    
    // connect()
    // console.log("ACCOUNT", accounts, "isActive", isActive, "provider", provider, "ACTIVATING", isActivating)
    // getBalances()
    // const web3 = await getWeb3();
    // await loadWeb3Account(web3);
    // const contract = await loadWeb3Contract(web3);
    // await loadNFTS(contract);
    // console.log("UseEffect",web3Connector)

    // console.log("BALANCE ES", balance[0])
  },[active])

  const getBalance = useCallback (async() => {
    const balance = await library.eth.getBalance(account)
    setBalance(balance)
  }, [])

  const connect = async() => {
    
    activate(connector)
    console.log("isUnsupported", isUnSupportedChain, "ACCCOUNTT", account)
  }
  
  const disconnect = async() => {
    deactivate()
  }
  
  return( 
  <Box sx={StyledHeader}>
    <Box sx={{display: "flex"}}>
        <Logo title={"Pixel Invaders"}/>
    </Box>
    <Box sx={MenuWallet}>
      <Menu/>
      <WalletInfo/>
    </Box>
  </Box>

  )
  
};

export default Header;
