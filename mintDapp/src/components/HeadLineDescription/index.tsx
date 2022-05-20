import { Box} from '@mui/system';
import {StyledHeadLineDescription, font1, headLineContent} from './style';


const HeadLineDescription = () => {
  
  const {
    descriptionTitle,
    headLineTitle,
    headLineText
  } = headLineContent

  return( 
  <Box sx={StyledHeadLineDescription}>
    <Box sx={font1}>{descriptionTitle}</Box>
    <h2>{headLineTitle}</h2>
    <div>{headLineText}</div>
  </Box>
  )
  
};

export default HeadLineDescription;
