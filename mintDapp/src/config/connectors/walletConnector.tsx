import React, { Props, useEffect, useState } from 'react'
import { connector } from './provider'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'




// export async function connect(activate: any) {
//   try {
//     await activate(connector)
//     localStorage.setItem('isWalletConnected', 'true')
//   } catch (ex) {
//     console.log(ex)
//   }
// }

// export async function disconnect(deactivate: any) {
//   try {
//     deactivate()
//     localStorage.setItem('isWalletConnected', 'false')
//   } catch (ex) {
//     console.log(ex)
//   }
// }


function WalletConnector({ children }: any) {
  const { active, error, activate, deactivate, account, chainId, library } = useWeb3React()
  const [loading, setLoading] = useState(true)
  const [chainID, setChainId] = useState(0);
  const isUnSupportedChain = error instanceof UnsupportedChainIdError

  console.log( active, "WT CNT ACTIVE")
  console.log(error, "WT CNT ERROR")
  console.log(activate, "WT CNT ACTIVATE")
  console.log(deactivate, "WT CNT DEACTIVE")
  console.log(account,"WT CNT ACCOUNT")
  console.log(chainId, "WT CNT CHAINID")
  console.log(library,"WT CNT LIBARY")

  const prevConnected = localStorage.getItem("prevconnected")
  console.log(prevConnected, "PREV CONNECTED")
  // const connect = () => {
  //   connector
  //     .isAuthorized()
  //     .then((isAuthorized: any) => {
  //       setLoaded(true)
  //       if (isAuthorized && !networkActive && !networkError) {
  //         activateNetwork(connector)
  //         localStorage.setItem("prevConnected", "SI LOCALSTAOARE")
  //         console.log("PASA POR AQUI CONNECT")
  //       }  
  //       else{
  //         disconnect()
  //         setLoaded(false)  
  //       }      
  //     })
  //     .catch(() => {
  //       disconnect()
  //       setLoaded(true)
  //     })
  // }

  

  const connectWalletOnPageLoad = async () => {    
      try {
        await activate(connector)
        setLoading(false)
      } catch (ex) {
        console.log(ex)
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
