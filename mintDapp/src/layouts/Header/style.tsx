import { theme } from "../../theme/default"


export const StyledHeader = {
  height: 75,  
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1.5rem",
  color: 'text.primary',
  position: "relative",
  
  "& a": {
    textDecoration: "none",
    color: "black",
  },
  gap:2,

}

export const BoxLogo = {
  marginRight: 'auto',
  marginLeft:{
    lmobile: "35px",
    tablet: "0px"
  }
}

export const MenuLinks = {
  display: {
    // lmobile: "none",
    tablet: "flex",
  },
  justifyContent: "space-between",
  alignItems: "center",
  gap:5,
  position:{
    lmobile: "absolute",
    tablet: "inherit"
  }
  

}

export const Wallet = {
  display: "flex",
  alignItems: "center",
  // fontSize: ".6rem !important", 
}