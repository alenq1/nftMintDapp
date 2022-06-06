# Nft Mint Dapp (Pixel Invaderz)

This dapp was made for learning purposes with the following stack

- Backend
  - Hardhat, hardhat-deploy as main library, for manage deploy testing, verify contract and create abi file
  - Solidity for contract to deploy on EVM chain compatible (Ethereum, Polygon)
  - NodeJS for deploy scripts and test
  
- Frontend
  - React 18 with Typescript
  - ViteJs for build
  - EthersJs to interact with contract


# Features 

This dapp is based on a State Pattern design on solidity, the contract has stages to control the mint of an NFT, these are the stages and main features of this dapp

##  Phase 1
  - Set inital data such as, max supply, mint prices, max mint allowed per wallet, before or after deploy the contract 
  - Set an url for unreveal metadata before start the mint
  - Add or remove addresses allowed to mint in whitelist phase
## Phase 2
  - Only allow mint addresses in the whitelist with a max number allowed
## Phase 3
  - Allow everyone mint only restricted with a max mint 
## Phase 4
  - After mint has finished, it can be setted a new url for reveal the final metadata for collection
## Phase 5
  - The contract owner finally can withdraw funds from the mint contract


# Other

- The contract also has a paused function to stop the contract interaction in any moment
- This dapp only was deployed on testing chain like rinkeby (Ethereum) and mumbai (Polygon)
- The metadata was created with the hashlips art engine https://github.com/HashLips/hashlips_art_engine

