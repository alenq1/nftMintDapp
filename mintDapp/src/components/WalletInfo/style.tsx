
export const StyledWalletInfo = {
  // display: "flex",
  // alignItems: "center",
  // fontSize: "1.25rem",
  position: "relative"
  
}

export const DisconnectButton = {
  background: "red",
  borderRadius: "50%",
  minWidth: "35px !important", 
  fontSize: "1rem",
  height: 35,
  width: 20,
  right: -15,
  top: 7.5,
  // margin: "20px -20px -20px -20px",
  position: "absolute",
  "&:hover":{
    background: "#c41212",
  }
}

export const WalletButton = {
  background: "green",
    fontSize: ".75rem",
    fontWeight: 800,
    padding: "0.3em 2em 0.3em 1em",
    bordeRadius: "10%",
    maxWidth: {
      smobile: 100,
      lmobile:200,

    },

  "&:hover":{
    background: "#3fbc3f",
  }
}