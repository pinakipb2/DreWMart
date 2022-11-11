import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { loginRetailer } from '../../api';
import connectAccount from '../../auth';
import { useAppSelector } from '../../redux/hooks';
import { addWalletAddress, login } from '../../redux/retailer/retailerSlice';

const RetailerLogin: NextPage = () => {
  const dispatch = useDispatch();
  const walletAddress = useAppSelector((state: any) => state.retailer.walletAddress);
  const connectToMetamask = async () => {
    try {
      const account: string = await connectAccount();
      console.log(account);
      dispatch(addWalletAddress(account));
      toast.success(`${account.slice(0, 6)}..${account.slice(-6)} Connected`, { id: `${account}` });
    } catch (err: any) {
      toast.error(`${err.message}`, { id: 'metamask-error' });
    }
  };
  const signIn = async () => {
    // Check if the retailer is valid
    try {
      const { data } = await loginRetailer({ walletAddress });
      console.log(data);
      dispatch(login(data));
      Router.push('/retailer/dashboard');
    } catch (err: any) {
      console.log(err.response.data);
      toast.error(err.response.data.message, { id: walletAddress });
    }
  };
  return (
    <div className="w-full h-screen bg-login-bg">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src="/drewmart.svg" alt="DreWMart" width={200} height={50} />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Log In to Retailer Panel
              </h1>
              <div className="w-full">
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-700 border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-not-allowed"
                    placeholder={`${walletAddress === '' ? 'Please connect to Metamask' : walletAddress}`}
                    disabled
                  />
                </div>
              </div>
              <div className="w-full px-5">
                <div className="flex justify-between mt-4">
                  <button
                    className="px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30 select-none"
                    onClick={() => {
                      connectToMetamask();
                    }}>
                    Connect To Metamask
                  </button>
                  <button
                    className="px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30 select-none"
                    onClick={() => {
                      signIn();
                    }}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailerLogin;
