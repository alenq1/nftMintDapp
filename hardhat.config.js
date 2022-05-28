require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers") 
require('dotenv').config()
require("hardhat-gas-reporter");
require("hardhat-deploy");
require("hardhat-deploy-ethers");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */

const RINKEBY_RPC_URL = process.env.ETH_INFURA;
const MUMBAI_RPC_URL = process.env.POLYGON_ALCHEMY
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY

const accounts = [
  PRIVATE_KEY
]

module.exports = {
  solidity: {
    version:"0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  
  namedAccounts: {
    deployer: 0,
    wladdr1:  1,
    wladdr2:  2,
    wladdr3:  3, 
    wladdr4:  4,
    pubaddr1: 5,
    pubaddr2: 6, 
    pubaddr3: 7
  },
  paths: {
    sources: 'contracts',
  },
  networks: {
    rinkeby:{
      url: RINKEBY_RPC_URL,
      accounts,
      timeout: 5 * 60 * 1000,
    },
    polygonMumbai: {
      url: MUMBAI_RPC_URL,
      accounts,
      timeout: 5 * 60 * 1000,
    },
    hardhat: {
      live: false,      
      tags: ["test", "local"]
    },
  },
  etherscan: {
    apiKey: {
      
      //ethereum
      rinkeby:  ETHERSCAN_API_KEY,

      //polygon
      polygonMumbai: POLYGONSCAN_API_KEY

    }
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: 'USD',
    // gasPrice: 56
    token: 'ETH',
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
  }
  
};