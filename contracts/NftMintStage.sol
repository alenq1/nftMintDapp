// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NftMintStage is ERC721, ERC721Enumerable, Ownable, ReentrancyGuard {
    

    enum MintStage {        
        INITIATED,       
        WHITEMINT,
        PUBLICMINT,
        REVEAL,        
        FINISHED
    }

    struct WhitelistData {
        bool isWhiteListed;
        uint256 allowedMints;

    }

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    
    bool public isPaused;   
    bool public burnEnabled;    
    // uint public whitelistCount;
    mapping(address => WhitelistData) public whiteListedAddress;    
    uint256 public maxSupply;
    uint256 public maxMintPerWalletWhite;
    uint256 public maxMintPerWalletPublic;    
    uint256 public mintPricePublic;
    uint256 public mintPriceWhite; 
    string public uri;       
    string public baseExtension = ".json";
    MintStage public stage;
    uint256 public lastActivity;
    
    
    constructor(
        string memory name_, 
        string memory symbol_,
        uint256 maxSupply_,
        uint256 maxMintPerWalletPublic_,
        uint256 maxMintPerWalletWhite_,        
        uint256 mintPricePublic_,
        uint256 mintPriceWhite_
    ) 
        ERC721(name_, symbol_){                
        burnEnabled = false;      
        maxSupply = maxSupply_;
        maxMintPerWalletPublic = maxMintPerWalletPublic_;
        maxMintPerWalletWhite = maxMintPerWalletWhite_;
        mintPricePublic = mintPricePublic_;
        mintPriceWhite = mintPriceWhite_;
        lastActivity = block.timestamp;
        stage = MintStage.INITIATED;
        
    }

    modifier atStage(MintStage _stage) {
        require(!isPaused, "The contract is paused");
        require(stage == _stage, "This action is not allowed in this status");
        _;
    }

    modifier validateMint(uint256 amount){           
        require(amount > 0, "minimum mint amount is 1");    
        require(totalSupply() < maxSupply, "Sold Out");  
        require(msg.sender == tx.origin, "only mint origin wallet"); 
        _;
    }
    
    function setMaxSupply(uint256 maxSupply_) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        public {
            maxSupply = maxSupply_;
    } 

    function setMaxMintPerWallet(uint256 maxMintPerWalletWhite_, uint256 maxMintPerWalletPublic_) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        public {            
            maxMintPerWalletWhite = maxMintPerWalletWhite_;
            maxMintPerWalletPublic = maxMintPerWalletPublic_;
    }

    function setMintPrices(uint256 mintPriceWhite_, uint256 mintPricePublic_) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        public {
            mintPriceWhite = mintPriceWhite_;
            mintPricePublic = mintPricePublic_;            
    }

    function setBaseUri(string memory uri_) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        public {
            uri = uri_;
    } 

    function addAddressToWhitelist(address[] calldata _addresses) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        external   
    {
        require(_addresses.length > 0, "No addresses");
        for (uint256 i = 0; i < _addresses.length; i++) {
            whiteListedAddress[_addresses[i]].allowedMints = maxMintPerWalletWhite;
            whiteListedAddress[_addresses[i]].isWhiteListed = true;
            // whitelistCount++;
            emit AddedToWhiteList(_addresses[i]);
        }
    }

    function removeAddressFromWhitelist(address _address) 
        onlyOwner
        atStage(MintStage.INITIATED)        
        external {
        
            require(whiteListedAddress[_address].isWhiteListed, "Address is not whitelisted");        
            delete whiteListedAddress[_address]; 
            // whitelistCount--;       
            emit RemovedFromWhiteList(_address);
    }


    function whiteMint(uint256 amount) 
        atStage(MintStage.WHITEMINT)
        validateMint(amount)
        external 
        payable { 
            // require(block.timestamp - lastActivity > 1 minutes, "WhiteListMint not active yet");
            require(whiteListedAddress[msg.sender].isWhiteListed, "address not whitelisted");
            require(amount <= maxMintPerWalletWhite, "exceed max mint per wallet");            
            require(whiteListedAddress[msg.sender].allowedMints >= amount, "not allowed mint more than amount left");
            
            require(mintPriceWhite * amount <= msg.value, "insuficient fonds");                        
            require((whiteListedAddress[msg.sender].allowedMints - amount) >= 0, "no negative");
            
            whiteListedAddress[msg.sender].allowedMints -= amount;
            for (uint256 i = 0; i < amount; i++) {
                _tokenIdCounter.increment();
                _mint(msg.sender, _tokenIdCounter.current());        
            }
            emit WhiteMintEvent(msg.sender, amount);

    }

    function publicMint(uint256 amount) 
        atStage(MintStage.PUBLICMINT)
        validateMint(amount)        
        external 
        payable{
            // require(block.timestamp - lastActivity > 1 minutes, "PublicMint not active yet");
            require(amount <= maxMintPerWalletPublic, "exceed max mint per wallet");  
            require((amount + totalSupply()) <= maxSupply, "amount exceed remaining mint");              
            require(mintPricePublic * amount <= msg.value, "insuficient fonds"); 
                                    
            for (uint256 i = 0; i < amount; i++) {
                _tokenIdCounter.increment();
                _safeMint(msg.sender, _tokenIdCounter.current());        
            }    
            
            emit PublicMintEvent(msg.sender, amount);  
    }


    function revealCollection(string memory uri_) 
        onlyOwner
        atStage(MintStage.REVEAL)        
        public {
            uri = uri_;                   
    }  


    function withdraw() 
        onlyOwner
        atStage(MintStage.FINISHED)
        nonReentrant
        public 
        payable 
        {
            require(address(this).balance > 0, "Balance is 0");
            payable(owner()).transfer(address(this).balance);
    }

    function enableBurn()     
    onlyOwner 
    atStage(MintStage.FINISHED) 
    public {
        burnEnabled = true;
    }

    function setPause() 
        onlyOwner
        public {
            isPaused = !isPaused;
            lastActivity = block.timestamp;
            emit SetPause(isPaused, block.timestamp);
    } 

    
    function nextStage() public onlyOwner {
        require(!isPaused, "The contract is paused");
        stage = MintStage(uint(stage) + 1);
        lastActivity = block.timestamp;
        emit StageChanged(stage, block.timestamp);
    }

    
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721 Metadata: URI query for nonexistent token"
        ); 

        if(stage == MintStage.REVEAL){
            return string(abi.encodePacked(uri,  Strings.toString(tokenId),baseExtension));
        }
        else{
            return string(abi.encodePacked(uri));
        }
        
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    
    event StageChanged(MintStage indexed, uint256 time );
    event SetPause(bool isPaused, uint256 time );
    event AddedToWhiteList(address indexed whitelistAddress);
    event RemovedFromWhiteList(address indexed removedAddress);
    event WhiteMintEvent(address indexed sender, uint indexed amount);
    event PublicMintEvent(address indexed sender, uint indexed amount);
    event Withdraw(address indexed msgSender, address indexed token);
}
