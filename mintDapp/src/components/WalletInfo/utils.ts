
import { useCallback, useState, useEffect } from 'react'
import {  useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connector } from "../../config/connectors/provider";
import {ethers} from "ethers"


const useWalletInfo = () => {

    const {active, activate, deactivate, account, error, library, chainId} = useWeb3React()

    // console.log(library, "LIBRARY EN WALLET INFO")
    const isUnSupportedChain = error instanceof UnsupportedChainIdError
    const [chainID, setChainId] = useState(0);
    const [balance, setBalance] = useState<any>(0)
    const [address, setAddress] = useState<any>(0)

    useEffect(() => {

    if(active && account){
        setAddress(`${account?.substr(0, 6)}...${account?.substr(-4)}`)
        getBalance()
    }
        
    },[active, account, chainId])

    const getBalance = useCallback (async() => {
        const rawBalance = await library.getBalance(account)      
        const cleanBalance = parseFloat(ethers.utils.formatEther(rawBalance)).toFixed(4)
        // console.log("dfasdfsd", typeof(cleanBalance))
        setBalance(cleanBalance)
    }, [account, chainId])

    const connect = async() => {

        activate(connector)
        localStorage.setItem('isWalletConnected', 'true')
        // console.log("isUnsupported", isUnSupportedChain, "ACCCOUNTT", account)

    }

    const disconnect = async() => {
        localStorage.removeItem('isWalletConnected')
        deactivate()
    }
    
    return {
        active,
        address,
        balance,
        connect,
        disconnect,
        isUnSupportedChain
    }
}

export default useWalletInfo

