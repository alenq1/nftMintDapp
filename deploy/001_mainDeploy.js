// deploy/00_deploy_my_contract.js
require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const path = require('path');
const { utils } = require('ethers');
const config = require('../configProject');

const {
  path, 
  nftTokenName,
  nftTokenSymbol,
  maxSupply,
  maxMintPerWalletWhite,
  maxMintPerWalletPublic,
  mintPriceWhite,
  mintPricePublic
} = config

let files = fs.readdirSync(config.path)
const contractName = path.parse(files[0]).name

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    
    await deploy(contractName, {
      from: deployer,
      nonce: "pending",
      args: [
        nftTokenName,
        nftTokenSymbol,
        maxSupply?? 0,
        maxMintPerWalletWhite ?? 0,
        maxMintPerWalletPublic ?? 0,
        utils.parseEther(mintPriceWhite.toString()) ?? 0,
        utils.parseEther(mintPricePublic.toString()) ?? 0,
      ],
      log: true,
    });
  };
  module.exports.tags = [contractName];