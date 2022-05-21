module.exports  = {
    
    path: './contracts',
    //contract
    contractName: "NftMintStage",
    nftTokenName: "Pixel Invaderz",
    nftTokenSymbol: "PIXINV",
    // contract Numbers
    maxSupply: 20,
    maxMintPerWalletWhite: 2,
    maxMintPerWalletPublic: 4,
    mintPriceWhite: 0.02,
    mintPricePublic: 0.04,
    // hardhat config
    reportGas: true,
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
    //dapp config

}