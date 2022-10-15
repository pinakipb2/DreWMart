// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

import "@openzeppelin/contracts@4.7.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC20/extensions/ERC20Burnable.sol";

contract DreWMartToken is ERC721, ERC721Enumerable, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("DreWMartToken", "DMTK") {}

    function safeMint(
        string memory _productID,
        string memory _productName,
        uint256 _createdAt,
        uint256 _expiryAt
    ) external {
        onlyUser();
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        Warranty memory newWarranty = Warranty(
            _productID,
            _productName,
            _createdAt,
            _expiryAt
        );
        registeredWarranty[tokenId] = newWarranty;
        _safeMint(msg.sender, tokenId);
    }

    // Structs
    struct User {
        string name;
        address userAddress;
    }

    struct Warranty {
        string productID;
        string productName;
        uint256 createdAt;
        uint256 expiryAt;
    }

    // mappings
    mapping(address => User) registeredUsers;
    mapping(uint256 => Warranty) public registeredWarranty;

    // User Only Action
    function onlyUser() internal view {
        require(
            registeredUsers[msg.sender].userAddress != address(0),
            "Access Denied"
        ); // Not Registered as User
    }

    // Pass: User is not User
    function alreadyRegisteredUser(address _userAddress) internal view {
        if (registeredUsers[_userAddress].userAddress != address(0)) {
            revert("Already Registered");
        }
    }

    function addUser(string memory _name) external {
        alreadyRegisteredUser(msg.sender);
        User memory newUser = User(_name, msg.sender);
        registeredUsers[msg.sender] = newUser;
    }

    function burnAllTokens() external {
        onlyUser();
        uint256 noOfTokens = balanceOf(msg.sender);
        for (uint256 i = 0; i < noOfTokens; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(msg.sender, i);
            burn(tokenId);
        }
    }

    function burn(uint256 tokenId) public virtual override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not Owner");
        if (registeredWarranty[tokenId].expiryAt < block.timestamp) {
            delete registeredWarranty[tokenId];
            _burn(tokenId);
        }
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        if (from != address(0) && to != address(0)) {
            revert("Access Denied !");
        }
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

    function renounceOwnership() public virtual override onlyOwner {
        revert("Access Denied !");
    }

    function approve(address to, uint256 tokenId)
        public
        virtual
        override(ERC721, IERC721)
    {
        revert("Access Denied !");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721, IERC721) {
        revert("Access Denied !");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override(ERC721, IERC721) {
        revert("Access Denied !");
    }

    function setApprovalForAll(address operator, bool approved)
        public
        virtual
        override(ERC721, IERC721)
    {
        revert("Access Denied !");
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721, IERC721) {
        revert("Access Denied !");
    }
}

contract DreWToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("DreWToken", "DTK") {
        Admin memory ownerAdmin = Admin("OWNER", msg.sender);
        registeredAdmins[msg.sender] = ownerAdmin;
    }

    struct Admin {
        string name;
        address adminAddress;
    }

    struct Retailer {
        string name;
        address retailerAddress;
    }

    mapping(address => Admin) registeredAdmins;
    mapping(address => Retailer) registeredRetailers;

    // Admin Only Action
    function onlyAdmin() internal view {
        require(
            registeredAdmins[msg.sender].adminAddress != address(0),
            "Access Denied"
        ); // Not Registered as Admin
    }

    // Pass: User is not Admin
    function alreadyRegisteredAdmin(address _userAddress) internal view {
        if (registeredAdmins[_userAddress].adminAddress != address(0)) {
            revert("User Already Admin");
        }
    }

    // Retailer Only Action
    function onlyRetailer() internal view {
        require(
            registeredRetailers[msg.sender].retailerAddress != address(0),
            "Access Denied"
        ); // Not Registered as Retailer
    }

    // Pass: User is not Retailer
    function alreadyRegisteredRetailer(address _userAddress) internal view {
        if (registeredRetailers[_userAddress].retailerAddress != address(0)) {
            revert("Already Registered");
        }
    }

    function addRetailer(string memory _name, address _retailerAddress)
        external
    {
        onlyAdmin();
        alreadyRegisteredAdmin(_retailerAddress);
        alreadyRegisteredRetailer(_retailerAddress);
        Retailer memory newRetailer = Retailer(_name, _retailerAddress);
        registeredRetailers[_retailerAddress] = newRetailer;
    }

    function addAdmin(string memory _name, address _adminAddress) external {
        onlyAdmin();
        alreadyRegisteredAdmin(_adminAddress);
        alreadyRegisteredRetailer(_adminAddress);
        Admin memory newAdmin = Admin(_name, _adminAddress);
        registeredAdmins[_adminAddress] = newAdmin;
    }

    // Decide if this function is ownerOnly or not
    function mint(uint256 amount) public {
        onlyRetailer();
        _mint(msg.sender, amount);
    }

    function burn(uint256 amount) public virtual override {
        onlyRetailer();
        _burn(msg.sender, amount);
    }

    function renounceOwnership() public virtual override onlyOwner {
        revert("Access Denied !");
    }

    function burnFrom(address account, uint256 amount) public virtual override {
        revert("Access Denied !");
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function transfer(address to, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        revert("Access Denied !");
    }

    function allowance(address owner, address spender)
        public
        view
        virtual
        override
        returns (uint256)
    {
        revert("Access Denied !");
    }

    function approve(address spender, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        revert("Access Denied !");
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        revert("Access Denied !");
    }

    function increaseAllowance(address spender, uint256 addedValue)
        public
        virtual
        override
        returns (bool)
    {
        revert("Access Denied !");
    }

    function decreaseAllowance(address spender, uint256 subtractedValue)
        public
        virtual
        override
        returns (bool)
    {
        revert("Access Denied !");
    }
}
