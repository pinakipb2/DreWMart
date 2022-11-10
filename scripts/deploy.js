// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const axios = require('axios');
const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Owner Account', deployer.address);
  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/v1/admin/add-admin',
      { name: 'Pinaki Bhattacharjee', walletAddress: deployer.address.toLowerCase() },
      { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer token' } }
    );
    console.log(data);
  } catch (err) {
    console.log(err.response.data);
  }
  console.log('Account balance:', (await deployer.getBalance()).toString());
  const DreWMartToken = await ethers.getContractFactory('DreWMartToken');
  const DMTK = await DreWMartToken.deploy();
  console.log('DMTK address:', DMTK.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());
  const DreWToken = await ethers.getContractFactory('DreWToken');
  const DTK = await DreWToken.deploy();
  console.log('DTK address:', DTK.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
