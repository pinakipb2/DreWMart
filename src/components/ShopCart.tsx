import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { BiRupee } from 'react-icons/bi';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { TbShoppingCartX } from 'react-icons/tb';
import { useDispatch } from 'react-redux';

import { buyProducts } from '../api';
import { clearCart, removeFromCart, updateItemAmount, calculateTotal } from '../redux/cart/cartSlice';
import { useAppSelector } from '../redux/hooks';
import { Prod } from '../types';
import { numberWithCommas } from '../utils';
import Modal from './Modal';

const ShopCart: NextPage = () => {
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state: any) => state.cart.cartItems) as Prod[];
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  const totalItemsCount = useAppSelector((state: any) => state.cart.amount);
  const totalPrice = useAppSelector((state: any) => state.cart.total);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const removeItemsFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
    toast.success('Item Removed from Cart');
  };
  const updateAmt = (productId: string, e: any) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateItemAmount({ id: productId, amount: quantity }));
    toast.success('Amount Updated');
  };
  const emptyCart = () => {
    dispatch(clearCart());
    toast.success('Cart Cleared');
  };
  const placeOrder = async () => {
    try {
      await buyProducts(addr, cartItems as Prod[]);
      setOpenModal(true);
      dispatch(clearCart());
    } catch (err) {
      toast.error('Something Went Wrong');
    }
  };
  return (
    <>
      <div className="bg-gray-300 flex w-full">
        <div className="ml-20 my-6 flex flex-col h-full w-3/4">
          <div className="bg-white p-4 pt-5 shadow-md">
            <div className="text-3xl font-semibold mb-4 flex justify-between">
              Shopping Cart
              {cartItems.length > 0 && (
                <button
                  className="px-2.5 py-0.5 rounded-md text-sm text-white font-medium bg-red-600 flex items-center gap-1.5 hover:shadow-lg"
                  onClick={() => {
                    emptyCart();
                  }}
                >
                  <span className="text-xl">
                    <FiTrash2 />
                  </span>
                  Empty Cart
                </button>
              )}
            </div>
            <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
            {cartItems.length === 0 && (
              <div className="my-6 py-28 flex mx-4 gap-6 items-center justify-center text-4xl text-blue-700">
                <TbShoppingCartX />
                Cart is Empty !!
              </div>
            )}
            {cartItems.map((item: Prod) => (
              <div className="my-6 flex mx-4 gap-10" key={item.id}>
                <div>
                  <Image src={item.image} alt={item.name} width={100} height={200} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold">{item.name}</div>
                  <span className="text-sm font-medium text-green-700">In stock</span>
                  <span className="text-sm font-medium text-gray-400">Eligible for FREE Shipping</span>
                  <div className="flex items-center font-semibold text-xl">
                    <BiRupee />
                    {numberWithCommas(item.price)}
                    <s className="text-gray-500 font-semibold text-base ml-4">{numberWithCommas(item.price + item.price * 0.4)}</s>
                    <span className="font-medium text-sm ml-2 text-green-700">40% off</span>
                    <span className="text-lg ml-2 text-gray-500 hover:cursor-pointer">
                      <IoMdInformationCircleOutline />
                    </span>
                  </div>
                  <div className="text-sm">+ ₹29 Secured Packaging Fee</div>
                  <div className="text-sm">
                    <span className="font-semibold">Color: </span> {item.color}
                  </div>
                  <div className="flex gap-6">
                    <span>
                      <select
                        className="bg-gray-300 rounded-md text-sm shadow-md py-1.5 px-1 focus-visible:outline-none font-semibold"
                        onChange={(e) => {
                          updateAmt(item.id, e);
                        }}
                      >
                        {/* <option defaultValue={1} value={1}>
                          Qty: 1
                        </option> */}
                        {Array.from(Array(6).keys()).map((val) => (
                          <option key={val} value={val + 1} selected={item.amount === val + 1}>
                            Qty: {val + 1}
                          </option>
                        ))}
                      </select>
                    </span>
                    <button className="px-2 py-1 rounded-md text-sm text-white font-medium bg-blue-600 flex items-center gap-1.5 hover:shadow-md">
                      <span className="text-lg">
                        <FaRegHeart />
                      </span>
                      Add to Wishlist
                    </button>
                    <button
                      className="px-2 py-1 rounded-md text-sm text-white font-medium bg-red-600 flex items-center gap-1.5 hover:shadow-md"
                      onClick={() => {
                        removeItemsFromCart(item.id);
                      }}
                    >
                      <span className="text-xl">
                        <MdDelete />
                      </span>
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 pt-5 flex justify-end shadow-md shadow-gray-400 border-t-2 sticky h-full bottom-0 drop-shadow-md">
            <button
              className="bg-orange-600 px-6 py-3 w-1/4 rounded-sm hover:shadow-lg flex justify-center items-center text-white font-semibold disabled:cursor-not-allowed disabled:bg-orange-400"
              disabled={cartItems.length === 0}
              onClick={() => {
                placeOrder();
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        <div className="mr-20 mx-4 my-6 flex flex-col h-full w-1/4 top-4 sticky">
          <div className="bg-white p-4 pt-5 gap-3 flex flex-col shadow-lg">
            <div className="text-xl font-semibold text-gray-500">Price Details</div>
            <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
            {cartItems.length === 0 ? (
              <div className="flex items-center justify-center gap-4 text-xl">
                <TbShoppingCartX />
                Cart is Empty !!
              </div>
            ) : (
              <>
                <div className="flex justify-between">
                  {totalItemsCount === 1 ? <span>Price ({totalItemsCount} item)</span> : <span>Price ({totalItemsCount} items)</span>}
                  <span>₹{numberWithCommas(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">− ₹4,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Secured Packaging Fee</span>
                  <span>₹29</span>
                </div>
                <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
                <div className="flex justify-between text-xl font-semibold">
                  <span>Total Amount</span>
                  <span>₹{numberWithCommas(totalPrice)}</span>
                </div>
                <div className="bg-gray-300 w-full px-5 justify-center h-[1px]" />
                <div className="flex text-lg font-semibold">
                  <span className="text-green-600 text-center w-full">You will save ₹4,471 on this order</span>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between items-center w-full mt-4 text-gray-600 text-sm font-semibold gap-1 p-4 mb-20">
            <span className="text-3xl pl-1">
              <BsShieldFillCheck />
            </span>
            <span className="text-center">Safe and Secure Payments.Easy returns.100% Authentic products.</span>
          </div>
        </div>
      </div>
      {openModal && <Modal />}
    </>
  );
};

export default ShopCart;
