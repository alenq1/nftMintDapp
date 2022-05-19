import {ethers} from 'ethers'
import { InjectedConnector } from "@web3-react/injected-connector";
import {contractNetworks} from '../contract/contract'


// console.log(contractNetworks, "CONTRACT NETWORKS")

const connector = new InjectedConnector({
  supportedChainIds: contractNetworks
});

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider, "any")
  library.pollingInterval = 12000
  return library

};

export { contractNetworks, connector, getLibrary };