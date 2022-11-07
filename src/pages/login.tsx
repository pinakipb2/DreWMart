import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBackIosNew } from 'react-icons/md';

const Login: NextPage = () => (
  <div className="h-screen flex flex-row w-full bg-login-bg">
    <div className="bg-login-right w-1/2 mt-10 ml-20 mb-10 rounded-l-3xl shadow-xl shadow-gray-900/50">
      <div className="text-white font-medium p-8 absolute flex flex-row gap-2 items-center justify-center hover:cursor-pointer hover:text-green-400 select-none">
        <Link href="/">
          <MdArrowBackIosNew />
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
      <div className="flex flex-col justify-center items-center place-content-center space-y-6 h-full">
        <div className="bg-white rounded-xl p-2">
          <Image alt="a" src="/cart.png" height="70" width="70" />
        </div>
        <div className="text-white font-medium text-xl">Sign in to Dashboard</div>
        <div className="w-full px-32">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email ID
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-login-input border border-login-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-login-input dark:border-login-right dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your email id"
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
              Sign In
            </button>
          </div>
        </div>
        <div className="pt-6 px-32 items-center justify-center place-content-center">
          <div className="text-white">
            Do not have an Account?{' '}
            <Link href="/register">
              <button className="text-green-400 hover:cursor-pointer">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
