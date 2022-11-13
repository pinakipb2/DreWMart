// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const fs = require('fs');
const os = require('os');

const axios = require('axios');
const { ethers } = require('hardhat');

function setEnvValue(key, value) {
  // read file from hdd & split if from a linebreak to a array
  const ENV_VARS = fs.readFileSync('./.env', 'utf8').split(os.EOL);
  // find the env we want based on the key
  const target = ENV_VARS.indexOf(ENV_VARS.find((line) => line.match(new RegExp(key))));
  // replace the key/value with the new value
  ENV_VARS.splice(target, 1, `${key}=${value}`);
  // write everything back to the file system
  fs.writeFileSync('./.env', ENV_VARS.join(os.EOL));
  console.log(`${key}=${value}`);
}

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
  console.log('Account Balance:', (await deployer.getBalance()).toString());
  const DreWMartToken = await ethers.getContractFactory('DreWMartToken');
  const DMTK = await DreWMartToken.deploy();
  console.log('DMTK Address:', DMTK.address);
  setEnvValue('NEXT_PUBLIC_DMTK_ADDRESS', DMTK.address);
  console.log('Account Balance:', (await deployer.getBalance()).toString());
  const DreWToken = await ethers.getContractFactory('DreWToken');
  const DTK = await DreWToken.deploy();
  console.log('DTK Address:', DTK.address);
  setEnvValue('NEXT_PUBLIC_DTK_ADDRESS', DTK.address);
  console.log('Account Balance:', (await deployer.getBalance()).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
