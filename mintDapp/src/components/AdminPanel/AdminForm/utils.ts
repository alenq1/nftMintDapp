import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract, contractAddress } from "../../../hooks/useContract";


const utilsForm = () => {
  
    const handleSwitch = async(event: React.ChangeEvent<HTMLInputElement>) => {
  
        const {name, checked} = event.target
  
    //     if(name === 'setWhiteSaleActive') {
    //         await contract.methods.setWhiteSaleActive([checked]).send({ from: account})
    //         .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
    //         .on("receipt", (result:any) => {
    //             console.log("resultTx",result.status,"txnHash", result.transactionHash )
    //             setFields((state) => ({
    //                 ...state,
    //                 [name]: checked
    //             }))
    //         })
    //         .on("error", (error: any) => alert(error.message))
    //         .catch((error:any) => alert(error.message))
    //     }
    
    // if(name === 'setPause') {
    //     await contract.methods.setPause().send({ from: account})
    //     .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
    //     .on("receipt", (result:any) => {
    //         console.log("resultTx",result.status,"txnHash", result.transactionHash )
    //         setFields((state) => ({
    //             ...state,
    //             [name]: checked
    //         }))
    //     })
    //     .on("error", (error: any) => alert(error.message))
    //     .catch((error:any) => alert(error.message))
    // }
    
    // if(name === 'enableBurn') {
    //     await contract.methods.enableBurn().send({ from: account})
    //     .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
    //     .on("receipt", (result:any) => {
    //         console.log("resultTx",result.status,"txnHash", result.transactionHash )
    //         setFields((state) => ({
    //             ...state,
    //             [name]: checked
    //         }))
    //     })
    //     .on("error", (error: any) => alert(error.message))
    //     .catch((error:any) => alert(error.message))
    // }

    
    // console.log("fields", fields )
    };
    
}

export default utilsForm