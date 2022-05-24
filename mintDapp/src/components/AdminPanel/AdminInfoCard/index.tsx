import Box from '@mui/material/Box';
import {AdminCardFields, StyledAdminInfo} from '../style'
import Skeleton from '@mui/material/Skeleton';
import { v4 as uuidv4 } from "uuid";

const AdminInfoCard = ({data}: any) => {

  // console.log(data,  "DATA ADMIN INFO CARD")
  // console.log(balance,  "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    
  return (
    <>
      {
        data && data.length > 0 ?
        <Box sx={StyledAdminInfo}>
          {
            data.map( (item:any, index:any) => 
              <Box sx={AdminCardFields} key={uuidv4()}>
                <Box><h2>{item.text}</h2></Box>
                <Box><h4>{item.value ??  <Skeleton/>}</h4></Box>
              </Box>
            )
          }
        </Box>
        :
        <Box>Cargando</Box>
      }
    </>
  )
}

export default AdminInfoCard