/* eslint-disable no-undef */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const axios = require('axios');
const hre = require('hardhat');

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
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther('1');

  // const Lock = await hre.ethers.getContractFactory('Lock');
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
