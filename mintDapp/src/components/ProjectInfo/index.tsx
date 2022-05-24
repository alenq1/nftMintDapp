import { Box} from '@mui/system';
import {OtherDescriptions, projectInfoContent} from './style'

export const ProjectInfo = () => {

    const {image,alt, text} = projectInfoContent

    return (
    
        <Box sx={OtherDescriptions}>
            <Box>
                {/* <img src="https://i.gifer.com/760R.gif" alt="sdsdds"/> */}
                <img src={image} alt={alt}/>
            </Box>
            <Box sx={{maxwidth: "600px"}}>
                <h3>{text}</h3>
            </Box>
        </Box>
    )
}

export default ProjectInfo