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
  const { active, error, activate, deactivate, account } = useWeb3React()
  const [loading, setLoading] = useState(true)
  const [chainID, setChainId] = useState(0);
  const isUnSupportedChain = error instanceof UnsupportedChainIdError

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
    
  }, [activate, account])
  if (loading) {
    return <>Loading</>  
  }
    return children  
}

export default WalletConnector
