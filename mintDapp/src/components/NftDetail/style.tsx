import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    
    backgroundColor: "rgba(0, 0, 0, .9)",
    // background: `url(https://i.gifer.com/YzM9.gif)`,
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
    width: "40%",
    [theme.breakpoints.down('tablet')]: {
      width: "100%",
    },

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
  '& .MuiBox-root': {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alginContent: "center",

  },

  
  
}));

export const imgNftDetail = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '& img':{
    width:"65%",
    height:"15%",
  }
}

export const StyledAttribs = {
  display: "flex",
  width: "100%",
  flexDirection: "row !important",
  justifyContent: "space-between !important",
  alignItems: "center",

  '& strong':{
    fontSize: "1.25rem",
  },
  '& span': {
    color: "white"
  }
}

export const StyledNftDetail = {
    // height: "auto",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    padding: 3,
    // background:" rgba(255, 255, 255, 0.19)",
    // borderRadius: "16px",
    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    // backdropFilter: "blur(3.6px)",
    // WebkitBackdropFilter: "blur(3.6px)",
    // border: "1px solid rgba(255, 255, 255, 0.21)",
  
}

export const cardButtons = {
  // width: "100%",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  

  '& button': {
    color: "white !important",
    width: "100%",
    height: "100%",
    background: "green !important",
    
  }
  
}
  
