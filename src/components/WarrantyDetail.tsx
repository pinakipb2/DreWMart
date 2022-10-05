import React from 'react';

import date from 'date-and-time';
import { NextPage } from 'next';
import Link from 'next/link';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillCreditCard2FrontFill, BsHourglassBottom, BsHourglassSplit, } from 'react-icons/bs';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { RiSettings5Line, RiShoppingBag3Line } from 'react-icons/ri';
import QRCode from 'react-qr-code';

import { Store } from '../types';
import { days, month } from '../utils';

const WarrantyDetail: NextPage<{ productResp: Store }> = ({ productResp }) => (
  <div className="bg-gray-200 flex w-full">
    <div className="ml-20 my-6 flex flex-col h-full w-1/4">
      <div className="p-4 pt-5 gap-1 flex flex-col">
        <div className="text-4xl font-semibold text-black pb-4">My Account</div>
        <div className="bg-gray-300 w-full px-5 justify-center h-[1.5px] mb-2" />
        <Link href="/profile">
          <div className="flex font-semibold items-center gap-2 px-3 hover:cursor-pointer rounded-md py-2 text-gray-500 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md">
            <span className="text-xl">
              <FaRegUserCircle />
            </span>
            <span>Personal Information</span>
          </div>
        </Link>
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
          <div className="flex font-semibold items-center gap-3 px-3 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md rounded-md bg-blue-200 text-blue-600">
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
      <div className="bg-white p-4 pt-5 shadow-md mb-10">
        <div className="flex justify-center items-center w-full gap-3 pb-4">
          <span className="text-5xl text-blue-600">
            <BsFillCreditCard2FrontFill />
          </span>
          <div className="text-4xl font-semibold text-blue-700">My Warranty</div>
        </div>
        <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
        <div className="p-4 pt-5 mb-10 w-full flex justify-center items-center">
          <div className="flex flex-col my-4 w-1/2">
            <div className={`flex flex-col mt-4 border-none rounded-lg ${(date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration) > new Date(productResp.soldAt as string) || date.isSameDay(date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration), new Date())) ? 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500' : 'bg-gradient-to-b from-gray-900 to-gray-600'}  py-6 px-6 text-white`}>
              <div className="flex justify-between text-lg pb-8">
                <span className="bg-white p-2 w-fit rounded-md">
                  <QRCode value={productResp.prodId} size={60} />
                </span>
                <div className="flex flex-col items-end">
                  <div className="flex gap-1 items-center">
                    <span>Warranty Card</span>
                    <FiShield />
                  </div>
                  <div className="font-bold">{`${productResp.Product.name.slice(0, 25)}...`}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <BiTimeFive />
                  Valid Till:
                </div>
                <div className="font-bold">{`${days[date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration).getDay()]}`}, {`${date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration).getDate()}`} {`${month[date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration).getMonth()]}`} {`${date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration).getFullYear()}`}</div>
                <div className="font-semibold text-sm pt-0.5">ID: {productResp.prodId}</div>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-b-lg shadow-lg px-4 py-6 gap-1">
              <span className="text-xl font-bold">Description</span>
              <span className="text-md font-bold">
                <span className="mr-2">Product Name:</span>
                <span className="font-normal">{productResp.Product.name}</span>
              </span>
              <span className="text-md font-bold flex items-center">
                <span className="mr-2">Product ID:</span>
                <span className="font-medium text-xs">{productResp.prodId}</span>
              </span>
              <span className="text-md font-bold">
                <span className="mr-2">Retailer:</span>
                <span className="font-normal">{productResp.Retailer?.name || 'DreWMart'}</span>
              </span>
              <span className="text-md font-bold">
                <span className="mr-2">Date Issued:</span>
                <span className="font-normal">{`${days[new Date(productResp.soldAt as any).getDay()]}`}, {`${new Date(productResp.soldAt as any).getDate()}`} {`${month[new Date(productResp.soldAt as any).getMonth()]}`} {`${new Date(productResp.soldAt as any).getFullYear()}`}</span>
              </span>
              {
                (date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration) > new Date(productResp.soldAt as string) || date.isSameDay(date.addMonths(new Date(productResp.soldAt as string), productResp.Product.warrantyDuration), new Date())) ?
                  <div className="py-1 flex flex-row items-center justify-end text-green-600 font-semibold text-lg gap-1">
                    <BsHourglassSplit />
                    Valid
                  </div> :
                  <div className="py-1 flex flex-row items-center justify-end text-red-600 font-semibold text-lg gap-1">
                    <BsHourglassBottom />
                    Invalid
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WarrantyDetail;
