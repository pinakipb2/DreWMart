import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import toast from 'react-hot-toast';
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import { BsCheckCircleFill, BsCircle, BsLightningFill, BsRecordCircle, BsShieldCheck } from 'react-icons/bs';
import { FaHandHoldingUsd, FaTag } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { RiTruckFill } from 'react-icons/ri';
import { TbReplace } from 'react-icons/tb';
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/cart/cartSlice';
import { ProductDetailType, ProductResp } from '../types';
import { numberWithCommas } from '../utils';

const ProductDetail: NextPage<ProductDetailType> = ({ productResp, allProducts }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(productResp));
    toast.success('Item Added to Cart');
  };
  const buyNow = () => {
    dispatch(addToCart(productResp));
    // Redirect to cart
    Router.push('/cart');
  };
  return (
    <div className="bg-gray-300 flex flex-col w-full">
      <div className="bg-white mx-6 my-4 flex h-full">
        <div className="space-y-0.5 m-6 sticky top-4 h-full">
          {Array.from(Array(5).keys()).map((arr) => (
            <div key={arr} className={`border-2 w-fit py-1 px-4 hover:cursor-pointer ${arr === 0 ? 'border-blue-600' : 'hover:border-blue-600'}`}>
              <Image src={(productResp as ProductResp).image} alt={(productResp as ProductResp).name} width={30} height={60} />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3 sticky top-4 h-full">
          <div className="mx-4 mt-4 mb-2 border w-full py-4 px-24 items-center justify-center flex">
            <Image src={(productResp as ProductResp).image} alt={(productResp as ProductResp).name} width={220} height={500} />
          </div>
          <div className="mx-4 mb-4 flex w-full justify-between space-x-2 text-white font-semibold">
            <button
              className="bg-amber-500 px-6 py-3 w-1/2 rounded-sm hover:shadow-lg flex justify-center items-center gap-2"
              onClick={() => {
                addItemToCart();
              }}
            >
              <MdShoppingCart />
              ADD TO CART
            </button>
            <button
              className="bg-orange-600 px-6 py-3 w-1/2 rounded-sm hover:shadow-lg flex justify-center items-center gap-2"
              onClick={() => {
                buyNow();
              }}
            >
              <BsLightningFill />
              BUY NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/3 mx-8 mt-8 gap-2.5 pb-6">
          <div className="text-2xl font-semibold">{(productResp as ProductResp).name}</div>
          <div className="flex space-x-4">
            <button className="bg-green-700 hover:cursor-text cursor-text px-2 rounded-md text-white font-medium text-sm flex justify-center items-center gap-0.5 py-0.5">
              {(productResp as ProductResp).rating}
              <AiFillStar />
            </button>
            <div className="text-gray-500 font-semibold">84,408 Ratings & 8,374 Reviews</div>
          </div>
          <div className="text-green-700 text-sm font-semibold">Extra ₹{(productResp as ProductResp).price * 0.4} off</div>
          <div className="flex items-center font-semibold text-3xl">
            <BiRupee />
            {numberWithCommas((productResp as ProductResp).price)}
            <s className="text-gray-500 font-semibold text-base ml-4">{numberWithCommas((productResp as ProductResp).price + (productResp as ProductResp).price * 0.4)}</s>
            <span className="font-medium text-sm ml-2 text-green-700">40% off</span>
            <span className="text-lg ml-2 text-gray-500 hover:cursor-pointer">
              <IoMdInformationCircleOutline />
            </span>
          </div>
          <div className="text-sm">+ ₹29 Secured Packaging Fee</div>
          <div className="text-lg font-bold">Available offers</div>
          <div className="flex w-full text-sm items-center space-x-2">
            <span className="text-green-500 mr-1">
              <FaTag />
            </span>
            <span className="font-semibold">Bank Offer</span>
            <span className="font-normal">10% instant discount on Federal Bank Credit and Debit Card,up to ₹1000 on orders of ₹5,000 and above</span>
            <span className="text-blue-600 font-semibold hover:cursor-pointer">T&C</span>
          </div>
          <div className="flex w-full text-sm items-center space-x-2">
            <span className="text-green-500 mr-1">
              <FaTag />
            </span>
            <span className="font-semibold">Bank Offer</span>
            <span className="font-normal">10% instant discount on IDFC FIRST Bank Credit Card, up to ₹1,000 on orders of ₹5,000 and above</span>
            <span className="text-blue-600 font-semibold hover:cursor-pointer">T&C</span>
          </div>
          <div className="flex w-full text-sm items-center space-x-2">
            <span className="text-green-500 mr-1">
              <FaTag />
            </span>
            <span className="font-semibold">Bank Offer</span>
            <span className="font-normal">5% Cashback on Flipkart Axis Bank Card</span>
            <span className="text-blue-600 font-semibold hover:cursor-pointer">T&C</span>
          </div>
          <div className="flex w-full text-sm items-center space-x-2">
            <span className="text-green-500 mr-1">
              <FaTag />
            </span>
            <span className="font-semibold">Special Price</span>
            <span className="font-normal">Get extra ₹4500 off (price inclusive of cashback/coupon)</span>
            <span className="text-blue-600 font-semibold hover:cursor-pointer">T&C</span>
          </div>
          <div className="text-blue-600 font-semibold text-sm hover:cursor-pointer w-fit">View 5 more offers</div>
          <div className="flex flex-col w-1/2 mt-2">
            <div className="flex items-center border-x-2 border-t-2 p-4 border-gray-300 bg-blue-100">
              <span className="mr-4 text-blue-600 hover:cursor-pointer">
                <BsRecordCircle />
              </span>
              <div className="flex justify-between w-full">
                <span>Buy without Exchange</span>
                <span className="font-semibold">₹{numberWithCommas((productResp as ProductResp).price)}</span>
              </div>
            </div>
            <div className="flex items-center border-2 p-4 border-gray-300 hover:cursor-pointer">
              <span className="mr-4 text-gray-400">
                <BsCircle />
              </span>
              <div className="flex justify-between w-full">
                <span>Buy with Exchange</span>
                <span className="font-semibold">up to ₹9,900 off</span>
              </div>
            </div>
          </div>
          <div className="flex text-sm text-blue-600 font-medium gap-4 w-1/2 text-center my-4">
            <div className="flex flex-col justify-center items-center space-y-2">
              <span className="text-green-600 text-3xl">
                <FaHandHoldingUsd />
              </span>
              <div>Pay on Delivery</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <span className="text-amber-600 text-3xl">
                <TbReplace />
              </span>
              <div>7 Days Replacement</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <span className="text-lime-600 text-3xl">
                <RiTruckFill />
              </span>
              <div>DreWMart Delivered</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <span className="text-red-600 text-3xl">
                <BsShieldCheck />
              </span>
              <div>Warranty</div>
            </div>
          </div>
          <div className="text-gray-500 font-semibold w-1/3 flex justify-between">
            <span>Color</span>
            <span className="text-black">{(productResp as ProductResp).color}</span>
          </div>
          <div className="text-gray-500 font-semibold w-1/3 flex justify-between">
            <span>Warranty Duration</span>
            <span className="ml-10 text-black">{(productResp as ProductResp).warrantyDuration} Months</span>
          </div>
          <div className="text-gray-500 font-semibold w-1/3 flex justify-between">
            <span>Delivery</span>
            <span className="ml-10 text-black flex items-center underline underline-offset-4 decoration-blue-500">
              <span className="text-blue-500 mr-3">
                <IoLocationSharp />
              </span>
              713101
            </span>
          </div>
          <div className="text-gray-500 font-semibold w-full flex">
            <span>Highlights</span>
            <div className="ml-36 text-gray-600">
              {(productResp as ProductResp).highlights.map((highlight, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>{highlight.desc}</li>
              ))}
            </div>
          </div>
          <div className="text-gray-500 font-semibold w-full flex justify-between">
            <span>Description</span>
            <div className="ml-36 text-justify text-gray-600">{(productResp as ProductResp).description}</div>
          </div>
          <div className="text-gray-500 font-semibold w-1/3 flex justify-between mb-6">
            <span>Seller</span>
            <span className="ml-10 text-black flex space-x-1.5">
              <span>DreWMart</span>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:cursor-text cursor-text px-2 rounded-md text-white font-medium text-sm flex justify-center items-center gap-0.5 py-0.5">
                  5
                  <AiFillStar />
                </button>
              </div>
            </span>
          </div>
          <div className="text-xl font-semibold">Ratings & Reviews</div>
          <div className="flex space-x-4">
            <button className="bg-green-700 hover:cursor-text cursor-text px-2 rounded-md text-white font-medium text-sm flex justify-center items-center gap-0.5 py-0.5">
              {(productResp as ProductResp).rating}
              <AiFillStar />
            </button>
            <div className="text-gray-500 font-semibold">84,408 Ratings & 8,374 Reviews</div>
          </div>
          <div className="divide-y space-y-4 divide-solid">
            {Array.from(Array(8).keys()).map((arr) => (
              <div className="space-y-2 pt-4" key={arr}>
                <div className="flex space-x-4">
                  <button className="bg-green-700 hover:cursor-text cursor-text px-1.5 rounded-md text-white font-medium text-xs flex justify-center items-center gap-0.5">
                    {(productResp as ProductResp).rating}
                    <AiFillStar />
                  </button>
                  <div className="text-gray-700 font-medium">Value-for-money</div>
                </div>
                <div className="text-sm font-normal">Nice battery backup, good camera and also a good display. For daily use phone is smooth and perfect.</div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>Pinaki Bhattacharjee</span>
                  <span>
                    <BsCheckCircleFill />
                  </span>
                  <span>Certified Buyer, Gaya Jul, 2021</span>
                </div>
              </div>
            ))}
            <div className="text-blue-600 pt-4 font-semibold text-base hover:cursor-pointer pl-2">All 8374 reviews</div>
          </div>
        </div>
      </div>
      <div className="bg-white mx-4 mb-4 flex flex-col">
        <div className="my-4 mx-10 text-2xl font-semibold">You might be interested in</div>
        <div className="my-4 flex w-full gap-5 justify-evenly">
          {(allProducts as ProductResp[]).slice(-4).map((product) => (
            <div key={product.id} className="shadow-lg rounded-md w-fit py-2 px-10 hover:cursor-pointer flex">
              <Image src={product.image} alt={product.name} width={100} height={200} />
              <div className="flex flex-col mx-3 mt-6 text-lg space-y-1">
                <div className="font-bold">Phone</div>
                <div className="text-gray-500">Min 30% Off</div>
                <Link href={`/product/${product.id}`}>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-0.5 font-semibold">Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white mx-4 mb-4 flex flex-col">
        <div className="my-4 mx-10 text-2xl font-semibold">Similar products</div>
        <div className="my-4 flex w-full gap-5 justify-evenly">
          {(allProducts as ProductResp[]).slice(0, 4).map((product) => (
            <div key={product.id} className="shadow-lg rounded-md w-fit py-2 px-10 hover:cursor-pointer flex">
              <Image src={product.image} alt={product.name} width={100} height={200} />
              <div className="flex flex-col mx-3 mt-6 text-lg space-y-1">
                <div className="font-bold">Phone</div>
                <div className="text-gray-500">Min 30% Off</div>
                <Link href={`/product/${product.id}`}>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-0.5 font-semibold">Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white mx-4 mb-8 flex flex-col divide-y divide-gray-300">
        <div className="my-4 mx-10 text-2xl font-semibold">Recently viewed</div>
        <div className="px-6 py-4 flex w-full justify-evenly max-w-full">
          {(allProducts as ProductResp[]).map((product) => (
            <div key={product.id} className="w-fit py-2 px-10 hover:cursor-pointer flex flex-col">
              <Image src={product.image} alt={product.name} width={80} height={280} className="w-full" />
              <Link href={`/product/${product.id}`}>
                <div className="flex flex-col mx-3 mt-6 text-lg">
                  <div className="text-gray-600 text-sm hover:text-blue-600">{product.name}</div>
                  <div className="font-bold flex items-center">
                    <BiRupee /> {numberWithCommas(product.price)}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
