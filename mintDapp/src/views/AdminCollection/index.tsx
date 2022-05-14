import { Box} from '@mui/system';
import {useEffect} from 'react';
import {StyledAdminCollection} from './style';
import {useAdminCollectionState} from './utils';
import Button from '../../components/Button';
import AdminPanel from '../../components/AdminPanel';
import MintStages from "../../components/MintStages";

const AdminCollection = () => {

  const { loading, isAdmin, active, account } = useAdminCollectionState()

  const connect = () =>{
    console.log("connect fronm admin")
  }

  return (

  <Box sx={StyledAdminCollection } >    
    {
      isAdmin ?
      
      <>
        <MintStages isAdmin={isAdmin}/>
        <AdminPanel/>
      </>
      :
      active && !isAdmin ?
      <div>OnlyAccesAdmin</div>
      :
      <Button text={"Connect Wallet"} action={connect}/>

    }
  </Box>

  )
};

export default AdminCollection;
