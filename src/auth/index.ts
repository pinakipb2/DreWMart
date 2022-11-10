import { ethers } from 'ethers';

interface eth {
  ethereum?: any
}

const connectAccount = async () => {
  type windowType = Window & typeof globalThis & eth;
  if (typeof window !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider((window as windowType).ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      return accounts[0];
    } catch (err) {
      throw new Error('Please ensure Metamask is Installed');
    }
  }
  // Window is not defined!
  throw new Error('Refresh the Browser');
};

export default connectAccount;
