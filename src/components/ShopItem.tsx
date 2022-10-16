import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';

import { ShopProps, ProductResp } from '../types';
import { days, month, numberWithCommas } from '../utils';

const ShopItem: NextPage<ShopProps> = ({ productResp }) => (
  <div className="w-full pr-4">
    {(productResp as ProductResp[]).length > 0 &&
      (productResp as ProductResp[]).map((prod) => (
        <div key={prod.id} className="bg-white w-full mb-4 py-8 rounded-md flex p-8 pl-16">
          <Link href={`/product/${prod.id}`}>
            <div className="hover:cursor-pointer">
              <Image src={prod.image} alt={prod.name} width={120} height={250} className="rounded-2xl" />
            </div>
          </Link>
          <div className="ml-16 space-y-2">
            <Link href={`/product/${prod.id}`}>
              <div className="font-semibold text-2xl hover:cursor-pointer hover:text-blue-600">{prod.name}</div>
            </Link>
            <div className="flex space-x-4">
              <button className="bg-green-700 hover:cursor-text cursor-text px-2 rounded-md text-white font-medium text-sm flex justify-center items-center gap-0.5 py-0.5">
                {prod.rating}
                <AiFillStar />
              </button>
              <div className="text-gray-500 font-semibold">84,408 Ratings & 8,374 Reviews</div>
            </div>
            <button className="bg-red-700 hover:cursor-text cursor-text text-white px-2 py-1 text-xs font-medium">Limited time deal</button>
            <div className="flex items-center font-semibold text-3xl">
              <BiRupee />
              {numberWithCommas(prod.price)}
              <s className="text-gray-500 font-semibold text-base ml-4">{numberWithCommas(prod.price + prod.price * 0.4)}</s>
              <span className="font-medium text-sm ml-2 text-green-700">40% off</span>
            </div>
            <div className="text-sm">
              Get it by{' '}
              <span className="font-bold">
                {days[new Date().getDay()]}, {month[new Date().getMonth()]} {new Date().getDate()}
              </span>
            </div>
            <div>FREE Delivery by DreWMart</div>
          </div>
        </div>
      ))}
    <div className="bg-white w-full mb-4 py-4 flex pl-10 text-lg font-semibold items-center">
      Did you find what you were looking for?
      <div className="space-x-4 ml-7">
        <button className="border-gray-400 border py-0.5 px-7">Yes</button>
        <button className="border-gray-400 border py-0.5 px-7">No</button>
      </div>
    </div>
  </div>
);

export default ShopItem;
