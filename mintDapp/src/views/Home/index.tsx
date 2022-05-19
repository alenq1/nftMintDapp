import { useEffect, useCallback, useState } from "react";
import { Box} from '@mui/system';
import {StyledMain, Descriptions, OtherDescriptions, 
  RoadMap, RoadMapContainer,RoadMapLeft, RoadMapRight,
  RoadMapLine,
  CustomizedAccordions, 
  FaqContainer,
  Stages
} from './style';
// import NftCard from "../../components/NftCard";
import MintSection from "../../components/MintSection";  
import Description  from "../../components/Description";
import MintStages from "../../components/MintStages";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../../hooks/useContract";
import useHomeState from "./utils";



const Home = () => {


  return (

  <Box sx={StyledMain} >  
    <Box sx={Stages}>
      <MintStages/>
    </Box>
    <Box sx={Descriptions}>      
      
      <Description/>
      <MintSection/>
    </Box>    
    <Box sx={OtherDescriptions}>
      <Box>
        {/* <img src="https://i.gifer.com/760R.gif" alt="sdsdds"/> */}
        <img src="https://media.giphy.com/media/3o85xsdxJti6JQmf1m/giphy.gif" alt="sdsdds"/>
      </Box>
      <Box sx={{maxWidth: "600px"}}>
        <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet nam vero culpa. Tenetur distinctio voluptates hic, 
        blanditiis alias nihil neque officiis magnam vero eius omnis, 
        repellat, tempora fuga. Quos, molestias!
        </h3>
      </Box>
    </Box>
    <Box sx={RoadMapContainer}>
      <Box>
        <h1>Roadmap</h1>
      </Box>
      <Box sx={RoadMap}>
        <Box sx={RoadMapLeft}>
            <h1>Q1</h1>
            <Box>RoadDescription2</Box>
            <h1>Q3</h1>
            <Box>RoadDescription4</Box>            
        </Box>
        <Box sx={RoadMapLine}></Box>
        <Box sx={RoadMapRight}>
            <Box sx={{background: "transparent !important", border: "none"}}></Box>            
            <h1>Q2</h1>
            <Box>RoadDescription3</Box>
            <h1>Q4</h1>
            <Box>RoadDescription5</Box>
        </Box>
      </Box>
    </Box>
    <Box sx={FaqContainer}>
      <Box>
        <h1>FAQ</h1>
      </Box>
      <Box>
      <CustomizedAccordions/>
      </Box>
    </Box>
  </Box>

  )
};

export default Home;
