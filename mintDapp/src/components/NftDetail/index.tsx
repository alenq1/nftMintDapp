import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {StyledNftDetail, BootstrapDialog, imgNftDetail, StyledAttribs, cardButtons} from './style'
import{BootstrapDialogTitle} from "./utils"
import { v4 as uuidv4 } from "uuid";


export default function NftDetail({open, handleClose, gallery, nftIndex}: any) {

  console.log("COMO ES LA VAINA AQUI GALERY", gallery[nftIndex].value.data, nftIndex)
  const nftData = gallery[nftIndex].value.data 
  // console.log("COMO ES LA VAINA AQUI GALERY", nftData.attributes, nftIndex)
  return (
    <Box sx={StyledNftDetail}>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {nftData.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <Box sx={imgNftDetail}>
            <img              
              alt={nftData.name}
              src={nftData.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
            />
            </Box>
            
          <Box sx={StyledNftDetail}>
            <Typography gutterBottom>
                Description: {nftData.description}
            </Typography>
            <Typography gutterBottom>
                Date: {nftData.date}
            </Typography>
            <Typography gutterBottom>
                Owner: {nftData.owner}
            </Typography> 
          </Box>
          <Box sx={StyledNftDetail}>            
            <h3>Attributes</h3>
          {
            nftData.attributes.length > 0 &&
            nftData.attributes.map((item: any) => 
              <Box sx={StyledAttribs}>
                  <strong key={uuidv4()}>                    
                    {item.trait_type}                  
                  </strong>                
                  <span>
                    {item.value}
                  </span>
              </Box>
                )
          }   
          </Box>
        </DialogContent>
        <DialogActions sx={cardButtons}>
          <Button  autoFocus onClick={
            ()=> {window.location.replace(
              `https://testnets.opensea.io/assets/mumbai/0xbc8e37baff05e62739bda4b8d2187e39f105edab/${nftIndex+1}`
              )
                return null;
              }        
          }>
            See OpenSea
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}