import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => (
  <div className="w-full bg-neutral-900 h-screen overflow-hidden pl-36">
    <nav className="flex items-center justify-between flex-wrap pt-10 pr-28 pb-0">
      <Link href="/">
        <div className="m-0 p-0 hover:cursor-pointer">
          <Image src="/drewmart.svg" alt="DreWMart" width={200} height={50} />
        </div>
      </Link>
      <div className="w-full flex-grow flex lg:w-auto items-center justify-center ml-12">
        <div className="text-sm lg:flex-grow">
          <Link href="/about">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-10 hover:cursor-pointer font-semibold">About Us</span>
          </Link>
        </div>
        <div>
          <Link href="/login">
            <button className="inline-block text-base px-6 py-3 leading-none rounded-md text-white bg-green-600 mt-4 lg:mt-0 hover:bg-green-700 font-medium">LogIn</button>
          </Link>
        </div>
      </div>
    </nav>
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col justify-center space-y-8">
        <div className="w-full text-lg font-medium">
          <span className="text-blue-400">Premium</span> <span className="text-orange-600">Warranty System for E-Commerce</span>
        </div>
        <div className="flex flex-col text-white font-semibold text-7xl w-full">
          <div>Warranty</div> <div>made</div> <div>effortless.</div>
        </div>
        <div className="flex flex-col text-gray-400 font-normal w-full">Decentralized retailer and e-commerce warranty management system using soulbound NFTs.</div>
        <Link href="/shop">
          <button className="text-white rounded-2xl bg-green-600 pl-4 pr-4 pt-2 pb-2 text-lg font-medium w-1/4 hover:bg-green-700">Shop Now</button>
        </Link>
      </div>
      <div className="w-1/2 pt-10 ml-20">
        <Image src="/hero-img.png" className="object-contain" width="510" height="580" alt="mobile" />
      </div>
    </div>
  </div>
);

export default Home;
