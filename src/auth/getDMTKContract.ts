import { ethers } from 'ethers';

import DreWMartToken from '../artifacts/contracts/Contracts.sol/DreWMartToken.json';

interface eth {
  ethereum?: any
}

const getDMTKContract = async () => {
  type windowType = Window & typeof globalThis & eth;
  if (typeof window !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider((window as windowType).ethereum);
      const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_DMTK_ADDRESS), DreWMartToken.abi, provider);
      const signer = contract.connect(provider.getSigner());
      // console.log(provider);
      // console.log(contract);
      // console.log(signer);
      return signer;
    } catch (err) {
      console.log(err);
      throw new Error('Please ensure Metamask is Installed');
    }
  }
  // Window is not defined!
  throw new Error('Refresh the Browser');
};

export default getDMTKContract;
