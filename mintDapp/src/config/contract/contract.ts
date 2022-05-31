const { default: contractJson} = await import ('./contract.json')


const contractFileName = "NftMintStage"

const contractData: {[index: string]:any} = contractJson

// console.log(contractJson)
export const contractNetworks = Object.keys(contractJson).map(id => Number(id))

export const chainMiscData =(chainId: Number,  address: string, indexToOpen: Number) => {
    
    // console.log(chainId, address, indexToOpen)

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

    // console.log(chainData)

    return chainData
}

export const getContractAbiAddress = (chainId: any) => {
    //let contractChain: {[index: string]:any} = {}
    //contractChain = contractJson[chainId]
    const { address, abi} = contractData[chainId][0].contracts[contractFileName]
    // console.log(address, "ADDRRESS ")
    // console.log(abi, "ABI ")// 
    return{
        address,
        abi
    }
}