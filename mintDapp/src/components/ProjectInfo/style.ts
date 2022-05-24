
import {dappConfig} from '../../config/dappConfig'

export const projectInfoContent = {
    image: "https://media.giphy.com/media/3o85xsdxJti6JQmf1m/giphy.gif",
    alt: "proejctInfo",
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Amet nam vero culpa. Tenetur distinctio voluptates hic, 
    blanditiis alias nihil neque officiis magnam vero eius omnis, 
    repellat, tempora fuga. Quos, molestias!`
}


export const OtherDescriptions = {
    margin: "20px 0px",
    padding: "10px",
    height: "100%",    
    width: "100%",
    display: "flex",
    flexDirection: {
        lmobile:"column",
        tablet: "column",
        laptop:"row"
    },
    alignItems: "center",
    justifyContent: "center",
    background: dappConfig.projectInfoBg,
    backgroundSize: "contain",

    '& img':{
        width: "50%"        
    }

}

export const InfoText = {
    padding: 10,
    width: "auto",
    color: "white",
    lineHeight: 2.5
}