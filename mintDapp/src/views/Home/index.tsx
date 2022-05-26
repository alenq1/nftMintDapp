
import { Box} from '@mui/system';
import {StyledHome, Descriptions, Stages
} from './style';
import MintStages from "../../components/MintStages";
import MintSection from "../../components/MintSection";  
import HeadLineDescription  from "../../components/HeadLineDescription";
import ProjectInfo  from "../../components/ProjectInfo";
import RoadMap  from "../../components/RoadMap";
import Faq  from "../../components/Faq"
import Main from '../../layouts/Main'



const Home = () => {


  return (

  <Main sx={StyledHome} >  
    <Box sx={Stages}>
      <MintStages/>
    </Box>
    <Box sx={Descriptions}>            
      <HeadLineDescription/>
      <MintSection/>
    </Box>    
    <ProjectInfo/>
    <RoadMap/>
    <Faq/>
  </Main>

  )
};

export default Home;
