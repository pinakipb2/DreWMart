import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import { logout } from '../redux/admin/adminSlice';
import { useAppSelector } from '../redux/hooks';
// import Link from 'next/link';
// import { IoSearchSharp } from 'react-icons/io5';
// import { MdShoppingCart } from 'react-icons/md';

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    Router.push('/admin/login');
  };
  const walletAddress = useAppSelector((state: any) => state.admin.walletAddress);
  return (
    <div className="relative bg-neutral-800 p-4 flex text-white items-center space-x-6 w-full text-lg">
      <Link href="/admin/dashboard">
        <div className="hover:cursor-pointer">
          <Image src="/drewmart.svg" alt="Logo" width={200} height={50} />
        </div>
      </Link>
      <div className="justify-center text-center w-2/3 text-2xl pr-4 font-semibold">Admin Dashboard</div>
      <div className="flex absolute space-x-10 p-4 right-0">
        <div className="font-semibold">Hi, {`${walletAddress.slice(0, 7)}..${walletAddress.slice(-7)}`}</div>
        <div
          role="button"
          onClick={() => {
            logOut();
          }}>Logout
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
