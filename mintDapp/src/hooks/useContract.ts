import { useMemo, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers"
import {contractNetworks, getContractAbiAddress} from "../config/contract/contract";


export const useContract = () => {
    const {active, library, chainId} = useWeb3React()
    // let contract;
    // console.log(active, chainId, library?.provider)    
    const [contract, setContract] = useState<any>(null)

    const getContract = (chainId: any) => {
        const signer = library?.getSigner()
        const {address, abi} = getContractAbiAddress(chainId)
        // console.log(address, abi)
        const contractInstant =  new ethers.Contract( address, abi, signer)
        setContract(contractInstant)
    }
    
    useEffect(() => {
        if((active && chainId !== 0) && contractNetworks.includes(chainId ?? 0)){
            getContract(chainId)            
        }
        // console.log(contract)
    }, [active, chainId, library])

    // console.log(contract)

    return {contract}

}
