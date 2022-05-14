import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {StyledNftDetail} from './style'
import { useEffect, useCallback, useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    
    // backgroundColor: "rgba(0, 0, 0, .9)",
    background: `url(https://i.gifer.com/YzM9.gif)`,
    backgroundSize: "cover",
    // opacity: 0.5,
    filter: "blur(0px)"
  },
  '& .MuiDialog-container': {
    
    // backgroundColor: "black",
    // filter: "blur(10px)"
  },
  
  '& .MuiDialog-elevation': {
    
    // backgroundColor: "black",
    // filter: "blur(0px)"
  },
  '& .MuiDialog-paper': {
    
    backgroundColor: "transparent",
    // filter: "blur(0px)"

  },
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, .35)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    alignItems: "center"
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    backgroundColor: "rgba(255, 255, 255, .35)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    filter: "blur(0px)"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    backgroundColor: "rgba(255, 255, 255, .35)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function NftDetail({open, handleClose, gallery, nftIndex}: any) {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
  console.log("COMO ES LA VAINA AQUI GALERY", gallery[nftIndex].data.attributes, nftIndex)
  return (
    <Box sx={StyledNftDetail}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {gallery[nftIndex].data.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <img
              style={{ width: "100%", height: 200 }}
              alt={gallery[nftIndex].data.name}
              src={gallery[nftIndex].data.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
            />
          <Box sx={StyledNftDetail}>
          <Typography gutterBottom>
          Description: {gallery[nftIndex].data.description}
          </Typography>
          <Typography gutterBottom>
          Date: {gallery[nftIndex].data.date}
          </Typography>
          <Typography gutterBottom>
          Owner: {gallery[nftIndex].data.owner}
          </Typography> 
          </Box>

          <Box sx={StyledNftDetail}>            
            <h3>Attributes</h3>
          {
            gallery[nftIndex].data.attributes.length > 0 &&
            gallery[nftIndex].data.attributes.map((item: any) => 
            <>
                <Typography gutterBottom>                    
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