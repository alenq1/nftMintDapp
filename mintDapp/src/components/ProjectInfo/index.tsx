import { Box} from '@mui/system';
import {OtherDescriptions, projectInfoContent, InfoText} from './style'

export const ProjectInfo = () => {

    const {image,alt, text} = projectInfoContent

    return (
    
        <Box sx={OtherDescriptions}>            
                {/* <img src="https://i.gifer.com/760R.gif" alt="sdsdds"/> */}
            <img src={image} alt={alt}/>            
            <Box sx={InfoText} >
                <span>{text}</span>
            </Box>
        </Box>
    )
}

export default ProjectInfo