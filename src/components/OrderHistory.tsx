import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import toast from 'react-hot-toast';
import { BiRupee } from 'react-icons/bi';
import { BsArrowRepeat, BsCartXFill, BsFillCreditCard2FrontFill, BsPencilFill } from 'react-icons/bs';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { GiFireBomb } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { RiSettings5Line, RiShoppingBag3Line } from 'react-icons/ri';

import { claimWarranty, getProductHistory } from '../api';
import { useAppSelector } from '../redux/hooks';
import { Store } from '../types';
import { month, numberWithCommas } from '../utils';

const OrderHistory: NextPage = () => {
  const walletAddress = useAppSelector((state: any) => state.user.walletAddress);
  const [productsHistory, setproductsHistory] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      setLoading(true);
      const { data } = await getProductHistory(walletAddress);
      setproductsHistory(data as Store[]);
      setLoading(false);
    };
    fetchOrderHistory();
  }, []);

  const claim = async (id: string) => {
    try {
      await claimWarranty(id, walletAddress);
      toast.success('Warranty Claimed');
      const { data } = await getProductHistory(walletAddress);
      setproductsHistory(data as Store[]);
    } catch (err) {
      toast.error('Something Went Wrong');
    }
  };

  const viewWarranty = async (id: string) => {
    // revalidate the warrantyId
    await fetch(`/api/revalidate?warrantyId=${id}`);
    Router.push(`/warranty/${id}`);
  };

  const burnAllExpired = () => {
    toast.success('All Expired NFTs Burned');
  };

  return (
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
          <div className="flex font-semibold items-center gap-3 px-3 hover:cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 hover:rounded-md rounded-md bg-blue-200 text-blue-600">
            <span className="text-xl">
              <RiShoppingBag3Line />
            </span>
            <span>My Orders</span>
          </div>
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
              <RiShoppingBag3Line />
            </span>
            <div className="text-4xl font-semibold text-blue-700">My Orders</div>
          </div>
          <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
          {
            !loading && productsHistory.length !== 0 &&
            (
              <div className="w-full items-center flex justify-center mt-8">
                <button
                  className="bg-red-600 px-5 py-2 text-white rounded-md hover:shadow-md font-semibold"
                  onClick={() => {
                    burnAllExpired();
                  }}
                >
                  <span className="flex items-center gap-1">
                    <span className="text-xl">
                      <GiFireBomb />
                    </span>
                    Burn All Expired NFTs
                  </span>
                </button>
              </div>
            )
          }
          <div className="p-4 pt-5 mb-10">
            {loading && <div className="pt-16 pb-40 flex gap-5 items-center text-center text-5xl justify-center text-red-500 font-semibold">Loading Order History...</div>}
            {!loading && productsHistory.length === 0 && (
              <div className="pt-20 pb-32 flex gap-5 items-center text-center text-5xl justify-center text-red-500 font-semibold">
                <BsCartXFill />
                No Items Bought Yet!
              </div>
            )}
            {!loading &&
              productsHistory.map((product) => (
                <div className="flex flex-col my-4" key={product.id}>
                  <div className="flex flex-col mx-4 gap-0.5 border-x border-t border-gray-400 px-1 py-3 bg-gray-100 rounded-t-lg text-gray-600 text-xs justify-between font-medium">
                    <span className="flex justify-center text-center">
                      <span className="w-1/5">ORDER PLACED: </span>
                      <span className="w-2/5">SHIPPED TO: </span>
                      <span className="w-2/5">ORDER ID: </span>
                    </span>
                    <span className="flex justify-center text-center">
                      <span className="w-1/5">
                        {`${new Date(product.soldAt as any).getDate()}`} {`${month[new Date(product.soldAt as any).getMonth()]}`} {`${new Date(product.soldAt as any).getFullYear()}`}
                      </span>
                      <span className="w-2/5">{product.soldTo}</span>
                      <span className="w-2/5">#{product.prodId}</span>
                    </span>
                  </div>
                  <div className="flex mx-4 gap-10 border border-gray-400 px-4 py-3 rounded-b-lg">
                    <div>
                      <Image src={product.Product.image} alt={product.Product.name} width={85} height={170} />
                    </div>
                    <div className="flex flex-col gap-0">
                      <div className="text-xl font-semibold text-sky-700">{product.Product.name}</div>
                      <span className="text-lg font-bold text-black">
                        Delivered {`${new Date(product.soldAt as any).getDate()}`}-{`${month[new Date(product.soldAt as any).getMonth()]}`}-{`${new Date(product.soldAt as any).getFullYear()}`} on{' '}
                        {`${new Date(product.soldAt as string).toLocaleTimeString('en-US')}`}
                      </span>
                      <div className="flex items-center font-semibold text-lg">
                        Total : <BiRupee />
                        {numberWithCommas(product.Product.price)}
                      </div>
                      <div className="flex items-center font-medium text-sm">Sold By : {product.Retailer?.walletAddress || 'DreWMart'}</div>
                      <div className="text-sm pb-2">
                        Return window closed on {`${new Date(product.soldAt as any).getDate()}`}-{`${month[new Date(product.soldAt as any).getMonth()]}`}-
                        {`${new Date(product.soldAt as any).getFullYear()}`}
                      </div>
                      <div className="flex gap-4">
                        {product.isWarrantyClaimed ? (
                          <button
                            className="px-2 py-1.5 rounded-md text-sm text-white font-medium bg-lime-600 flex items-center gap-1.5 hover:shadow-md"
                            onClick={() => {
                              viewWarranty(product.id);
                            }}
                          >
                            <span className="text-lg">
                              <BsFillCreditCard2FrontFill />
                            </span>
                            View Warranty
                          </button>
                        ) : (
                          <button
                            className="px-2 py-1.5 rounded-md text-sm text-white font-medium bg-red-500 flex items-center gap-1.5 hover:shadow-md"
                            onClick={() => {
                              claim(product.id);
                            }}
                          >
                            <span className="text-lg">
                              <BsFillCreditCard2FrontFill />
                            </span>
                            Claim Warranty
                          </button>
                        )}
                        <Link href={`/product/${product.Product.id}`}>
                          <button className="px-2 py-1.5 rounded-md text-sm text-white font-medium bg-orange-500 flex items-center gap-1.5 hover:shadow-md">
                            <span className="text-lg">
                              <BsArrowRepeat />
                            </span>
                            Buy it Again
                          </button>
                        </Link>
                        <button className="px-2 py-1.5 rounded-md text-sm text-white font-medium bg-sky-500 flex items-center gap-1.5 hover:shadow-md">
                          <span className="text-sm">
                            <BsPencilFill />
                          </span>
                          Write a Product Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
