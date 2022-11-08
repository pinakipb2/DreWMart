import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { getProductHistory, getWarrantyInfo } from '../../api';
import ShopFooter from '../../components/ShopFooter';
import ShopNavbar from '../../components/ShopNavbar';
import WarrantyDetail from '../../components/WarrantyDetail';
import { useAppSelector } from '../../redux/hooks';
import { Store } from '../../types';
import NotFound from '../404';

const Warranty: NextPage = () => {
  const router = useRouter();
  const walletAddress = useAppSelector((state: any) => state.user.walletAddress);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productResp, setProductResp] = useState({} as Store);

  useEffect(() => {
    const getDataFromPaths = async () => {
      try {
        const { data } = await getProductHistory(walletAddress);
        const prods = data.filter((p: Store) => p.isWarrantyClaimed === true).map((p: Store) => p.id);
        if (prods.includes(router.query.productID)) {
          const { data: warrantyInfo } = await getWarrantyInfo(String(router.query.productID), walletAddress);
          if (!warrantyInfo) {
            setIsError(true);
            return;
          }
          setProductResp(warrantyInfo);
        } else {
          setIsError(true);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
      setIsLoading(false);
    };
    getDataFromPaths();
  }, []);

  if (router.isFallback || isLoading) {
    return <div className="flex w-full h-screen items-center justify-center text-center font-bold text-4xl">Loading...</div>;
  }
  if (isError) {
    return <NotFound />;
  }
  return (
    <>
      <ShopNavbar />
      <WarrantyDetail productResp={productResp} />
      <ShopFooter />
    </>
  );
};

export const getServerSideProps = (ctx: { params: any; }) => ({
  props: {
    key: ctx.params.productID
  },
});

export default Warranty;
