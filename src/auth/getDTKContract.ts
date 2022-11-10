import { ethers } from 'ethers';

import DreWToken from '../artifacts/contracts/Contracts.sol/DreWToken.json';

interface eth {
  ethereum?: any
}

const getDTKContract = async () => {
  type windowType = Window & typeof globalThis & eth;
  if (typeof window !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider((window as windowType).ethereum);
      const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_DTK_ADDRESS), DreWToken.abi, provider);
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

export default getDTKContract;
