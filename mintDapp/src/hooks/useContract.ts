import { useMemo, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers"
import {contractNetworks, getContractAbiAddress} from "../config/contract/contract";


export const useContract = () => {
    // const {active, library, chainId} = useWeb3React()
    // let contract;
    // console.log(active, chainId, library?.provider, "LIBRARRRRRRRYYYYYYY")
    // if((active && chainId !== 0) && contractNetworks.includes(chainId)){
    //     contract = useMemo(() => {
    //         const signer = library?.getSigner()
    //         const {address, abi} = getContractAbiAddress(chainId)
    //         // console.log(address, "AAAAAADREEEEEESSSS", abi, "ABBBBBBBBBIIIIIIIIBIBIBBIBBBBIBIBIB")
    //         if((active && chainId) && contractNetworks.includes(chainId)){            
    //             return new ethers.Contract( address, abi, signer)
    //         } 
    //     },
    //     [active, chainId]);

    //     console.log(contract, "DEVUELKVE CON TRACT LLLLEEEEEEENOO")
    //     return {contract}
    // }
    // else {
    //     console.log({contract: null}, "DEVUELKVE CON TRACT VACIO")
    //     return {contract: null}
    // }
    
    
    const {active, library, chainId} = useWeb3React()
    // let contract;
    
    // console.log(active, chainId, library?.provider, "LIBRARRRRRRRYYYYYYY")
    
    const [contract, setContract] = useState<any>(null)

    const getContract = (chainId: number | undefined) => {
        const signer = library?.getSigner()
        const {address, abi} = getContractAbiAddress(chainId)
        // console.log(address, "AAAAAADREEEEEESSSS", abi, "ABBBBBBBBBIIIIIIIIBIBIBBIBBBBIBIBIB")
        const contractInstant =  new ethers.Contract( address, abi, signer)
        setContract(contractInstant)
    }
    

    useEffect(() => {
        if((active && chainId !== 0) && contractNetworks.includes(chainId)){
            getContract(chainId)            
        }
        // console.log(contract, "CONTRACT EN USE EFFECTY")

    }, [active, chainId, library])

    // console.log(contract, "ANTESS DE DEVEOLVVVVERR USE CONTRACTT")

    return {contract}

}

//whitelist 1 : 0x346051D574092f0BcD437d9B107e7D3A37B95184 cuanta 5
//whitelist 2 : 0xA4A4c38b3b590e41B00dECD9854990200127bEAC cuenta 6
//whitelist 3 :  0xc3bf024C9503CFDE091594F8bdc4eDDcfcE43Ba8 cuanta 3