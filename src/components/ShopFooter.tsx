import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

const ShopFooter: NextPage = () => (
  <footer className="p-3 bg-neutral-800 flex justify-between text-white px-14">
    <Image src="/drewmart.svg" className="hover:cursor-pointer" alt="DreWMart" width={200} height={50} />
    <div className="flex justify-center items-center space-x-10">
      <div className="hover:cursor-pointer">About</div>
      <div className="hover:cursor-pointer">Privacy Policy</div>
      <div className="hover:cursor-pointer">Careers</div>
      <div className="hover:cursor-pointer">Contact</div>
    </div>
  </footer>
);

export default ShopFooter;
