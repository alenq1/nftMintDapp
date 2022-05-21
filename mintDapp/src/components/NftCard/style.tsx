
export const StyledCard = {
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  background:" rgba(255, 255, 255, 0.19)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.6px)",
  WebkitBackdropFilter: "blur(3.6px)",
  border: "1px solid rgba(255, 255, 255, 0.21)",

  '& img':{
    maxWidth: "100%",
    height:"auto"
  }
}

export const nftInfo ={
  

  '& span, & strong':{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "7.5px 0px"
  },
  '& strong':{
    fontSize: "1rem",
    color: 'black'
  }
  

  
}
export const cardButtons = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  

  '& button': {
    color: "white !important",
    width: "100%",
    height: "100%",
    background: "green !important",
    
  }
  
}
