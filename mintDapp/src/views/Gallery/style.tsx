import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';


export const StyledGallery = {
  width: "100%",
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start !important",
  
  '& h1':{
    display: "flex",
    justifyContent: "center"
  }

}



export const StyledTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '& .MuiTabs-indicator': {
    backgroundColor: 'green',
    color: 'green'
  },
  '& .Mui-selected': {
    // backgroundColor: 'red',
    color: 'green'
  },
  '& .Mui-focusVisible': {
    backgroundColor: 'brown',    
  },

});


// export const StyledTabs = {  
//   color: "black",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   '& button':{
//     fontSize: "1.25rem",
//     color: "black"
//   },
//   '& button:focus, & button:active':{    
//     color: "green !important",    
//   },
//   '& span:focus, & span:active':{    
//     color: "green !important"
//   }
// }


export const StyledSkeleton = {
  margin: "100px 0px",
  // width: "auto",
  display: "flex",
  // height:"50vh",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  gap: 10
  

}



