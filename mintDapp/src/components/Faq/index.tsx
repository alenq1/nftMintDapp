import { Box} from '@mui/system';
import {FaqContainer} from './style'
import {CustomizedAccordions} from './utils'

const Faq = () => {
    return (
        <Box sx={FaqContainer}>
            <Box>
                <h1>FAQ</h1>
            </Box>
            <Box>
                <CustomizedAccordions/>
            </Box>
        </Box>
    )
}

export default Faq