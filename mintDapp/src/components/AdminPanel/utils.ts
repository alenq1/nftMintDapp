import { useEffect, useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContract, contractAddress } from "../../hooks/useContract";
import { useSnackbar } from 'notistack';
import {ethers} from "ethers"



export const useAdminCollectionState = () => {

    
    const {active, account, library} = useWeb3React()
    const {contract} = useContract()    
    const { enqueueSnackbar } = useSnackbar();
    console.log(contract, "CONTRACT ADMINNNNNNNNNNNNNNNNNNNNNNNNNnnn")

    const [loading, setLoading] = useState(false)
    const [contractDetails, setContractDetails] = useState<any>({})
    const [contractBalance, setContractBalance] = useState<number>(0)
    // const [defaultView, setDefaultView] = useState<boolean>(true)
    const [fields, setFields] = useState({
        maxSupply: 0,
        maxMintPerWalletWhite: 0,
        maxMintPerWalletPublic: 0,
        mintPriceWhite: 0,
        mintPricePublic: 0,
        setBaseUri: "",
        addAddressToWhitelist: "",
        removeAddressFromWhitelist: "",  
        enableBurn: false,
        revealURI: "",        
        // setMaxSupply: 0,        
        isPaused: false,
        state: 0,        
    });
    // base uri ipfs://QmPvQG4PuJHdBH7m4cQ2APFYBzW3ZxamkjRJXHpNgzjG1t/
    
    // const formattedAddress = library.utils.toChecksumAddress(account)
    const formattedAddress = account

    
    const getContractBalance = async() => {
        if(contract){

            const contractRawBalance = await library.getBalance(contract.address)
            const contractCleanBalance = parseFloat(ethers.utils.formatEther(contractRawBalance))
            console.log(contractCleanBalance, "BALANCCCCCCCE LIMIPIIIIIIIIIIIOOOOOOOOOOOO")
            setContractBalance(contractCleanBalance)
            // await library.getBalance(
            //     contract.address
            // ).then((response:any) => {
            //     setContracBalance(parseFloat(ethers.utils.formatEther(response)))
            //     console.log(response, "response contract balance")
            // })
        }
        return 0
    }

    // console.log(contract.address, "CONTRACT ADMINNNNNNNNNNNNNNNNNNNNNNNNNnnn")
    getContractBalance().then(response => console.log(response, "CONTRACT BALANCE"))

    const getContractDetails = useCallback (async(contractA) => {
        
            const [
                uri,
                name,
                stage,
                owner,
                symbol,
                isPaused,
                maxSupply,
                totalSupply,
                burnEnabled,                
                lastActivity,
                // whitelistCount,                
                maxMintPerWalletWhite,
                maxMintPerWalletPublic,
                mintPricePublic,
                mintPriceWhite
            ]= await Promise.all([
                contractA?.uri(),
                contractA?.name(),
                contractA?.stage(),
                contractA?.owner(),
                contractA?.symbol(),
                contractA?.isPaused(),
                contractA?.maxSupply(), 
                contractA?.totalSupply(),
                contractA?.burnEnabled(),
                contractA?.lastActivity(),
                // contractA?.whitelistCount(), 
                contractA?.maxMintPerWalletWhite(),
                contractA?.maxMintPerWalletPublic(),
                contractA?.mintPricePublic(),
                contractA?.mintPriceWhite(),

            ])

            return {
                uri,
                name,
                stage,
                owner,
                symbol,
                isPaused,
                maxSupply,        
                totalSupply,
                burnEnabled,
                lastActivity,
                // whitelistCount,            
                maxMintPerWalletWhite,
                maxMintPerWalletPublic,
                mintPricePublic,
                mintPriceWhite
            };
        
    }, [])


    // const showOnlyOwned = useCallback (() => {
    //     console.log("showOnlyOwned", ownedNft)        
    //         setOwnedNft(gallery.filter( (item) => item.owner === account))    
    // },[gallery, ownedNft])
    
    // console.log("SI ME ESTa LLEGANDO ESTA MIERDa BIEN?????", account)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = event.target
        console.log("name", name, "value", value )
        if(name )
        setFields((state) => ({
            ...state,
            [name]: value
    }))

    };

    // console.log("DATA EN AD MIN FORM", data)

    const handleSwitch = async(event: React.ChangeEvent<HTMLInputElement>) => {

        const {name, checked} = event.target

        console.log("%cESTA ES EL SWITCH", "color: white; background-color: #26bfa5;", name)
        const getContractField = name === 'setPause' ? 'isPaused' : 'burnEnabled'

        try {
            const tx = await contract[name]()  
            enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
            console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
            tx.wait().then((result: any) => {
                setContractDetails((state: any) => ({
                    ...state,
                    [getContractField]: checked
                }))
                enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                console.log(result, "RESULT WWWWWWWWWWWAAAAAAITTTT")
            })    
        } 
        catch (error) {
            enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
        }
    
        console.log("fields", fields )
    };

    const withdraw = async () =>{
        await contract.withdraw().send({ from: account})    
        .on("transactionHash", (result: any) => console.log("transactionHash",result))
        .on("receipt", (result:any) => console.log("resultTx",result.status,"txnHash", result.transactionHash ))
        .on("error", (error: any) => alert(error.message))
        .catch((error:any) => alert(error.message))
    }

    // const nextStage = async () =>{
    //     await contract.nextStage().send({ from: account})    
    //     .on("transactionHash", (result: any) => console.log("transactionHash",result))
    //     .on("receipt", (result:any) => console.log("resultTx",result.status,"txnHash", result.transactionHash ))
    //     .on("error", (error: any) => alert(error.message))
    //     .catch((error:any) => alert(error.message))
    // }

    const setMaxQuantity = async(value: any, name: any) => {


        console.log(name,'NAME SET MAX QUANTITY RESULT')
        if(name ==='setMintPrices'){
            value[0] = ethers.utils.parseEther(value[0].toString())
            value[1] = ethers.utils.parseEther(value[1].toString())
            console.log(value[0], value[1], "VALUES FORMATEODOS")
        }
        console.log(value[0], value[1], "VALUES ANTEds DE TX")
        try {
            const tx = await contract[name](value[0], value[1])  
            enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
            console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
            tx.wait().then((result: any) => {
                setContractDetails((state: any) => ({
                    ...state,
                    [name === 'setMintPrices' ? 'mintPriceWhite' : 'maxMintPerWalletWhite']: value[0],
                    [name === 'setMintPrices' ? 'mintPricePublic' : 'maxMintPerWalletPublic']: value[1]
                }))
                enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                console.log(result, "RESULT WWWWWWWWWWWAAAAAAITTTT")
            })    
        } 
        catch (error) {
            enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
        }
    }

    const send = async(value: any, name: any) => {

        console.log("QUE ENVIO", value, name, account)

        let action: any;

        // const field = {
        //     supply: {
        //         name: 'maxSupply',
        //         action: 'setMaxSupply'
        //     },
        //     addWhiteList: {
        //         name: 'addAddressToWhitelist',
        //         action: 'addAddressToWhitelist' 
        //     },
        //     removeWhiteList: {
        //         name: 'removeAddressFromWhitelist',
        //         action: 'removeAddressFromWhitelist' 
        //     },
        //     baseuri: {
        //         name:'uri',
        //         action: 'setBaseUri'
        //     },
        //     reveal: {
        //         name:'RevealURI',            
        //         action: 'revealCollection'
        //     }
        // }

        if(name === 'maxSupply') {
            action = 'setMaxSupply'
        }
                    
        if(name === 'addAddressToWhitelist') {
            action = name            
        }
        
        if(name === "removeAddressFromWhitelist") {
            action = name            
        }
        if(name === 'setBaseUri') {
            action = name            
        }

        if(name === 'revealURI') {
            action = 'revealCollection'            
        }

        if(name === "enableBurn") {
            action = name          
        }

        if(name === "setPause") {
            action = name        
        }
        
        if(name === "withdraw")  {
            action = name
            value = null
        }

        if(name === "nextStage")  {
            action = name
        }
            
        console.log(action, value, "ESTO ES SEND CALL")
        try {
            const tx = await contract[action](
                name === "addAddressToWhitelist"?
                value.split(", ")
                : 
                value
            )  
            enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
            console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
            tx.wait().then((result: any) => {
                setContractDetails((state: any) => ({
                    ...state,
                    [name]: value
                }))
                enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                console.log(result, "RESULT WWWWWWWWWWWAAAAAAITTTT")
            })    
        } 
        catch (error) {
            console.log(`ERROR ${action}`, error.message)
            enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
        }
        
        // await contract[action](                
        //     name === "addAddressToWhitelist"?
        //     [value]
        //     : 
        //     value
        // )
        // // .send({ from: formattedAddress})
        // .on("transactionHash", (result: any) => {
        //     enqueueSnackbar('transaction send', {variant: 'info'})
        //     console.log("transactionHash",result)
            
        // })
        // .on("receipt", (result:any) => {
            
        //     console.log("%cname","color: red;", name, "%cVALUE", value, "%cRESULT", result   )

        //     // const fieldName = name === 'setBaseUri' || name === 'revealURI' ? 'uri' : name

        //     setContractDetails((state: any) => ({
        //         ...state,
        //         [name]: value
        //     }))
        //     enqueueSnackbar(`transaction confirmed: ${result.status} check on:${result.transactionHash}`, {variant: 'success'})

            

            
        // })
        // .on("error", (error: any) => {
        //     enqueueSnackbar(`error: ${error.message}`, {variant: 'error'})
        // })
        // .catch((error:any) => {
        //     enqueueSnackbar(`error: ${error.message}`, {variant: 'error'})
        // })
                    
    }

    useEffect(() => {        
        setLoading(true)
        if(contract){
            
            const contractDetailsTemp= getContractDetails(contract)    
            // console.log( await contractDetailsTemp, "CONTRACT DETAILS TTTTTTTTTTTEEEEEEEEEEEEEEMMMMMMMMMMMPPPPPPPPPPP")    
            contractDetailsTemp.then(response => {
                setContractDetails(response)
                console.log("CONTRACT DETAILS LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", response)
            })
            
        }
        else{
            setContractDetails({})
        }
        
        getContractBalance()
        setLoading(false)

        
        
    }, [getContractDetails, fields])

    // useEffect(() => {
        
    // },[fields])
    
    console.log(contractDetails, "DDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEETAILASSSSSSSSSSSs")

    
    const formattedContDetail = [
        {
            text: "URI",
            value: contractDetails.uri === "" ?
                    "not set"
                    :
                    contractDetails.uri
        },
        {
            text: "Project Name",
            value: contractDetails.name
        },
        {
            text: "Owner Address",
            value: contractDetails.owner
        },
        {
            text: "Project Symbol",
            value: contractDetails.symbol
        },
        {
            text: "Current Balance",
            value: contractBalance
        },
        {
            text: "Current Stage",
            value: contractDetails.stage
        },
        {
            text: "Max Supply",
            value: typeof(contractDetails.maxSupply) === "object" ?
                    (contractDetails.maxSupply)?.toNumber() 
                    :
                    contractDetails.maxSupply
        },
        {
            text: "Total Supply",
            value: typeof(contractDetails.totalSupply) === "object" ?
                    (contractDetails.totalSupply)?.toNumber() 
                    :
                    contractDetails.totalSupply
        },
        {
            text: "Last Activity",
            value: new Date(contractDetails.lastActivity*1000)?.toLocaleString() ?? 0
        },
        // {
        //     text: "WhiteList Count",
        //     value: (contractDetails.whitelistCount)?.toNumber() ?? 0
        // },
        {
            text: "Max Mint Per Wallet White",
            value: typeof(contractDetails.maxMintPerWalletWhite) === "object" ?

                    (contractDetails.maxMintPerWalletWhite)?.toNumber() 
                    :
                    contractDetails.maxMintPerWalletWhite
        },
        {
            text: "Max Mint Per Wallet Public",
            value: typeof(contractDetails.maxMintPerWalletPublic) === "object" ?

                    (contractDetails.maxMintPerWalletPublic)?.toNumber() 
                    :
                    contractDetails.maxMintPerWalletPublic

        },
        {
            text: "WhiteList Cost",
            value: contractDetails.mintPriceWhite ? 
                    ethers.utils.formatEther(contractDetails.mintPriceWhite)
                    :
                    0               
        },
        {
            text: "Public Cost",
            value: contractDetails.mintPricePublic ?
                    ethers.utils.formatEther(contractDetails.mintPricePublic)
                    :
                    0
        }        
        
    ]

    return {
        library,
        loading, 
        active, 
        formattedAddress,
        formattedContDetail,
        contractBalance,  
        contractDetails, 
        contract,
        fields,
        handleChange,
        handleSwitch,
        send,
        setMaxQuantity,
        withdraw

    }
}