import { useEffect, useState } from "react";
import { useContract } from "../../hooks/useContract";
import { useWeb3React } from "@web3-react/core";


enum MintState {
    INITIATED,
    WHITEMINT,
    PUBLICMINT,
    REVEAL,
    FINISHED,
}
    

export  const useMintStages = () => {
    
    const {active, account} = useWeb3React()
    const{ contract}: any = useContract()
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const [stage, setStage] = useState<MintState>(MintState.INITIATED)
    

    const getStages = async() => {
       
        // console.log(await contract.methods.isPaused().call(), "PAUSED")
        setIsPaused(await contract.isPaused())
        // console.log(await contract.stage().call(), "CONTRACT STAGE", MintState.INITIATED, "MINTSTATE")
        
        setStage(parseInt(await contract.stage()))
        // setStage(0)
        
    }

    useEffect(() => {
        // console.log(active, "ACTIVE", contract, "contract")
        if(active && contract){
            getStages()
        }        
    
    },[active, isPaused, stage, account])

    return {contract, isPaused, stage, account, setStage}

}
