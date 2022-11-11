import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import { toast } from 'react-hot-toast';
import { FaUserPlus } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import { addAdmin, addRetailer, fetchAllAdmins, fetchAllRetailers } from '../../api';
import getDTKContract from '../../auth/getDTKContract';
import AdminNavbar from '../../components/AdminNavbar';

const Dashboard: NextPage = () => {
  const [allAdmins, setAllAdmins] = useState([]);
  const [allRetailers, setAllRetailers] = useState([]);
  const [contractInstance, setContractInstance] = useState<any>(null);
  const [adminForm, setAdminForm] = useState({
    name: '',
    walletAddress: ''
  });
  const [retailerForm, setRetailerForm] = useState({
    name: '',
    walletAddress: ''
  });
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    const fetchDashData = async () => {
      try {
        const { data } = await fetchAllAdmins();
        console.log(data);
        setAllAdmins(data);
        const { data: retailers } = await fetchAllRetailers();
        console.log(retailers);
        setAllRetailers(retailers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDashData();
    const fetchContract = async () => {
      try {
        const contract = await getDTKContract();
        console.log(contract);
        setContractInstance(contract);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContract();
  }, [rerender]);

  const addAdminButton = async () => {
    if (adminForm.name !== '' && adminForm.walletAddress !== '') {
      console.log(adminForm);
      try {
        const transaction = await contractInstance.addAdmin(adminForm.name, adminForm.walletAddress.toLowerCase());
        console.log(transaction);
        const { data } = await addAdmin(adminForm);
        console.log(data);
        setAdminForm({
          name: '',
          walletAddress: ''
        });
        setRerender((value) => !value);
        toast.success('Admin added Successfully');
      } catch (err: any) {
        console.log(err);
        if (err.response) {
          toast.error(err.response?.data?.message);
        } else {
          toast.error('Check Form Data');
        }
      }
    } else {
      toast.error('Fill all the Details');
    }
  };

  const addRetailerButton = async () => {
    if (retailerForm.name !== '' && retailerForm.walletAddress !== '') {
      console.log(retailerForm);
      try {
        const transaction = await contractInstance.addRetailer(retailerForm.name, retailerForm.walletAddress.toLowerCase());
        console.log(transaction);
        const { data } = await addRetailer(retailerForm);
        console.log(data);
        setRetailerForm({
          name: '',
          walletAddress: ''
        });
        setRerender((value) => !value);
        toast.success('Retailer added Successfully');
      } catch (err: any) {
        console.log(err);
        if (err.response) {
          toast.error(err.response?.data?.message);
        } else {
          toast.error('Check Form Data');
        }
      }
    } else {
      toast.error('Fill all the Details');
    }
  };

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
                value={adminForm.name}
                placeholder="Enter Admin Name"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
                onChange={(e) => {
                  setAdminForm({ ...adminForm, name: e.target.value });
                }}
              />
            </div>
            <div className="w-2/6">
              <label htmlFor="walletAddr">Wallet Address: </label>
              <input
                type="text"
                id="walletAddr"
                value={adminForm.walletAddress}
                placeholder="Enter Wallet Address"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
                onChange={(e) => {
                  setAdminForm({ ...adminForm, walletAddress: e.target.value });
                }}
              />
            </div>
            <button
              className="flex gap-2 w-auto bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md"
              onClick={() => {
                addAdminButton();
              }}>
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
                value={retailerForm.name}
                placeholder="Enter Retailer Name"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
                onChange={(e) => {
                  setRetailerForm({ ...retailerForm, name: e.target.value });
                }}
              />
            </div>
            <div className="w-2/6">
              <label htmlFor="walletAddr">Wallet Address: </label>
              <input
                type="text"
                id="walletAddr"
                value={retailerForm.walletAddress}
                placeholder="Enter Wallet Address"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
                onChange={(e) => {
                  setRetailerForm({ ...retailerForm, walletAddress: e.target.value });
                }}
              />
            </div>
            <button
              className="flex gap-2 w-auto bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md"
              onClick={() => {
                addRetailerButton();
              }}>
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
                      {
                        allRetailers.map((retailer: any, idx: number) => (
                          <tr className="border-b" key={retailer.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{idx + 1}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{retailer.name}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{`${retailer.walletAddress.slice(0, 9)}..${retailer.walletAddress.slice(-9)}`}</td>
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
      </div>
    </div>
  );
};

export default Dashboard;
