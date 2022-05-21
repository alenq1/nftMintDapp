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
    <h2>{headLineTitle}</h2>
    <div>{headLineText}</div>
  </Box>
  )
  
};

export default HeadLineDescription;
