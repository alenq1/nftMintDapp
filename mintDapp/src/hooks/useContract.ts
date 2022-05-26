import { useMemo, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers"
import {contractNetworks, getContractAbiAddress} from "../config/contract/contract";


export const useContract = () => {
    const {active, library, chainId} = useWeb3React()
    // let contract;
    // console.log(active, chainId, library?.provider)    
    const [contract, setContract] = useState<any>(null)

    const getContract = (chainId: number | undefined) => {
        const signer = library?.getSigner()
        const {address, abi} = getContractAbiAddress(chainId)
        // console.log(address, abi)
        const contractInstant =  new ethers.Contract( address, abi, signer)
        setContract(contractInstant)
    }
    
    useEffect(() => {
        if((active && chainId !== 0) && contractNetworks.includes(chainId)){
            getContract(chainId)            
        }
        // console.log(contract)
    }, [active, chainId, library])

    // console.log(contract)

    return {contract}

}

// 0x346051D574092f0BcD437d9B107e7D3A37B95184, 0xA4A4c38b3b590e41B00dECD9854990200127bEAC, 0xc3bf024C9503CFDE091594F8bdc4eDDcfcE43Ba8
// unrevealed
// ipfs://QmUkuNz8pfFiZnAB6DgdXk3YAuLVZAHUb9yEP97qJbbTPz/
//metadata
// ipfs://QmdbFkEehaeBawyNvRG6UEDNBhMe4m4uobEPwD84jPraYd/
