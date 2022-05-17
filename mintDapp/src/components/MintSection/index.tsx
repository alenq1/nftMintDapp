
import Button from "../../components/Button"; 
import React, {useState, useEffect} from 'react'
import QuantityCounter from "../../components/QuantityCounter"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StyledMintSection, StyledCardText, StyledCardImage, bgOptions } from "./style";
import { useMintState } from "./utils";
import MintImage from '../../assets/img/200.gif';
import {ethers} from "ethers"

import {ReactComponent as Invader} from '../../assets/img/logo.svg';
import {ReactComponent as Invader2} from '../../assets/img/invader2.svg';
import {ReactComponent as Invader3} from '../../assets/img/invader3.svg';
import {ReactComponent as Invader4} from '../../assets/img/invader4.svg';
import {ReactComponent as Invader5} from '../../assets/img/invader5.svg';

import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'
import { StyledCard } from "../NftCard/style";
import Particles from "react-tsparticles";

const MintSection = () => {
  
  const {library, contract, mintNumbers, mint, quantity, setQuantity, contractState} = useMintState()
  
  const isSoldOut =  mintNumbers.minted >= mintNumbers.maxSupply
  const allowToMint = contractState === 1 || contractState ===2 
  const defaultMintImage = "/"


  // console.log(ethers.BigNumber.from('hello world'), "LIBRARRRRRRRYYYYYYY UTILSSSSSSSSS")
  console.log(mintNumbers, "LIBRARRRRRRRYYYYYYY UTILSSSSSSSSS", contractState, "CONTRACT STATE")

  return (
    <Card sx={StyledMintSection}>
      
    <Carousel sx={StyledCardImage}>
    {/* <CardMedia
      component="img"
      alt="mintImage"
      image={Invader2}
      sx={StyledCardImage}
    /> */}
      
    <Invader/>
    <Invader2/>
    <Invader3/>
    <Invader4/>
    <Invader5/>
    </Carousel>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Mint yout Invader
        {/* {`contract state: ${contractState}`} */}
      </Typography>
      <Typography sx={StyledCardText}>
        {
          contract ?

            isSoldOut ?

            "Sold Out"

            :          
            `Minted :${mintNumbers.minted}/${mintNumbers.maxSupply} `        
            
          :
          "Please Connect Wallet"
        }
      </Typography>
      <Typography sx={StyledCardText}>
        {
          contract &&
            allowToMint &&
              <strong>
                `Total Cost: ${
                  contractState === 1 ?
                    // quantity* ethers.BigNumber.from(mintNumbers.mintPriceWhite)
                    quantity * mintNumbers.mintPriceWhite

                  :
                  contractState === 2 ?
                    // quantity* ethers.BigNumber.from(mintNumbers.mintPricePublic)
                    quantity * mintNumbers.mintPricePublic
                  :
                  0
                } ${'ETH'}`  
              </strong>        
        }
      </Typography>
    </CardContent>
    <CardActions>      
      <QuantityCounter   
          value={quantity} 
          setValue={setQuantity} 
          available={
            contractState === 1? 
            mintNumbers.maxMintPerWalletWhite 
            :
            contractState === 2? 
            mintNumbers.maxMintPerWalletPublic
            :
            0
          }

          color={"red"}
          disabled={!contract || isSoldOut || !allowToMint}
      />
      <Button text={"mint"} action={mint} disabled={!contract || isSoldOut || !allowToMint}/>
    </CardActions>
  </Card>
);
  
};

export default MintSection;