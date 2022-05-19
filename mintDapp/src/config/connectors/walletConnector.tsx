import React, { Props, useEffect, useState } from 'react'
import { connector } from './provider'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'



function WalletConnector({ children }: any) {
  const { active, error, activate, deactivate, account, chainId, library } = useWeb3React()
  const [loading, setLoading] = useState(true)
  const [chainID, setChainId] = useState(0);
  const isUnSupportedChain = error instanceof UnsupportedChainIdError

  // console.log( active, "WT CNT ACTIVE")
  // console.log(error, "WT CNT ERROR")
  // console.log(activate, "WT CNT ACTIVATE")
  // console.log(deactivate, "WT CNT DEACTIVE")
  // console.log(account,"WT CNT ACCOUNT")
  // console.log(chainId, "WT CNT CHAINID")
  // console.log(library,"WT CNT LIBARY")

  const prevConnected = localStorage.getItem("isWalletConnected")

  const connectWalletOnPageLoad = async () => {    
      try {
        await activate(connector)
        setLoading(false)
      } catch (error) {
        console.log(error, "ERRROR EN CONECTAR AL RERESH")
      }    
  }

  useEffect(() => {   
    if (localStorage?.getItem('isWalletConnected') === 'true') {
      connectWalletOnPageLoad()
    }   
    else{
            setLoading(false)
    }
    
  }, [activate, account, chainId])
  
  if (loading) {
    return <>Loading</>  
  }
    return children  
}

export default WalletConnector
