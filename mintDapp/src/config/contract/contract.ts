const { default: contractJson} = await import ('./contract.json')


const contractFileName = "NftMintStage"

// console.log(contractJson, "CONTRACTJSONNNNNNNNNNNNNNNNNNNN")

export const contractNetworks = Object.keys(contractJson).map(id => Number(id))



export const chainMiscData =(chainId: Number,  address: string, indexToOpen: Number) => {
    
    // console.log(chainId, address, indexToOpen, "AQQQQQQQQQQQQQQQQQQQQIIIIIIIIII")

    const chainData = {
        "4": {            
                explorer: `https://rinkeby.etherscan.io/token/${address}?a=${indexToOpen}#inventory`,
                opensea: `https://testnets.opensea.io/assets/rinkeby/${address}`        
            },
        "80001":{
            explorer: `https://mumbai.polygonscan.com/token/${address}?a=${indexToOpen}#inventory`,
            opensea: `https://testnets.opensea.io/assets/mumbai/${address}`
        },
        "default":{
            explorer: ``,
            opensea: ``
        }
    }[chainId.toString() || "default" ]

    // console.log("CHAIN DATA", chainData)

    return chainData
}

export const getContractAbiAddress = (chainId: Number) => {
    // const address = contractJson[chainId][0].contracts[contractFileName].address
    // const abi = contractJson[chainId][0].contracts[contractFileName].abi
    const { address, abi} = contractJson[chainId][0].contracts[contractFileName]
    // console.log(address, "ADDRRESS ")
    // console.log(abi, "ABI ")// 

    return{
        address,
        abi
    }
}