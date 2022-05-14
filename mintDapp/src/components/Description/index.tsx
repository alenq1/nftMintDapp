import { Box} from '@mui/system';
import {StyledDescriptionSection, font1} from './style';


const DescriptionSection = () => {
  
  return( 
  <Box sx={StyledDescriptionSection}>
    <Box sx={font1}>DescriptionSection</Box>
    <h2>other text</h2>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Facere eos molestias, pariatur delectus iste perspiciatis, cumque odit dolores aspernatur recusandae laboriosam minus 
      voluptas quidem dolorem debitis sequi doloremque necessitatibus veniam.
    </div>
  </Box>
  )
  
};

export default DescriptionSection;
