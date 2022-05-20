import { alpha, styled } from '@mui/material/styles';
import {ReactComponent as Invader} from '../../assets/svgs/logo.svg';
import {ReactComponent as Invader2} from '../../assets/svgs/invader2.svg';
import {ReactComponent as Invader3} from '../../assets/svgs/invader3.svg';
import {ReactComponent as Invader4} from '../../assets/svgs/invader4.svg';
import {ReactComponent as Invader5} from '../../assets/svgs/invader5.svg';

export const contentArray = [
  <Invader/>,
  <Invader2/>,
  <Invader3/>,
  <Invader4/>,
  <Invader5/>
]

export const mintText = {
  mintTitle: "Mint your Invader" ,
  noContract: "Please Connect Wallet",  
  showMinted: `Minted :`,
  showCost: "Total Cost: ",
  symbol: "ETH",
  soldOut: "Sold Out",  
  mintButton: "Mint",
}


export const StyledMintSection = {
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:" rgba(255, 255, 255, 0.19)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.6px)",
  WebkitBackdropFilter: "blur(3.6px)",
  border: "1px solid rgba(255, 255, 255, 0.21)",

}


export const StyledCardImage =  {
  height: 400,
  width: 500,
  padding: 10,
  background: `url(https://i.gifer.com/YzM9.gif)`,
  backgroundSize: "cover"
  // background: `url(https://gfycat.com/remoteimpishblackbear)`
}

export const StyledCardText = {
  display: "flex",
  justifyContent: "center",
  margin: 0  
}


export const bgOptions: any = {
  "background": {
    "color": {
      "value": "#232741"
    },
    "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "20%"
  },
  "fullScreen": {
    "zIndex": 1,
    "enable": false
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "opacity": 0,
        "size": 0
      },
      "grab": {
        "distance": 400
      },
      "repulse": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "distance": 150,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 600
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": true,
      "speed": 1
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 160
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 1,
        "max": 3
      },
      "animation": {
        "speed": 4,
        "minimumValue": 0.3
      }
    }
  }
}