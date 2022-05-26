import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";


export const useAdminCollectionState = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const {active, account} = useWeb3React()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const {contract} = useContract()
    // const [gallery, setGallery] = useState<any[]>([])    
    // const [currentAccount, setCurrentAccount] = useState(account)
    // const [defaultView, setDefaultView] = useState<boolean>(true)    
    // console.log(contract)

    const checkAdminAccount = useCallback (async() => {
        
        const isAdmin: any = await contract?.owner()
        // console.log(isAdmin)
        setIsAdmin(isAdmin === account)            
    }, [contract, account, isAdmin, active])
    

    useEffect(() => {        
        setLoading(true)
        if(contract){
            checkAdminAccount()
        }
        else{
            setIsAdmin(false)
        }
        setLoading(false)
        
    }, [checkAdminAccount])
    

    return {loading, isAdmin, active, account, contract}
}