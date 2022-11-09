import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import { RiCopperCoinFill } from 'react-icons/ri';

import RetailerNavbar from '../../components/RetailerNavbar';

const ProfileCard = ({ itemName, price }: { itemName: string; price: number; }) => (
  <div className="w-1/6 p-3">
    <div className="bg-gray-100 p-4 rounded-lg space-y-1">
      <div className="items-center flex justify-center object-center mb-4">
        <Image className="bg-orange rounded w-full object-cover" src="/favicon.png" height={100} width={100} alt="content" />
      </div>
      <h3 className="text-indigo-500 text-xl font-medium title-font text-center">{itemName}</h3>
      <div className="text-lg flex items-center justify-center gap-2 text-black font-medium title-font text-center">
        <RiCopperCoinFill /> {price}
      </div>
      <button className="w-full bg-blue-700 text-white py-1.5 pb-2 font-semibold rounded-md hover:bg-blue-600">Redeem</button>
    </div>
  </div>
);

const Redeem: NextPage = () => {
  const members = [
    {
      id: 1,
      itemName: 'DrewItem1',
      price: 10
    },
    {
      id: 2,
      itemName: 'DrewItem2',
      price: 90
    },
    {
      id: 3,
      itemName: 'DrewItem3',
      price: 200
    },
    {
      id: 4,
      itemName: 'DrewItem4',
      price: 600
    },
    {
      id: 5,
      itemName: 'DrewItem5',
      price: 900
    },
    {
      id: 6,
      itemName: 'DrewItem6',
      price: 1200
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <RetailerNavbar />
      <div className="text-center py-5 font-bold text-3xl">Redeem Store</div>
      <div className="container px-4 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {members.map(({ id, ...otherProps }) => (
            <ProfileCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Redeem;
