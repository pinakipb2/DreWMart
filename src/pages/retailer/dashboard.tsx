import React, { useState, useEffect } from 'react';

import { NextPage } from 'next';
import { toast } from 'react-hot-toast';
import { FaBoxOpen, FaCartPlus } from 'react-icons/fa';
import { MdInventory } from 'react-icons/md';

import { getInventory, getSoldProducts, sellProductToUser } from '../../api';
import RetailerNavbar from '../../components/RetailerNavbar';
import { useAppSelector } from '../../redux/hooks';

const RetailerDashboard: NextPage = () => {
  const walletAddress = useAppSelector((state: any) => state.retailer.walletAddress);
  const [inventory, setInventory] = useState([]);
  const [sold, setSold] = useState([]);
  const [prodForm, setProdForm] = useState({
    id: '',
    soldTo: '',
    walletAddress
  });
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data } = await getInventory({ walletAddress });
        setInventory(data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to Fetch Inventory');
      }
    };
    fetchInventory();
    const fetchSoldProducts = async () => {
      try {
        const { data } = await getSoldProducts({ walletAddress });
        setSold(data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to Fetch Sold Products');
      }
    };
    fetchSoldProducts();
  }, [rerender]);

  const sellProduct = async () => {
    if (prodForm.id !== '' && prodForm.soldTo !== '') {
      try {
        console.log(prodForm);
        const { data } = await sellProductToUser(prodForm);
        console.log(data);
        setProdForm({
          id: '',
          soldTo: '',
          walletAddress
        });
        toast.success('Product Sold');
        setRerender((value) => !value);
      } catch (err) {
        console.log(err);
        toast.error('Check Form Data');
      }
    } else {
      toast.error('Check Form Data');
    }
  };

  return (
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
                onChange={(e) => {
                  setProdForm({ ...prodForm, id: e.target.value });
                }}
              >
                <option value="">Select Product</option>
                {
                  inventory.map((item: any) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="w-2/5">
              <label htmlFor="walletAddr">Wallet Address: </label>
              <input
                type="text"
                id="walletAddr"
                placeholder="Enter Wallet Address"
                value={prodForm.soldTo}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded focus:text-gray-700 focus:border-blue-600 focus:border-2 focus:outline-none mt-2"
                onChange={(e) => {
                  setProdForm({ ...prodForm, soldTo: e.target.value });
                }}
              />
            </div>
            <button
              className="flex gap-2 w-1/5 bg-green-600 text-white px-3 py-1.5 justify-center items-center mt-8 rounded-md text-base font-semibold hover:shadow-md"
              onClick={() => {
                sellProduct();
              }}>
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
            <div className="overflow-x-auto -mx-4 mt-2">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-y max-h-96 min-h-96">
                  <table className="min-w-full mb-2">
                    <thead className="border-b w-full sticky top-0 bg-indigo-200">
                      <tr>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          S.No.
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Product Name
                        </th>
                        <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                          Quantity Left
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        inventory.map((item: any, idx: number) => (
                          <tr className="border-b" key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{idx + 1}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{item.name}</td>
                            <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{item.quantity}</td>
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
      <div className="flex flex-col p-5 bg-white mb-10 mx-10">
        <div className="text-2xl font-semibold flex gap-2 items-center">
          <FaBoxOpen />
          Sold Product(s)
        </div>
        <div className="overflow-x-auto -mx-4 mt-2">
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
                  {
                    sold.map((item: any, idx: number) => (
                      <tr className="border-b" key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{idx + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{item.prodId}</td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{item.Product.name}</td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{item.soldTo}</td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{new Date(item.soldAt).toLocaleString('hi')}</td>
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
  );
};

export default RetailerDashboard;
