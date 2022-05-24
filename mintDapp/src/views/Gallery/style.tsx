import { styled } from '@mui/system';


export const StyledGallery = {
  width: "100%",
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  

}

export const StyledTabs = {  
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '& button':{
    fontSize: "1.25rem",
    color: "black"
  },
  '& button:focus, & button:active':{    
    color: "green !important",    
  },
  '& span:focus, & span:active':{    
    color: "green !important"
  }
}


export const StyledSkeleton = {
  margin: "100px 0px",
  // width: "auto",
  display: "flex",
  // height:"50vh",
  alignItems: "center",
  justifyContent: "space-around",
  gap: 10
  

}



