import Box from '@mui/material/Box';
import {AdminCardFields} from '../style'
import Skeleton from '@mui/material/Skeleton';
import { v4 as uuidv4 } from "uuid";

const AdminInfoCard = ({data}: any) => {

  // console.log(data,  "DATA ADMIN INFO CARD")
  // console.log(balance,  "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    
  return (
    <>
      {
        data && data.length > 0 ?
        <>
          {
            data.map( (item:any, index:any) => 
              <Box sx={AdminCardFields} key={uuidv4()}>
                <Box>{item.text}</Box>
                <Box>{item.value ??  <Skeleton/>}</Box>
              </Box>
            )
          }
        </>
        :
        <Box>Cargando</Box>
      }
    </>
  )
}

export default AdminInfoCard