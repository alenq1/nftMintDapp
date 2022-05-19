import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";

const useHomeState = () => {

    const {active, chainId} = useWeb3React()
    const [name, setName] = useState<any>("")
    const{ contract}: any = useContract()
    // console.log(contract, "QUE ES CONTRACT")
    console.log(contract === null , "CONTRAVCT ES BNULLLLLLLLLL?????")

    const getMintType = async() => {

        if(contract !== null){
            const name: any = await contract.name()
            setName(name)
        }

    }

    useEffect(() => {
    
        if(contract !== null && active){
            getMintType()
        }
        // console.log("CONTRACT",contract)


    }, [active,contract, chainId]);


}
    
export default useHomeState