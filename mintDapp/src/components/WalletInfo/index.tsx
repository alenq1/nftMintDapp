import { useCallback, useState, useEffect } from 'react'
import {  useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connector } from "../../config/connectors/provider";
// import { connect, disconnect } from "../../config/connectors/walletConnector";
import { Box} from '@mui/system';
import {StyledWalletInfo, DisconnectButton, WalletButton} from './style';
import Button from "../../components/Button"; 
import { parse } from 'url';
import {ethers} from "ethers"


const WalletInfo = () => {

  const {active, activate, deactivate, account, error, library} = useWeb3React()

  // console.log(library, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  const isUnSupportedChain = error instanceof UnsupportedChainIdError
  const [chainID, setChainId] = useState(0);
  const [balance, setBalance] = useState<any>(0)
  const [address, setAddress] = useState<any>(0)

  useEffect(() => {
    
    if(account){
      setAddress(`${account?.substr(0, 6)}...${account?.substr(-4)}`)
      getBalance()
    }
        
  },[active, account])

  const getBalance = useCallback (async() => {
      const rawBalance = await library.getBalance(account)      
      const cleanBalance = parseFloat(ethers.utils.formatEther(rawBalance)).toFixed(4)
      // console.log("dfasdfsd", typeof(cleanBalance))
      setBalance(cleanBalance)
  }, [account])

  const connect = async() => {
    
    activate(connector)
    localStorage.setItem('isWalletConnected', 'true')
    console.log("isUnsupported", isUnSupportedChain, "ACCCOUNTT", account)
  
  }
  
  const disconnect = async() => {
    localStorage.removeItem('isWalletConnected')
    deactivate()
  }

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
