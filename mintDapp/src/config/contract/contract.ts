const { default: contractJson} = await import ('./contract.json')


const contractFileName = "NftMintStage"

// console.log(contractJson, "CONTRACTJSONNNNNNNNNNNNNNNNNNNN")

export const contractNetworks = Object.keys(contractJson).map(id => Number(id))

export const getContractAbiAddress = (chainId: Number) => {
    const address = contractJson[chainId][0].contracts[contractFileName].address
    const abi = contractJson[chainId][0].contracts[contractFileName].abi

    // console.log(address, "ADDRRESS ")
    // console.log(abi, "ABI ")// 

    return{
        address,
        abi
    }
}