import Box from '@mui/material/Box';
import {useAdminCollectionState} from './utils';
import {StyledAdminPanel, AdminCards} from './style';
import AdminForm from './AdminForm';
import AdminInfoCard from './AdminInfoCard';


const AdminPanel = () => {

  const {
    library,
    // loading, 
    // active, 
    formattedAddress, 
    formattedContDetail,
    contractBalance, 
    contractDetails, 
    contract,
    fields,
    handleChange,
    handleSwitch,
    send,
    setMaxQuantity,
    withdraw

  } = useAdminCollectionState()

  
  return (
          
        contractDetails ?
        
        <Box sx={StyledAdminPanel}>
          <Box>
            <h1>Collection Info</h1>
            <AdminCards>
              <AdminInfoCard 
                data={formattedContDetail}
                balance={contractBalance}
                library={library}
              /> 
            </AdminCards>
          </Box>
          <Box>
            <h1>Edit Settings</h1>
            <AdminCards>            
              <AdminForm 
                data={contract}
                contractDetails={contractDetails}
                account={formattedAddress}
                fields={fields}
                handleChange={handleChange}
                handleSwitch={handleSwitch}
                send={send}
                setMaxQuantity={setMaxQuantity}    
                withdraw={withdraw}            
              />
            </AdminCards>
          </Box>
        </Box>
        :
        <div>ERROR</div>      
  )
}

export default AdminPanel