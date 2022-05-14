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
    
    const {active, account, library} = useWeb3React()
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

            console.log(mintPricePublic, "MMMMMMMMMMMAXXXXXXXXXXXXXXXX SSSSSSSSSPPPPPPPPPPYYYYYY")
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
            setContractState(parseInt(mintState))        
    }

    const checkWhiteListed = async() => {        
        const getWhitelisted: any = await contract.whiteListedAddress(account)            
        console.log(getWhitelisted, "getWhiteListed")
        setIsWhiteListed(getWhitelisted)
    }


    useEffect(() => {
        if(active && contract){
            getMintState()
            getMintNumbers()
            if(contractState === 0){
                checkWhiteListed()
            }                 
        }        
        console.log(mintNumbers, "mintNumbers")
    },[active, contract, contractState])

    // useEffect(() => {
           
    // },[active, contractState])


    const mint = async() => {


        if(contractState === 1){
            console.log("condicion whitelisted")
            try {
                const valueToSend = (quantity * mintNumbers.mintPriceWhite).toString()
                const tx =  await contract?.whiteMint(quantity, {value: ethers.utils.parseEther(valueToSend)})
                enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
                console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
                tx.wait().then((result: any) => {
                    // setContractDetails((state: any) => ({
                    //     ...state,
                    //     [getContractField]: checked
                    // }))
                    enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                    console.log(result, "RESULT MINTT")
                })   
            } 
            catch (error) {
                console.log(`ERROR WHITE MINT`, error)
                enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
            }

            
            // .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
            // .on("receipt", (result:any) => console.log("resultTx",result.status,"txnHash", result.transactionHash ))
            // .on("error", (error: any) => alert(error.message))    
            // .catch((error:any) => alert(error.message))
        }
        else if(contractState === 2){
            console.log("else if publicactive")
            //     await contract?.methods.publicMint(quantity).send({
            //     from: account,
            //     value: quantity*mintNumbers.mintPricePublic,
            // })
            // .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
            // .on("receipt", (result:any) => console.log("resultTx",result.status,"txnHash", result.transactionHash ))
            // .on("error", (error: any) => console.log(error))    
            // .catch((error:any) => console.log(error))
            try {
                const tx =  await contract?.publicMint(quantity, {value: quantity * mintNumbers.mintPricePublic})
                enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
                console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
                tx.wait().then((result: any) => {
                    // setContractDetails((state: any) => ({
                    //     ...state,
                    //     [getContractField]: checked
                    // }))
                    enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                    console.log(result, "RESULT MINTT")
                })   
            } 
            catch (error) {
                console.log(`ERROR PUBLIC MINT`, error.message)
                enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
            }
        }
        else {
            alert("not allow to Mint")
        }            
    }

    return {library, contract, mintNumbers, mint, quantity, setQuantity, contractState}

}
