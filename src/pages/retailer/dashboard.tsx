import React from 'react';

import { NextPage } from 'next';
import { FaBoxOpen, FaCartPlus } from 'react-icons/fa';
import { MdInventory } from 'react-icons/md';

import RetailerNavbar from '../../components/RetailerNavbar';

const RetailerDashboard: NextPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-300">
    <RetailerNavbar />
    <div className="flex w-full h-full">
      <div className="flex flex-col m-10 w-full">
        <div className="p-5 flex items-center space-x-7 w-full justify-between bg-white mb-5">
          <div className="w-2/5">
            <label htmlFor="prodName">Product Name: </label>
            <select
              id="prodName"
              className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:bg-white focus:outline-none focus:border-blue-600 focus:border-2 mt-2"
              aria-label="Default select example"
            >
              <option selected>Select Product</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="w-2/5">
            <label htmlFor="walletAddr">Wallet Address: </label>
            <input
              type="text"
              id="walletAddr"
              placeholder="Enter Wallet Address"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
            />
          </div>
          <button className="flex gap-2 w-1/5 bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md">
            <span className="text-xl">
              <FaCartPlus />
            </span>
            Sell Product
          </button>
        </div>
        <div className="flex flex-col p-5 bg-white">
          <div className="text-2xl font-semibold flex gap-2 items-center">
            <MdInventory />
            Inventory
          </div>
          <div className="overflow-x-auto -mx-3 mt-2">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-y max-h-96 min-h-96">
                <table className="min-w-full mb-2">
                  <thead className="border-b w-full sticky top-0 bg-indigo-200">
                    <tr>
                      <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                        Product Id
                      </th>
                      <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                        Product Name
                      </th>
                      <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">1</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Mark</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">erdf343546534ff</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">3</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Larry</td>
                      <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343dcvedve</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col p-5 bg-white mb-10 mx-10">
      <div className="text-2xl font-semibold flex gap-2 items-center">
        <FaBoxOpen />
        Sold Product(s)
      </div>
      <div className="overflow-x-auto -mx-3 mt-2">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-y max-h-96 min-h-96">
            <table className="min-w-full mb-3">
              <thead className="border-b w-full sticky top-0 bg-indigo-200">
                <tr>
                  <th scope="col" className="w-1/12 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                    S.No.
                  </th>
                  <th scope="col" className="w-1/12 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                    Product Id
                  </th>
                  <th scope="col" className="w-2/12 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                    Product Name
                  </th>
                  <th scope="col" className="w-3/12 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                    Sold To
                  </th>
                  <th scope="col" className="w-2/12 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                    Sold On
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">1</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Mark</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">erdf343546534ff</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">2</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Jacob</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343fdvefe</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">3</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">Larry</td>
                  <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">343dcvedve</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RetailerDashboard;
