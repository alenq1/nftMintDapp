import Box from '@mui/material/Box';
import {AdminCardFields} from '../style'
// import Web3 from "web3"
import {ethers} from "ethers"
import Skeleton from '@mui/material/Skeleton';
import { v4 as uuidv4 } from "uuid";

const AdminInfoCard = ({data, balance, library}: any) => {

  // console.log(data,  "ZZZZZZZZZZZZZZZZZZ")
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