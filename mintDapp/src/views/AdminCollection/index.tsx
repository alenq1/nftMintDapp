import { Box} from '@mui/system';
import Main from '../../layouts/Main'
import {StyledAdminCollection} from './style';
import {useAdminCollectionState} from './utils';
;import AdminPanel from '../../components/AdminPanel';
import MintStages from "../../components/MintStages";

const AdminCollection = () => {

  const { loading, isAdmin, active, account } = useAdminCollectionState()

  return (

  <Main sx={StyledAdminCollection } >    
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
      <div>Please connect Wallet</div>

    }
  </Main>

  )
};

export default AdminCollection;
