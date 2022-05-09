// deploy/00_deploy_my_contract.js
require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const path = require('path');
const { utils } = require('ethers');

let files = fs.readdirSync('./contracts')
const contractName = path.parse(files[0]).name

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    
    await deploy(contractName, {
      from: deployer,
      nonce: "pending",
      args: [
        process.env.NFT_TOKEN_NAME,
        process.env.NFT_TOKEN_SYMBOL,
        process.env.MAX_SUPPLY?? 0,
        process.env.MAX_MINT_PER_WALLET_WHITE ?? 0,
        process.env.MAX_MINT_PER_WALLET_PUBLIC ?? 0,
        utils.parseEther(process.env.PRICE_WHITE.toString()) ?? 0,
        utils.parseEther(process.env.PRICE_PUBLIC.toString()) ?? 0,
      ],
      log: true,
    });
  };
  module.exports.tags = [contractName];