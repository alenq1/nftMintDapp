import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";
import axios from 'axios'
import { getAllJSDocTags } from "typescript";


interface ILoading { 
    loading: 'idle' | 'loading' | 'loaded' | 'failed';
}

export const useGalleryState = () => {

    
    const {active, account} = useWeb3React()
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

    const getGalleryInfo = useCallback (async() => {
        if(contract !== undefined && gallery.length === 0){
           
              
        setLoading('loading')
        
        const totalSupply: any = await contract?.methods.totalSupply().call()
        const balanceOf: any = await contract?.methods.balanceOf(account).call()
        const tempArray: any[] = Array.from({length: totalSupply}, (_, i) => i + 1)
        // let secondArray: any[] = []
        // let tempArray: any[] = []
        console.log("TEMP_ARRAY", tempArray)
        // for (let index = 1; index <= totalSupply; index++) {
        //     const ownerOf: any = await contract?.methods.ownerOf(index).call()
        //     const tokenURI = await contract?.methods.tokenURI(index).call()
        //     axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'))
        //     .then((response)=>{
        //         response.data.owner = ownerOf
        //         // console.log("RESPOINSE TOKEN URI",tokenURI, response.data)
        //         // setGallery( (state: any) => state.concat(response.data))
        //         tempArray.push(response.data)
                
        //     })
        //     .catch((error) => {
        //         console.log("ERROR TOKEN URI",error)
        //         setLoading('failed')
            
        //     })
        // }
        
        const secondArray = await Promise.all (tempArray.map(async (index)=>{     
            const ownerOf: any = await contract?.methods.ownerOf(index).call()
            const tokenURI = await contract?.methods.tokenURI(index).call()
            let result = {data: ""}
            axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'))
            .then((response)=>{
                response.data.owner = ownerOf
                // console.log("RESPOINSE A PEGAR",tokenURI, response.data)
                // setGallery( (state: any) => state.concat(response.data))
                // result.push(response.data)
                result.data = response.data
                // console.log("SE ESTA LLENANDO EL MALDITO SENDO ARRAY?",tokenURI, secondArray)
            })
            .catch((error) => {
                console.log("ERROR TOKEN URI",error)
                setLoading('failed')
            
            })
            console.log("QUIEN EN RESULT ANTES DE CONVERTIRSE", result)            
            return result
        }))
        console.log("QUE OÑOP PASA EN TEMNP ARRAY Y GALLERY", tempArray, secondArray)
        setGallery(secondArray)
        console.log("GALLERY",gallery, "OWNEDNFT",ownedNft)
        setLoading('loaded')
        
        
        
    } 
    }, [contract])


    const showOnlyOwned = useCallback (() => {
        console.log("showOnlyOwned", ownedNft)            
            setOwnedNft(gallery.filter( (item) => item.data.owner === account))    
    },[gallery, ownedNft, account])
    
    // console.log("defaultView IN CATEGORY", defaultView)
    // console.log("galleryCAHNGED?", gallery)


    const handleClickOpen = (index: any) => {
        console.log("ME PISARON PA ABRIR ", index)
        setOpen(true);
        setNftIndex(index)
    };
    
    const handleClose = () => {
        setOpen(false);
        setNftIndex(0)
    };


    useEffect(() => {        
        // console.log("CONTRACT, ACCOUNT ACTIVE", contract,account, active)    
        // console.log("LOADING EN USE EFFECT", loading)
        console.log("ANTES EL GALLERY INFO", loading)
        getGalleryInfo()
        console.log("DESPUES DE GALLERY INFO", gallery)            
        
    }, [getGalleryInfo])

    useEffect(() => {
        if(!defaultView){
            showOnlyOwned()
        }
        console.log("defaultView IN CATEGORY", defaultView)
    }, [defaultView])

    useEffect(() => {        
        // console.log("CONTRACT, ACCOUNT ACTIVE", contract,account, active)    
        // console.log("LOADING EN USE EFFECT", loading)
        if(!defaultView){
            showOnlyOwned()
        }
    }, [account])
    
    

    return {
        loading,
        gallery, 
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
