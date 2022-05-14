import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";
import axios from 'axios'



export const useAdminCollectionState = () => {

    const [loading, setLoading] = useState(false)
    const {active, account} = useWeb3React()
    const [gallery, setGallery] = useState<any[]>([])
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [currentAccount, setCurrentAccount] = useState(account)
    const [defaultView, setDefaultView] = useState<boolean>(true)
    const {contract} = useContract()


    console.log(contract, "EEEEEESSSSSSSSSS CIONTRATTTTTTTTTTO")

    const checkAdminAccount = useCallback (async() => {
        
            const isAdmin: any = await contract?.owner()
            console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIS  ADMIN", isAdmin)
            setIsAdmin(isAdmin === account)
            
            
        //     const totalSupply: any = await contract?.methods.totalSupply().call()
        //     const balanceOf: any = await contract?.methods.balanceOf(account).call()
        //     const tempArray: any[] = Array.from({length: totalSupply}, (_, i) => i + 1)
        //     console.log("TEMP_ARRAY", tempArray)
        //     tempArray.map(async (index)=>{     
        //         const ownerOf: any = await contract?.methods.ownerOf(index).call()
        //         const tokenURI = await contract?.methods.tokenURI(index).call()
        //         axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'))
        //         .then((response)=>{
        //             response.data.owner = ownerOf
        //             // console.log("RESPOINSE TOKEN URI",tokenURI, response.data)
        //             setGallery( (state: any) => state.concat(response.data))
        //         })
        //         .catch((error) => console.log("ERROR TOKEN URI",error))
        //     })

        // console.log("GALLERY",gallery, "OWNEDNFT",ownedNft)
        
    }, [contract, account, isAdmin, active])


    // const showOnlyOwned = useCallback (() => {
    //     console.log("showOnlyOwned", ownedNft)        
    //         setOwnedNft(gallery.filter( (item) => item.owner === account))    
    // },[gallery, ownedNft])
    

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