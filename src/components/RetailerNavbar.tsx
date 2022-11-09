import React from 'react';

import Image from 'next/image';
// import Link from 'next/link';
// import { FaWallet } from 'react-icons/fa';
import Link from 'next/link';
import { RiCopperCoinFill } from 'react-icons/ri';
// import { IoSearchSharp } from 'react-icons/io5';
// import { MdShoppingCart } from 'react-icons/md';

const RetailerNavbar = () => {
  const addr = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  return (
    <div className="relative bg-neutral-800 p-4 flex text-white items-center space-x-6 w-full text-lg">
      <Link href="/retailer/dashboard">
        <div className="hover:cursor-pointer">
          <Image src="/drewmart.svg" alt="Logo" width={200} height={50} />
        </div>
      </Link>
      <div className="justify-center text-center w-2/3 text-2xl pr-4 font-semibold">Retailer Dashboard</div>
      <div className="flex absolute space-x-10 p-4 right-0 items-center">
        <div className="font-semibold">Hi, {`${addr.slice(0, 5)}..${addr.slice(-5)}`}</div>
        <Link href="/retailer/redeem">
          <div className="flex gap-2 items-center hover:cursor-pointer">
            <RiCopperCoinFill />
            <span className="font-semibold">100</span>
          </div>
        </Link>
        <div className="">Logout</div>
      </div>
    </div>
  );
};

export default RetailerNavbar;
