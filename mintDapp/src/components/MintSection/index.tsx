
import Button from "../../components/Button"; 
import QuantityCounter from "../../components/QuantityCounter"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { contentArray, StyledMintSection, StyledCardText, StyledCardImage, mintText } from "./style";
import { useMintState } from "./utils";
import Carousel from 'react-material-ui-carousel'


const MintSection = () => {
  
  const { contract, mintNumbers, mint, quantity, setQuantity, contractState} = useMintState()
  const {mintTitle, soldOut, noContract, mintButton, showMinted, showCost, symbol} = mintText
  const isSoldOut =  mintNumbers.minted >= mintNumbers.maxSupply
  const allowToMint = contractState === 1 || contractState ===2 
  const defaultMintImage = "/"
  // console.log(ethers.BigNumber.from('hello world'), "LIBRARRRRRRRYYYYYYY UTILSSSSSSSSS")
  // console.log(mintNumbers, "LIBRARRRRRRRYYYYYYY UTILSSSSSSSSS", contractState, "CONTRACT STATE")

  return (
    <Card sx={StyledMintSection}>      
    <Carousel sx={StyledCardImage}>      
      {
        contentArray.map( (item: any) =>
          item
        )
      }
    </Carousel>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {mintTitle}
      </Typography>
      <Typography sx={StyledCardText}>
        {
          contract ?

            isSoldOut ?

            soldOut
            :                      
            `${showMinted} ${mintNumbers.minted}/${mintNumbers.maxSupply} `                    
          :
          noContract
        }
      </Typography>
      <Typography sx={StyledCardText}>
        {
          contract &&
            allowToMint &&
              <strong>
                `{showCost} ${
                  contractState === 1 ?                    
                    quantity * mintNumbers.mintPriceWhite
                  :
                  contractState === 2 ?
                    
                    quantity * mintNumbers.mintPricePublic
                  :
                  0
                } ${symbol}`  
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
      <Button text={mintButton} action={mint} disabled={!contract || isSoldOut || !allowToMint}/>
    </CardActions>
  </Card>
);
  
};

export default MintSection;
