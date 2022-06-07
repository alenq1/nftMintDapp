import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
    StyledRoadMap, 
    RoadMapContainer,
    RoadMapLeft, 
    RoadMapRight, 
    RoadMapLine, 
    BlockSpace,
    RoadMapContent
} from './style'

const RoadMap = () => {

    const {
        title, 
        firstTitle,
        firstDescription,
        secondTitle,
        secondDescription,
        thirdTitle,
        thirdDescription,
        fourthTitle,
        fourthDescription
    } = RoadMapContent

    return (
        <Box sx={RoadMapContainer}>
            <Box>
                <h1>{title}</h1>
            </Box>
            <Box sx={StyledRoadMap}>
                <Box sx={RoadMapLeft}>
                    <h1>{firstTitle}</h1>
                    <Box>{firstDescription}</Box>
                    <h1>{thirdTitle}</h1>
                    <Box>{thirdDescription}</Box>            
                </Box>
                <Box sx={RoadMapLine}></Box>
                <Box sx={RoadMapRight}>
                    <Box sx={BlockSpace}></Box>            
                        <h1>{secondTitle}</h1>
                    <Box>{secondDescription}</Box>
                        <h1>{fourthTitle}</h1>
                    <Box>{fourthDescription}</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default RoadMap

