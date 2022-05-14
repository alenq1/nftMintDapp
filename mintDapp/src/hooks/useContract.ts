import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers"
import {contractNetworks, getContractAbiAddress} from "../config/contract/contract";


export const useContract = () => {
    const {active, library, chainId} = useWeb3React()

    // console.log(library.provider, "LIBRARRRRRRRYYYYYYY")
    const contract = useMemo(() => {
        const signer = library.getSigner()
        const {address, abi} = getContractAbiAddress(chainId)
        // console.log(address, "AAAAAADREEEEEESSSS", abi, "ABBBBBBBBBIIIIIIIIBIBIBBIBBBBIBIBIB")
        if(active && contractNetworks.includes(chainId)){            
            return new ethers.Contract( address, abi, signer)
        } 
    },
    [active, chainId, library?.Contract]);
    

    return {contract}
}

//whitelist 1 : 0x346051D574092f0BcD437d9B107e7D3A37B95184
//whitelist 2 : 0xA4A4c38b3b590e41B00dECD9854990200127bEAC
//whitelist 3 :  0xc3bf024C9503CFDE091594F8bdc4eDDcfcE43Ba8