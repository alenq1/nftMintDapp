import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {StyledNftDetail, BootstrapDialog} from './style'
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
            <img
              style={{ width: "100%", height: 200 }}
              alt={nftData.name}
              src={nftData.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
            />
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
            <>
                <Typography gutterBottom key={uuidv4()}>                    
                {`${item.trait_type}: ${item.value}`} 
                </Typography>                
            </>
                )
          }   
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}