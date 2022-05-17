import {ethers} from 'ethers'
// import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from "@web3-react/injected-connector";
import {contractNetworks} from '../contract/contract'


// console.log(contractNetworks, "CONTRACT NETWORKS")

const connector = new InjectedConnector({
  supportedChainIds: contractNetworks
});

const getLibrary = (provider: any) => {
  // return new Web3(provider);
  // return new ethers.providers.Web3Provider(provider)
  const library = new ethers.providers.Web3Provider(provider, "any")
  library.pollingInterval = 12000
  // console.log(library, "LIBRARY DESDE PROVIDER")
  return library

};

export { contractNetworks, connector, getLibrary };