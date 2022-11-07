import { useState } from 'react';

import { faker } from '@faker-js/faker';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GiBatMask } from 'react-icons/gi';
import { MdArrowBackIosNew } from 'react-icons/md';

interface IRegisterFormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  walletAddress?: string;
}

const Register: NextPage = () => {
  const [formDetails, setFormDetails] = useState<IRegisterFormDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    walletAddress: '',
  });
  const fillFakeData = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName, 'gmail.com', { allowSpecialCharacters: true });
    const phoneNumber = faker.phone.number('+91##########');
    const address = faker.address.streetAddress(true);
    console.log({ firstName, lastName, email, phoneNumber, address });
    setFormDetails({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    });
  };
  return (
    <div className="h-screen flex flex-row w-full bg-login-bg">
      <div className="bg-login-right w-1/2 mt-10 ml-20 mb-10 rounded-l-3xl shadow-xl shadow-gray-900/50">
        <div className="text-white font-medium p-8 absolute flex flex-row gap-2 items-center justify-center hover:cursor-pointer hover:text-green-400 select-none">
          <Link href="/">
            <span>
              <MdArrowBackIosNew />
            </span>
          </Link>
          <Link href="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="flex flex-col text-white justify-center w-full ml-20 h-full align-center">
          <div className="text-7xl font-bold">Join Our Community</div>
          <div className="mt-6 font-medium text-xl">Shop smarter with secure NFT based Warranty System</div>
        </div>
      </div>
      <div className="bg-login-left w-1/2 mt-10 mr-20 mb-10 rounded-r-3xl shadow-xl shadow-gray-900/50">
        <div className="flex flex-col justify-center items-center place-content-center space-y-3 h-full">
          <div className="bg-white rounded-xl p-2">
            <Image alt="a" src="/cart.png" height="60" width="65" />
          </div>
          <div className="text-white font-medium text-xl">Register to ABC</div>
          <div className="w-full px-32 flex flex-row space-x-4">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={formDetails.firstName}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={formDetails.lastName}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your last name"
                required
              />
            </div>
          </div>
          <div className="w-full px-32 flex flex-row space-x-4">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email ID
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={formDetails.email}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your email id"
                required
              />
            </div>
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={formDetails.phoneNumber}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your phone number"
                required
              />
            </div>
          </div>
          <div className="w-full px-32">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Address
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={formDetails.address}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your address"
                required
              />
            </div>
          </div>
          <div className="w-full px-32">
            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Wallet Address
              </label>
              <input
                type="text"
                id="address"
                defaultValue={formDetails.walletAddress}
                className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-not-allowed"
                // placeholder="0x66a576A977b7Bccf510630E0aA5e450EC11361Fa"
                placeholder="Please connect to Metamask"
                disabled
              />
            </div>
          </div>
          <div className="w-full px-32">
            <div className="flex justify-between mt-4">
              <button className="px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30 select-none">
                Connect To Metamask
              </button>
              <button className="px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30 select-none">
                Register
              </button>
            </div>
          </div>
          <div className="pt-2 px-32 items-center justify-center place-content-center">
            <div className="text-white">
              Already have an Account?{' '}
              <Link href="/login">
                <button className="text-green-400 hover:cursor-pointer">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="absolute bg-indigo-600 rounded-xl h-10 w-10 bottom-0 right-0 m-2 text-white text-center font-medium inline-flex items-center justify-center hover:bg-indigo-800 shadow-md"
        onClick={() => {
          fillFakeData();
        }}
      >
        <GiBatMask />
      </button>
    </div>
  );
};

export default Register;
