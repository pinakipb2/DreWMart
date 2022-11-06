import { ethers } from 'ethers';

const connectAccount = async () => {
  interface eth {
    ethereum?: any
  }
  type windowType = Window & typeof globalThis & eth;
  if (typeof window !== 'undefined') {
    const provider = new ethers.providers.Web3Provider((window as windowType).ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
  }
};

export default connectAccount;
