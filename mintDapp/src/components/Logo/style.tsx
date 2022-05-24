
export const StyledLogo = {
  height: 75,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  "& svg": {
    width: 45,
    height: 45,
    fill: "green",
    margin: "20px"
  },
  
  "& a": {
    width: "100%",
    display: "flex",
    flexDirection: {
      lmobile: "column",
      tablet:"row"
    },
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  '& h2':{
    display: {
      lmobile: "none",
      tablet: "inherit"
    },
    
  }

}

