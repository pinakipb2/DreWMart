import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { RiCopperCoinFill } from 'react-icons/ri';
import { SiDogecoin } from 'react-icons/si';
import { useDispatch } from 'react-redux';

import { fetchAllCoupons, fetchAllCouponsByRetailer, redeemCoupon, resetDrewToken } from '../../api';
import getDTKContract from '../../auth/getDTKContract';
import RetailerNavbar from '../../components/RetailerNavbar';
import { useAppSelector } from '../../redux/hooks';
import { updateClaimedTokens, updateDrewTokens } from '../../redux/retailer/retailerSlice';

const Redeem: NextPage = () => {
  const dispatch = useDispatch();
  const walletAddress = useAppSelector((state: any) => state.retailer.walletAddress);
  const id = useAppSelector((state: any) => state.retailer.id);
  const drewTokens = useAppSelector((state: any) => state.retailer.drewTokens);
  const claimedTokens = useAppSelector((state: any) => state.retailer.claimedTokens);
  const [allCoupons, setAllCoupons] = useState([]);
  const [allClaimedCoupons, setAllClaimedCoupons] = useState([]);
  const [contractInstance, setContractInstance] = useState<any>(null);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    const getAllCoupons = async () => {
      try {
        const { data } = await fetchAllCoupons();
        setAllCoupons(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCoupons();
    const getAllCouponsByRetailer = async () => {
      try {
        const { data } = await fetchAllCouponsByRetailer(id);
        console.log(data);
        setAllClaimedCoupons(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCouponsByRetailer();
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

  const claimTokens = async () => {
    try {
      const transaction = await contractInstance.mint(drewTokens);
      console.log(transaction);
      dispatch(updateClaimedTokens(drewTokens));
      dispatch(updateDrewTokens(0));
      const { data } = await resetDrewToken({ walletAddress });
      console.log(data);
      setRerender((value) => !value);
      toast.success('DreWTokens Claimed');
    } catch (err) {
      console.log(err);
      toast.error('Unable to Claim DreWTokens');
    }
  };

  const redeem = async (coupon: any) => {
    console.log(coupon);
    try {
      const transaction = await contractInstance.burn(coupon.price);
      dispatch(updateClaimedTokens(-coupon.price));
      console.log(transaction);
      const { data } = await redeemCoupon({ retailerId: id, couponItemsId: coupon.id });
      console.log(data);
      setRerender((value) => !value);
      toast.success('Reward Reedemed Successfully');
    } catch (err) {
      console.log(err);
      toast.error('Insufficient DreWTokens');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <RetailerNavbar />
      <div className="text-center py-6 font-bold text-3xl">Claim DreWTokens</div>
      <div className="flex items-center text-center w-full justify-center gap-28 text-2xl font-semibold text-blue-700 pb-6">
        <span className="flex flex-row items-center gap-2">
          Unclaimed Tokens : <RiCopperCoinFill /> {drewTokens}
        </span>
        <span className="flex flex-row items-center gap-2">
          Claimed Tokens : <SiDogecoin /> {claimedTokens}
        </span>
        <button className="w-fit px-3 bg-green-700 text-white py-1.5 pb-2 font-semibold rounded-md hover:bg-green-600 text-xl" onClick={() => { claimTokens(); }}>Claim Tokens</button>
      </div>
      <div className="text-center py-4 font-bold text-3xl">Redeem Store</div>
      <div className="container px-4 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {allCoupons.map((coupon: any) => (
            <div className="w-1/6 p-3" key={coupon.id}>
              <div className="bg-gray-100 p-4 rounded-lg space-y-1">
                <div className="items-center flex justify-center object-center mb-4">
                  <Image className="bg-orange rounded w-full object-cover" src="/favicon.png" height={100} width={100} alt="content" />
                </div>
                <h3 className="text-indigo-500 text-xl font-medium title-font text-center">{coupon.name}</h3>
                <div className="text-lg flex items-center justify-center gap-2 text-black font-medium title-font text-center">
                  <SiDogecoin /> {coupon.price}
                </div>
                <button
                  className="w-full bg-blue-700 text-white py-1.5 pb-2 font-semibold rounded-md hover:bg-blue-600"
                  onClick={() => {
                    redeem(coupon);
                  }}>Redeem
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-6 font-bold text-3xl">Claimed Items</div>
      <div className="flex items-center justify-center pb-10">
        <div className="flex flex-col p-5 bg-white w-3/5">
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
                        Redeemed Item
                      </th>
                      <th scope="col" className="w-1/3 text-lg font-medium text-gray-900 px-6 py-4 text-center">
                        Redeemed On
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allClaimedCoupons.map((item: any, idx: number) => (
                        <tr className="border-b" key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900 text-center">{idx + 1}</td>
                          <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{item.CouponItem.name}</td>
                          <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap text-center">{new Date(item.createdAt).toLocaleString('hi')}</td>
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
  );
};

export default Redeem;
