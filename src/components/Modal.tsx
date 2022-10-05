import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Modal: NextPage = () => (
  <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className="flex flex-col bg-white p-10 rounded-md w-2/5 text-center justify-center items-center">
      <Image src="/success.gif" alt="success" height={100} width={100} />
      <div className="font-semibold text-2xl mt-0">Payment Successful</div>
      <span className="text-base m-4 text-gray-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis autem quod optio doloribus iusto, officiis nemo.</span>
      <Link href="/orders">
        <button className="px-3 py-2.5 mt-3 text-white bg-blue-700 w-full rounded-md hover:shadow-lg hover:drop-shadow-lg font-medium select-none">My Orders</button>
      </Link>
    </div>
  </div>
);

export default Modal;
