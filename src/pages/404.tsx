import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsShop } from 'react-icons/bs';

const NotFound: NextPage = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center gap-10 bg-black">
    <Image src="/404.png" alt="404" width={450} height={400} />
    <div className="text-5xl font-bold text-orange-500">Oops! The page you are looking for does not exist</div>
    <Link href="/shop">
      <button className="text-white bg-blue-600 px-3 py-1.5 font-semibold text-lg rounded-md hover:bg-blue-700 flex items-center gap-2">
        <BsShop />
        Go to SHOP
      </button>
    </Link>
  </div>
);

export default NotFound;
