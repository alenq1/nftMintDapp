const { expect } = require('chai')
const { ethers, getNamedAccounts } = require('hardhat')
const { utils } = require('ethers')
const { contractInitFixture,getDeployedContracts} = require('./utils')

let contract
let accounts
let owner
let deployer, 
    wladdr1, wladdr2, wladdr3, wladdr4,
    pubaddr1, pubaddr2, pubaddr3,restAddress

const tokenName = process.env.NFT_TOKEN_NAME
const tokenSymbol = process.env.NFT_TOKEN_SYMBOL
const baseUri = process.env.BASE_URI
const maxSupply = 12
const maxMintPerWalletPublic = 6
const maxMintPerWalletWhite = 4
const mintPriceWhite = utils.parseEther(process.env.PRICE_WHITE.toString())
const mintPricePublic = utils.parseEther(process.env.PRICE_PUBLIC.toString())

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)
let uri = ''
const provider = ethers.getDefaultProvider()



describe('Contract', async function () {
  beforeEach(async function () {
    // Assure we have any contract state ready
    await contractInitFixture()

    // This is the root cause - since it restores the previous (deployment) fixture
    const contractData = await getDeployedContracts()
    contract = contractData.contract
    accounts = contractData.accounts     

    wladdr1 = contractData.signers[1]
    wladdr2 = contractData.signers[2]
    wladdr3 = contractData.signers[3]
    wladdr4 = contractData.signers[4]
    pubaddr1 = contractData.signers[5]
    pubaddr2 = contractData.signers[6]
    pubaddr3 = contractData.signers[7]

    await contract.setMaxSupply(maxSupply)    
    await contract.setMaxMintPerWallet(maxMintPerWalletWhite, maxMintPerWalletPublic)
    await contract.setMintPrices(mintPriceWhite, mintPricePublic)

  })

  it('Should track name and symbol of the nft collection', async function () {
    
    const { deployer } = await getNamedAccounts()
    
    const nftName = process.env.NFT_TOKEN_NAME
    const nftSymbol = process.env.NFT_TOKEN_SYMBOL
    
    expect(await contract.name()).to.equal(nftName)
    expect(await contract.symbol()).to.equal(nftSymbol)
    expect(await contract.owner()).to.equal(deployer)
  })

  it('Show total supply, and max mint per wallet', async function () {
    
    expect(await contract.maxSupply()).to.equal(maxSupply)
    expect(await contract.maxMintPerWalletPublic()).to.equal(
      maxMintPerWalletPublic
    )
    expect(await contract.maxMintPerWalletWhite()).to.equal(
      maxMintPerWalletWhite
    )
  })

  describe("contract states", async function (){
    
    it("show paused state", async function (){
      const isPaused = await contract.isPaused()
      await contract.setPause()
      expect(await contract.isPaused()).to.equal(!isPaused)
    })

    describe("set max supply", async function (){
    
        const newMaxSupply = 30

      it("check max supply change", async function (){
        
        expect(await contract.isPaused()).to.equal(false)
        expect(await contract.stage()).to.equal(0)
        expect(await contract.maxSupply()).to.equal(maxSupply)
        
        await contract.setMaxSupply(newMaxSupply)
        
        expect(await contract.maxSupply()).to.equal(newMaxSupply)             
        // expect(await contract.tokenURI(1)).to.be.revertedWith("'ERC721 Metadata: URI query for nonexistent token'");
        
      })
    })

    describe("max mint per wallet", async function (){
    
      const newMaxMintPerWalletWhite = 3
      const newMaxMintPerWalletPublic = 5

      it("set and change max mint", async function (){
        
        expect(await contract.isPaused()).to.be.false
        expect(await contract.stage()).to.equal(0)
        await contract.setMaxMintPerWallet(newMaxMintPerWalletWhite, newMaxMintPerWalletPublic)      
        expect(await contract.maxMintPerWalletWhite()).to.not.equal(maxMintPerWalletWhite)       
        expect(await contract.maxMintPerWalletWhite()).to.equal(newMaxMintPerWalletWhite)       
        expect(await contract.maxMintPerWalletPublic()).to.not.equal(maxMintPerWalletPublic)       
        expect(await contract.maxMintPerWalletPublic()).to.equal(newMaxMintPerWalletPublic)       
        
      })
    })

    describe("set mint price", async function (){
    
      const newMintPriceWhite = utils.parseEther(0.02.toString())
      const newMintPricePublic = utils.parseEther(0.04.toString())

      it("set and change mint Prices", async function (){    
              
        expect(await contract.isPaused()).to.be.false
        expect(await contract.stage()).to.equal(0)
        await contract.setMintPrices(newMintPriceWhite, newMintPricePublic)
        // await contract.setMaxSupply(newMaxSupply)
        const changedMintPriceWhite = await contract.mintPriceWhite()              
      })
    })

    describe("base uri", async function (){
    
    const newBaseUri = "ipfs://asdasdsa/"

    it("set base uri", async function (){
        expect(await contract.stage()).to.equal(0)
        const isPaused = await contract.isPaused()
        await contract.setBaseUri(newBaseUri)
        expect(await contract.uri()).to.equal(newBaseUri)
      })
    })

    describe("manage users on whitelist", async function (){

      
      beforeEach("adding address to whitelist before each method", async function (){

        await contract.addAddressToWhitelist(
          [
            wladdr1.address, wladdr2.address, wladdr3.address, wladdr4.address
          ]
        )  
      })      
      
      it("set users in whitelist", async function (){              
        
        expect(await contract.stage()).to.equal(0);
        expect(await contract.isPaused()).to.equal(false)
                
        const wl1Result = await contract.whiteListedAddress(wladdr1.address)                
        const wl2Result = await contract.whiteListedAddress(wladdr2.address)
        const pubResult = await contract.whiteListedAddress(pubaddr1.address)
        expect(wl1Result).to.include(true, maxMintPerWalletWhite)
        expect(wl2Result).to.include(true, maxMintPerWalletWhite)
        expect(pubResult).to.include(false, 0)

      })

      it("remove user from whitelist", async function (){
                
        await contract.removeAddressFromWhitelist(wladdr1.address)
        expect(await contract.whiteListedAddress(wladdr1.address)).to.include(false, 0)
        expect(await contract.whiteListedAddress(wladdr2.address)).to.include(true, maxMintPerWalletWhite)
      })

    })

    describe("Minting NFTs", async function () {

      beforeEach("check is not paused", async function (){

        expect(await contract.isPaused()).to.equal(false)
        await contract.addAddressToWhitelist(
          [
            wladdr1.address, wladdr2.address, wladdr3.address, wladdr4.address
          ]
        )          
        const wl2Result = await contract.whiteListedAddress(wladdr2.address)
        
        
      })

      it("Should track each WHITELIST minted NFT", async function () {
        
        let state = await contract.stage()        
        await expect(contract.connect(wladdr1).whiteMint(2, {value: toWei(2)})).to.be.revertedWith('This action is not allowed in this status')        
        await contract.nextStage()   
        expect(await contract.stage()).to.equal(1);    
        
        // TIME
        // console.log(await contract.connect(accounts.wladdr1).whiteMint(2), "RESULT DE MINTEAR1")    
        // await expect(contract.connect(accounts.wladdr2).whiteMint(2, {value: toWei(2)})).to.be.revertedWith("WhiteList not active yet")
        // this.timeout(70100)
        // await sleep(60100)     
        // ///console.log(await contract.stage(), "STATE CONTRACT DESPUES")
        // state = await contract.stage()
        // expect(state).to.equal(1);    

        await expect(contract.connect(pubaddr1).whiteMint(2, {value: toWei(2)})).to.be.revertedWith('address not whitelisted')        
        await expect(contract.connect(wladdr2).whiteMint(5, {value: toWei(2)})).to.be.revertedWith("exceed max mint per wallet")        
        await contract.connect(wladdr2).whiteMint(2, {value: toWei(5)})
        
        let balanceNFT = await contract.balanceOf(wladdr2.address)
        
        await expect(balanceNFT).to.equal(2)
        await expect(contract.connect(wladdr2).whiteMint(3, {value: toWei(8)})).to.be.revertedWith("not allowed mint more than amount left")        
        await expect(contract.connect(wladdr1).whiteMint(2)).to.be.revertedWith("insuficient fonds")     
        await contract.connect(wladdr2).whiteMint(2, {value: toWei(5)})
        
        balanceNFT = await contract.balanceOf(wladdr2.address)
        
        await expect(balanceNFT).to.equal(4)
        await expect(contract.connect(wladdr2).whiteMint(1, {value: toWei(5)})).to.be.revertedWith('not allowed mint more than amount left')
        
        // this.timeout(8010)
        // await sleep(6010)             
        // console.log(await contract.whiteListedAddress(accounts.wladdr3.address), "WL3 ANT MINT")
        
        await contract.connect(wladdr3).whiteMint(3, {value: toWei(5)})        
        expect(await contract.balanceOf(wladdr3.address)).to.equal(3)        
        expect(await contract.totalSupply()).to.equal(7);  
        
        stage = await contract.stage()        
        expect(await contract.tokenURI(2)).to.equal(uri);

      });

      it("Should track each PUBLIC minted NFT", async function () {
      
        await expect(contract.connect(pubaddr3).publicMint(1, {value: toWei(3)})).to.be.revertedWith("This action is not allowed in this status")        
        await contract.nextStage()   
        await expect(contract.connect(pubaddr3).publicMint(1, {value: toWei(3)})).to.be.revertedWith("This action is not allowed in this status")        
        await contract.nextStage()  
        
        expect(await contract.stage()).to.equal(2);
        await contract.connect(pubaddr2).publicMint(2, {value: toWei(5)})
        
        expect(await contract.balanceOf(pubaddr2.address)).to.equal(2)                
        await expect(contract.connect(pubaddr2).publicMint(7, {value: toWei(2)})).to.be.revertedWith("exceed max mint per wallet")                      
        
        await contract.connect(pubaddr2).publicMint(4, {value: toWei(5)})        
        expect(await contract.balanceOf(pubaddr2.address)).to.equal(6)
        await contract.connect(pubaddr1).publicMint(3, {value: toWei(3)})
        expect(await contract.totalSupply()).to.equal(9)        
        
        await expect(contract.connect(pubaddr3).publicMint(4, {value: toWei(25)})).to.be.revertedWith("amount exceed remaining mint")              
        await expect(contract.connect(pubaddr1).publicMint(1)).to.be.revertedWith("insuficient fonds")        
        await contract.connect(pubaddr1).publicMint(3, {value: toWei(2)})
      //   expect(await contract.balanceOf(pubaddr1.address)).to.equal(6)
        expect(await contract.totalSupply()).to.equal(12)
      //   await contract.connect(pubaddr3).publicMint(1, {value: toWei(1)})
      //   expect(await contract.balanceOf(pubaddr3.address)).to.equal(1)      
        await expect(contract.connect(pubaddr3).publicMint(1)).to.be.revertedWith("Sold Out")      

      });
    })

    describe("Reveal Collection", async function(){

      const revealURI = "ipfs://revealed/";

      it("set reveal URI", async function (){

          await contract.nextStage()
          await expect(contract.setBaseUri(revealURI)).to.be.revertedWith("This action is not allowed in this status")        
          await contract.nextStage()
          await expect(contract.setBaseUri(revealURI)).to.be.revertedWith("This action is not allowed in this status")        
          await contract.nextStage()
      
          expect(await contract.stage()).to.equal(3)
          expect(await contract.uri()).to.equal("")
          await contract.revealCollection(revealURI)
          expect(await contract.uri()).to.equal(revealURI)                  
          expect(await contract.tokenURI(2)).to.equal(revealURI);
          // await contract.nextStage()
          // expect(await contract.tokenURI(2)).to.equal(revealURI+"2.json");

        })    
    })

    describe("Withdraw funds from contract", async function (){
      
      const { deployer } = await getNamedAccounts()
      // const balanceContract = await provider.getBalance(contract.address)      

      it("check balance after mint", async function (){
        
      await contract.nextStage()
      await expect(contract.withdraw()).to.be.revertedWith("This action is not allowed in this status")        
      await contract.nextStage()
      await expect(contract.withdraw()).to.be.revertedWith("This action is not allowed in this status")              
      
      const balanceBefore = await provider.getBalance(contract.address)
      
      await contract.connect(accounts.pubaddr1).publicMint(3, {value: toWei(2)})    
      
      await contract.nextStage()
      await expect(contract.withdraw()).to.be.revertedWith("This action is not allowed in this status")        
      await contract.nextStage()
      await expect(contract.connect(accounts.pubaddr1).withdraw()).to.be.revertedWith("Ownable: caller is not the deployer")        
      
      const balanceAfter = (await provider.getBalance(contract.address)).toString()      
      await contract.withdraw()      
      // await expect(contract.withdraw()).to.be.revertedWith("Balance is 0") 
      })
    })
  });
})
