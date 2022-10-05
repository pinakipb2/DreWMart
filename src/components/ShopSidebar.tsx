import React from 'react';

import { NextPage } from 'next';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ShopSidebar: NextPage = () => (
  <div className="w-1/3 ml-4 sticky top-4 h-full">
    <div className="bg-white w-full mb-4 p-4 rounded-md flex flex-col space-y-3 divide-y-2">
      <div className="text-xl font-semibold">Filters</div>
      <div className="text-md font-medium">
        Categories
        <div className="text-sm text-gray-500 pl-3 pt-1 font-medium">Electronics</div>
      </div>
      <label className="block mb-2 text-md font-medium">Price</label>
      <input type="range" value="30" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400" readOnly />
      <div className="border-dashed border-gray-400 m-3" />
      <div className="text-md font-medium">
        <div className="flex items-center justify-between">
          Brand
          <div>
            <IoIosArrowUp />
          </div>
        </div>
        <div className="flex flex-col space-y-2 pl-2">
          {Array.from(Array(7).keys()).map((arr) => (
            <div className="form-check" key={arr}>
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                disabled
              />
              <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                DreWMart:{arr}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="text-md font-medium flex items-center justify-between hover:cursor-pointer">
        Features
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="text-md font-medium flex items-center justify-between hover:cursor-pointer">
        Type
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="text-md font-medium flex items-center justify-between hover:cursor-pointer">
        Availability
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="text-md font-medium flex items-center justify-between hover:cursor-pointer">
        Discount
        <div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>
);

export default ShopSidebar;
