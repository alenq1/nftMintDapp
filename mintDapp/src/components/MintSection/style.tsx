import { alpha, styled } from '@mui/material/styles';
import {ReactComponent as Invader} from '../../assets/svgs/logo.svg';
import {ReactComponent as Invader2} from '../../assets/svgs/invader2.svg';
import {ReactComponent as Invader3} from '../../assets/svgs/invader3.svg';
import {ReactComponent as Invader4} from '../../assets/svgs/invader4.svg';
import {ReactComponent as Invader5} from '../../assets/svgs/invader5.svg';

export const contentArray = [
  <Invader/>,
  <Invader2/>,
  <Invader3/>,
  <Invader4/>,
  <Invader5/>
]

export const mintText = {
  mintTitle: "Mint your Invader" ,
  noContract: "Please Connect Wallet",  
  showMinted: `Minted :`,
  showCost: "Total Cost: ",
  symbol: "ETH",
  soldOut: "Sold Out",  
  mintButton: "Mint",
}


export const StyledMintSection = {
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:" rgba(255, 255, 255, 0.19)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.6px)",
  WebkitBackdropFilter: "blur(3.6px)",
  border: "1px solid rgba(255, 255, 255, 0.21)",

}


export const StyledCardImage =  {
  height: {
    // lmobile: "90%",
    tablet: "100%",
    laptop:  500
  },
  width: {
    // lmobile: "90%",
    tablet: "100%",
    laptop:  500
  },
  padding: 10,
  background: `url(https://i.gifer.com/YzM9.gif)`,
  backgroundSize: "cover"
  // background: `url(https://gfycat.com/remoteimpishblackbear)`
}

export const StyledCardText = {
  display: "flex",
  justifyContent: "center",
  margin: 0  
}
