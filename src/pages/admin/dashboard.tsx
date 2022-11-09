import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import { FaUserPlus } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import { fetchAllAdmins } from '../../api';
import AdminNavbar from '../../components/AdminNavbar';

const Dashboard: NextPage = () => {
  const [allAdmins, setAllAdmins] = useState([]);
  useEffect(() => {
    const fetchDashData = async () => {
      try {
        const { data } = await fetchAllAdmins();
        console.log(data);
        setAllAdmins(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDashData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <AdminNavbar />
      <div className="flex w-full h-full gap-5">
        <div className="flex flex-col my-10 ml-5 w-full">
          <div className="p-5 flex items-center space-x-1 w-full justify-between bg-white mb-5">
            <div className="w-2/6">
              <label htmlFor="name">Admin Name: </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Admin Name"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
              />
            </div>
            <div className="w-2/6">
              <label htmlFor="walletAddr">Wallet Address: </label>
              <input
                type="text"
                id="walletAddr"
                placeholder="Enter Wallet Address"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
              />
            </div>
            <button className="flex gap-2 w-auto bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md">
              <span className="text-xl">
                <FaUserPlus />
              </span>
              Add Admin
            </button>
          </div>
          <div className="flex flex-col p-5 bg-white ">
            <div className="text-2xl font-semibold flex gap-2 items-center">
              <ImUsers />
              Admins
            </div>
            <div className="overflow-x-auto -mx-3 mt-2">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-y max-h-[275px] min-h-[275px]">
                  <table className="min-w-full">
                    <thead className="border-b w-full sticky top-0 bg-indigo-200">
                      <tr>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          S.No.
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Name
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Wallet Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allAdmins.map((admin: any, idx: number) => (
                          <tr className="border-b" key={admin.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{idx + 1}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{admin.name}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{`${admin.walletAddress.slice(0, 9)}..${admin.walletAddress.slice(-9)}`}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10 mr-5 w-full">
          <div className="p-5 flex items-center space-x-7 w-full justify-between bg-white mb-5">
            <div className="w-2/6">
              <label htmlFor="name">Retailer Name: </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Retailer Name"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
              />
            </div>
            <div className="w-2/6">
              <label htmlFor="walletAddr">Wallet Address: </label>
              <input
                type="text"
                id="walletAddr"
                placeholder="Enter Wallet Address"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
              />
            </div>
            <button className="flex gap-2 w-auto bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md">
              <span className="text-xl">
                <FaUserPlus />
              </span>
              Add Retailer
            </button>
          </div>
          <div className="flex flex-col p-5 bg-white ">
            <div className="text-2xl font-semibold flex gap-2 items-center">
              <ImUsers />
              Retailers
            </div>
            <div className="overflow-x-auto -mx-3 mt-2">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-y max-h-[275px] min-h-[275px]">
                  <table className="min-w-full">
                    <thead className="border-b w-full sticky top-0 bg-indigo-200">
                      <tr>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          S.No.
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Name
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Wallet Address
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
