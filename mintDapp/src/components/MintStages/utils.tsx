import { useEffect, useState } from "react";
import { useContract } from "../../hooks/useContract";
import { useWeb3React } from "@web3-react/core";


enum MintStage {
    INITIATED,
    WHITEMINT,
    PUBLICMINT,
    REVEAL,
    FINISHED,
}
    

export  const useMintStages = () => {
    
    const {active, account, chainId} = useWeb3React()
    const{ contract}: any = useContract()
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const [stage, setStage] = useState<MintStage>(MintStage.INITIATED)
    

    const getStages = async() => {
       
        // console.log(await contract.methods.isPaused().call(), "PAUSED")
        const checkIsPaused = await contract.isPaused()
        setIsPaused(checkIsPaused)
        // console.log(await contract.stage().call(), "CONTRACT STAGE", MintStage.INITIATED, "MINTSTAgE")
        
        const checkStage = await contract.stage()
        setStage(checkStage)
        // setStage(0)
        
    }

    useEffect(() => {
        // console.log(active, "ACTIVE", contract, "contract")
        if(active && contract){
            getStages()
        }        
        else{
            setStage(0)
            setIsPaused(true)
        }
    
    },[active, isPaused, stage, account, chainId])

    console.log(stage, "STAGE REFRESHH")

    return {contract, isPaused, stage, account, setStage}

}
