import { useEffect, useState } from "react";
import { useContract } from "../../hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers"
import { useSnackbar } from 'notistack';


interface IMintNumbers { 
    minted: any,
    maxSupply: any,
    mintPriceWhite: any,
    mintPricePublic: any,
    maxMintPerWalletWhite: number,
    maxMintPerWalletPublic: number
}


export  const useMintState = () => {
    
    const {active, account, library, chainId} = useWeb3React()
    const{ contract}: any = useContract()
    const [mintNumbers, setMintNumbers] = useState<IMintNumbers>({
        minted: 0,
        maxSupply: 0,
        mintPriceWhite: 0,
        mintPricePublic: 0,
        maxMintPerWalletWhite: 0,
        maxMintPerWalletPublic: 0,
    })
    const[contractState, setContractState] = useState<number>(0)    
    const [quantity, setQuantity] = useState(1)
    const [isWhiteListed, setIsWhiteListed] = useState<boolean>(false)
    const { enqueueSnackbar } = useSnackbar();

    const getMintNumbers = async() => {    
        const maxSupply: any = (await contract.maxSupply()).toNumber()
        const totalSupply: any = (await contract.totalSupply()).toNumber()
        const mintPriceWhite: any = ethers.utils.formatEther((await contract.mintPriceWhite()).toString())
        const mintPricePublic: any = ethers.utils.formatEther((await contract.mintPricePublic()).toString())
        const maxMintPerWalletWhite: any = (await contract.maxMintPerWalletWhite()).toNumber()
        const maxMintPerWalletPublic: any = (await contract.maxMintPerWalletPublic()).toNumber()

        // console.log(mintPricePublic, "MMMMMMMMMMMAXXXXXXXXXXXXXXXX SSSSSSSSSPPPPPPPPPPYYYYYY")
        setMintNumbers({
            minted: totalSupply,
            maxSupply,
            mintPriceWhite,
            mintPricePublic,
            maxMintPerWalletWhite,
            maxMintPerWalletPublic
        })        
    }

    const getMintState = async() => {        
        const mintState: any = await contract.stage()   
        // console.log(mintState, "STADO DESDE EL CONTRATO", parseInt(mintState), "PARSED")         
        setContractState(parseInt(mintState))        
    }

    const checkWhiteListed = async() => {        
        const getWhitelisted: any = await contract.whiteListedAddress(account)            
        console.log(getWhitelisted, "getWhiteListed")
        setIsWhiteListed(getWhitelisted)
    }


    useEffect(() => {
        if(active && contract){
            // getMintState()
            getMintNumbers()
            getMintState()  
            // if(contractState === 1){
            //     checkWhiteListed()
            // }                 
        }        
        // console.log(mintNumbers, "mintNumbers")
    },[active, contract, chainId])

    useEffect(() => {
        if(active && contract){
            if(contractState === 1){
                checkWhiteListed()
            }                 
        }        
    },[contractState, mintNumbers.minted])


    const mint = async() => {

        if(contractState === 1){
            console.log("condicion whitelisted")
            try {
                const valueToSend = (quantity * mintNumbers.mintPriceWhite).toString()
                const tx =  await contract?.whiteMint(quantity, {value: ethers.utils.parseEther(valueToSend)})
                enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
                // console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
                tx.wait().then((result: any) => {
                    setMintNumbers((state: any) => ({
                        ...state,
                        minted: quantity + state.minted
                    }))
                    enqueueSnackbar(`transaction confirmed: You sucessfuly minted ${quantity} check on:${result.blockHash} `, {variant: 'success'})            
                    enqueueSnackbar(`check your nft on <a>https://localhost:3000/gallery<a> `, {variant: 'info'})            
                    // console.log(result, "RESULT MINTT")
                })   
            } 
            catch (error) {
                const formatError = error.message.slice(error.message.indexOf("message"), error.message.indexOf("data"))
                // console.log(`ERROR WHITE MINT`, formatError)
                // console.log(library.provider, "LIBRARYYYY ERRRRRORRRR")
                enqueueSnackbar(`error: ${formatError}`, {variant: 'error'})
                // enqueueSnackbar(`error: ${error?.data.message}`, {variant: 'error'})
            }
        }
        else if(contractState === 2){
            console.log("else if publicactive")
            try {
                const valueToSend = (quantity * mintNumbers.mintPricePublic).toString()
                const tx =  await contract?.publicMint(quantity, {value: ethers.utils.parseEther(valueToSend)})
                // const tx =  await contract?.publicMint(quantity, {value: quantity * mintNumbers.mintPricePublic})
                enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
                console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
                tx.wait().then((result: any) => {
                    setMintNumbers((state: any) => ({
                        ...state,
                        minted: quantity + state.minted
                    }))
                    enqueueSnackbar(`transaction confirmed: You sucessfuly minted ${quantity} check on:${result.blockHash}`, {variant: 'success'})                    
                    enqueueSnackbar(`check your nft on <a>https://localhost:3000/gallery<a> `, {variant: 'info'})            
                    console.log(result, "RESULT MINTT")
                })   
            } 
            catch (error) {
                console.log(`ERROR PUBLIC MINT`, error.message)
                const formatError = error.message.slice(error.message.indexOf("message"), error.message.indexOf("data"))
                console.log(`ERROR WHITE MINT`, formatError)
                console.log(library.provider, "LIBRARYYYY ERRRRRORRRR")
                enqueueSnackbar(`error: ${formatError}`, {variant: 'error'})
                // enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
            }
        }
        else {
            alert("not allow to Mint")
        }                    
    }
    // console.log(contractState, "STATE ANTES DE MEINT SECTION INDEX")

    return {library, contract, mintNumbers, mint, quantity, setQuantity, contractState}

}
