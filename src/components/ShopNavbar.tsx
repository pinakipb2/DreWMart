import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchSharp } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';

import { useAppSelector } from '../redux/hooks';

const ShopNavbar: NextPage = () => {
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  const itemsInCart = useAppSelector((state: any) => state.cart.cartItems.length);
  return (
    <div className="bg-neutral-800 p-3 flex text-white justify-evenly items-center space-x-6 w-full text-lg">
      <Link href="/shop">
        <div className="m-0 p-0 hover:cursor-pointer">
          <Image src="/drewmart.svg" alt="DreWMart" width={200} height={50} />
        </div>
      </Link>
      <div className="relative w-2/4 flex justify-end">
        <input className="w-full rounded-sm block text-base text-black p-2 focus-visible:outline-none pl-4" placeholder="Search for Products" />
        <span className="absolute leading-2 right-2 top-2 text-2xl text-black hover:cursor-pointer">
          <IoSearchSharp />
        </span>
      </div>
      <Link href="/profile">
        <div className="font-semibold hover:cursor-pointer">Hi, {`${addr.slice(0, 5)}..${addr.slice(-5)}`}</div>
      </Link>
      <Link href="/orders">
        <div className="hover:cursor-pointer">Orders</div>
      </Link>
      <div className="hover:cursor-pointer">Logout</div>
      <Link href="/cart">
        <div className="text-white text-3xl relative flex hover:cursor-pointer">
          <MdShoppingCart />
          {itemsInCart > 0 && <span className="bg-red-700 text-white w-5 h-5 rounded-full absolute -top-2 left-4 text-center leading-2 text-sm font-semibold">{itemsInCart}</span>}
          <span className="text-lg ml-2.5">Cart</span>
        </div>
      </Link>
    </div>
  );
};

export default ShopNavbar;
