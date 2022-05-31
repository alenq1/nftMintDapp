import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";
import axios from 'axios'
import {chainMiscData} from '../../config/contract/contract'

interface ILoading { 
    loading: 'idle' | 'loading' | 'loaded' | 'failed';
}

export const useGalleryState = () => {

    
    let contractAddress
    const {active, account, chainId} = useWeb3React()
    const {contract} = useContract()       
    const [loading, setLoading] = useState('idle')
    const [gallery, setGallery] = useState<any[]>([])
    const [ownedNft, setOwnedNft] = useState<any[]>([])    
    const [currentAccount, setCurrentAccount] = useState(account)
    const [defaultView, setDefaultView] = useState<boolean>(true)
    const [open, setOpen] = useState(false);
    const [nftIndex, setNftIndex] = useState<any>(-1)
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if(newValue === 1){
            
            setDefaultView(false)
            showOnlyOwned()
        }
        else {
            setDefaultView(true)
        }
        setValue(newValue);
    };

    const getGalleryInfo = async() => {
        if(contract !==null && gallery.length === 0){
            setLoading('loading')
            
            // console.log(contract)
            const contractAddress = contract.address
            const totalSupply: any = await contract?.totalSupply()
            const balanceOf: any = await contract?.balanceOf(account)
            const tempArray: any[] = Array.from({length: totalSupply}, (_, i) => i + 1)    
            // console.log(tempArray)

            const secondArray = await Promise.allSettled (tempArray.map(async (index)=>{     
                const ownerOf: any = await contract?.ownerOf(index)
                const tokenURI = await contract?.tokenURI(index)
                let result = {data: ""}
                // console.log(tokenURI)
                // const formatURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/').replace(".json", "").slice(0,tokenURI <9 ? -1 : -2)
                const formatURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/')
                // console.log(formatURI)
                await axios.get(formatURI)
                .then((response)=>{
                    const miscData: any = chainMiscData(chainId ?? 0, contractAddress, index)
                    response.data.owner = ownerOf
                    response.data.indexToOpen = index - 1
                    response.data.opensea = miscData.opensea
                    response.data.explorer = miscData.explorer
                    // console.log(tokenURI, response.data)                    
                    result.data = response.data
                    // console.log(tokenURI, secondArray)
                })
                .catch((error) => {
                    console.log("ERROR TOKEN URI",error)
                    setLoading('failed')
                
                })
                // console.log(result)            
                return result
            }))
            // console.log(tempArray, secondArray)
            setGallery(secondArray)
            // console.log("GALLERY",gallery, "OWNEDNFT",ownedNft)
            setLoading('loaded')                    
        } 
    }


    const showOnlyOwned = useCallback (() => {
        // console.log(gallery)            
        // console.log(ownedNft)            
            setOwnedNft(gallery.filter( (item) => item.value.data.owner === account))    
    },[gallery, ownedNft, account])    
        // console.log(defaultView)
        // console.log(gallery)

    const handleClickOpen = (index: any) => {
        // console.log(index)
        setOpen(true);
        setNftIndex(index)
    };
    
    const handleClose = () => {
        setOpen(false);
        setNftIndex(0)
    };


    useEffect(() => {        
        // console.log(contract,account, active)    
        // console.log(loading)        
        getGalleryInfo()
        // console.log(gallery)                
    }, [contract])

    useEffect(() => {
        if(!defaultView){
            showOnlyOwned()
        }
        // console.log(defaultView)
    }, [defaultView])

    useEffect(() => {        
        // console.log(contract,account, active)    
        // console.log(loading)
        if(!defaultView){
            showOnlyOwned()
        }
    }, [account])

    // console.log(gallery)
    
    return {
        loading,
        gallery, 
        // chainId,
        // contractAddress,
        ownedNft, 
        defaultView, 
        setDefaultView, 
        showOnlyOwned,
        open,
        setOpen,
        nftIndex,
        setNftIndex,
        handleChange,
        handleClickOpen,
        handleClose
    }
}
