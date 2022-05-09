const { ethers, deployments, getNamedAccounts } = require('hardhat')

const contractInitFixture = deployments.createFixture(
    async ({ deployments, getNamedAccounts, ethers }, options) => {
      // Edit: This is not neeeded as it got called through getDeployedContracts below
      // await deployments.fixture();
  
      // console.log('STARTSTART FIXTURE')
  
      // const deployer = await getdeployerSigner();
  
      const { contract } = await getDeployedContracts() // Also assures deployments - see below, so maybe deployments.fixture() is useless up there?
      // console.log(typeof(contract), 'CONTRACT GETDEPLOYED CONTYRACT')
  
      // const { deployer } = await getNamedAccounts()
      const [deployer, otro] = await ethers.getSigners()
  
      const calcOutcome = await contract.totalSupply()
  
      // console.log(`initial calculation outcome ${calcOutcome}`)
  
      const tx = await contract.connect(deployer).setPause()
  
      const response = await tx.wait()
  
      // console.log(response, 'RESPIONSE')
    },
    'contractInitFixture'
)

async function getDeployedContracts() {
    // Ensures the deployment is executed and reset (uses evm_snapshot for faster tests)
    const deployedContracts = await deployments.fixture(['NftMintStage'])
  
    // console.log(deployedContracts, "DEPLOYED CONTRActs")
    // Instantiated contracts in the form of a ethers.js Contract instance
    const contract = 
       await ethers.getContractAt(
        'NftMintStage',
        deployedContracts.NftMintStage.address        
      )
    const accounts = await getNamedAccounts()
    const signers = await ethers.getSigners()
  
    return {
      contract,
      accounts,
      signers
    }
  }

module.exports = {
    contractInitFixture,
    getDeployedContracts
}