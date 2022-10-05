import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { RiSettings5Line, RiShoppingBag3Line } from 'react-icons/ri';

const CustomerProfile: NextPage = () => (
  <div>
    <div className="bg-gray-200 flex w-full">
      <div className="ml-20 my-6 flex flex-col h-full w-1/4">
        <div className="p-4 pt-5 gap-1 flex flex-col">
          <div className="text-4xl font-semibold text-black pb-4">My Account</div>
          <div className="bg-gray-300 w-full px-5 justify-center h-[1.5px] mb-2" />
          <div className="flex font-semibold items-center gap-2 px-3 hover:cursor-pointer bg-blue-200 text-blue-600 rounded-md py-2">
            <span className="text-xl">
              <FaRegUserCircle />
            </span>
            <span>Personal Information</span>
          </div>
          <div className="flex font-semibold items-center gap-3 px-3 text-gray-500 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md">
            <span className="text-xl">
              <IoLocationSharp />
            </span>
            <span>My Addresses</span>
          </div>
          <div className="flex font-semibold items-center gap-3 px-3 text-gray-500 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md">
            <span className="text-xl">
              <FaRegHeart />
            </span>
            <span>My Wishlist</span>
          </div>
          <Link href="/orders">
            <div className="flex font-semibold items-center gap-3 px-3 text-gray-500 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md">
              <span className="text-xl">
                <RiShoppingBag3Line />
              </span>
              <span>My Orders</span>
            </div>
          </Link>
          <div className="flex font-semibold items-center gap-3 px-3 text-gray-500 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md">
            <span className="text-xl">
              <RiSettings5Line />
            </span>
            <span>Account Settings</span>
          </div>
        </div>
      </div>
      <div className="mr-20 mx-4 mb-20 my-6 flex flex-col h-full w-3/4">
        <div className="bg-white p-4 pt-5 shadow-md">
          <div className="flex justify-center items-center w-full gap-3 pb-4">
            <span className="text-5xl text-blue-600">
              <FaRegUserCircle />
            </span>
            <div className="text-4xl font-semibold text-blue-700">Personal Information</div>
          </div>
          <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
          <div className="pt-4 pb-2 w-full flex justify-center items-center px-7 gap-7">
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">First Name</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="John"
                disabled
              />
            </div>
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">Last Name</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="Doe"
                disabled
              />
            </div>
          </div>
          <div className="py-2 w-full flex justify-center items-center px-7 gap-7">
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">Email</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="JohnDoe@email.com"
                disabled
              />
            </div>
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">Wallet Address</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="0x165CD37b4C644C2921454429E7F9358d18A45e14"
                disabled
              />
            </div>
          </div>
          <div className="py-2 w-full flex justify-center items-center px-7 gap-7">
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">Phone Number</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="0123456789"
                disabled
              />
            </div>
            <div className="w-1/2">
              <label className="inline-block mb-1 text-gray-700">Date Of Birth</label>
              <input
                className="focus-visible:outline-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-50 bg-clip-padding border-2 border-solid border-blue-500 rounded m-0"
                type="text"
                value="31-12-1999"
                disabled
              />
            </div>
          </div>
          <div className="w-1/2 flex px-7 gap-8 py-6">
            <div className="">
              <button className="focus-visible:outline-none px-6 py-1 text-lg font-normal text-white bg-blue-600 rounded hover:shadow-md hover:shadow-blue-300">Save</button>
            </div>
            <div className="">
              <button className="focus-visible:outline-none px-6 py-1 text-lg font-normal text-black bg-gray-300 rounded hover:shadow-md">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerProfile;
