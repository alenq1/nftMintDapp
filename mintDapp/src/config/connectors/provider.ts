// import Web3 from "web3";
// import {ethers} from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from "@web3-react/injected-connector";
import {contractNetworks} from '../contract/contract'




const connector = new InjectedConnector({
  supportedChainIds: contractNetworks
});

const getLibrary = (provider: any) => {
  // return new Web3(provider);
  // return new ethers.providers.Web3Provider(provider)
  const library = new Web3Provider(provider)
  // console.log(library, "COOOOOOOOOMMMMMMMMMMMMECTTTTTTTTTTTTOOOOOOOOORRRRR")
  library.pollingInterval = 12000
  return library
};

export { contractNetworks, connector, getLibrary };