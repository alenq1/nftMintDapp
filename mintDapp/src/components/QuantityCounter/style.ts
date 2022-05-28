import { styled } from '@mui/material/styles';


const commonSize = "1.5em"
const sizeFigma = "18px"

export const QuantityContainer = styled("div")({    

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
})


const QuantityButton = styled("button")({
    padding:"0px !important",
    height:"30px",
    maxwidth: "35px",
    width: "34.8px",
    // border: "2px solid #E2E2E2",
    background:"green",
    color: "#E2E2E2",
    fontWeight: "bold",
    outline:"none",
    fontSize: `${commonSize}`,
    "&:active":{
        color: "green",
        border: "2px solid green",
    }
})
    




export const Decrease = styled(QuantityButton)`
    border-radius: 4px 0px 0px 4px;
    &::after{
        content: "-";
    }
`

export const Quantity = styled("input")({

    borderRadius: "0px",
    WebkitAppearance: "none",
    margin: "0px",
    width: "53px",
    height: "30px",
    border: "2px solid #E2E2E2",
    borderLeft: "0px",
    borderRight: "0px",
    maxwidth: " 40px",
    outline: " none",
    display: " flex",
    fontSize: `${sizeFigma}`,
    fontFamily: "inherit",
    paddingTop: "8px",
    textAlign: "center",
    padding: "0px !important",
    "&:focus":{
        outline: "0 none",
        border: "2px solid green",
        
    },
    "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0
    },
    "&[type=number]":{
        MozAppearance: "textfield",
    }
})
    


export const Increase = styled(QuantityButton)`
    border-radius: 0px 4px 4px 0px;
    &::after{
        content: "+";    
    }
`