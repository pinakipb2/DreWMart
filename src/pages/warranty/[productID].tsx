import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { getProductHistory, getWarrantyInfo } from '../../api';
import ShopFooter from '../../components/ShopFooter';
import ShopNavbar from '../../components/ShopNavbar';
import WarrantyDetail from '../../components/WarrantyDetail';
import { Store } from '../../types';

const Warranty: NextPage<{ productResp: Store }> = ({ productResp }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="flex w-full h-screen items-center justify-center text-center font-bold text-4xl">Loading...</div>;
  }
  return (
    <>
      <ShopNavbar />
      <WarrantyDetail productResp={productResp} />
      <ShopFooter />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e12';
  let paths = [];
  try {
    const { data } = await getProductHistory(addr);
    const prods = data.filter((p: Store) => p.isWarrantyClaimed === true);
    paths = prods.map((product: Store) => ({
      params: { productID: product.id },
    }));
  } catch (err: any) {
    console.log(err);
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productID = context.params?.productID as string;
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  let productResp: Store;
  try {
    const { data } = await getWarrantyInfo(productID, addr);
    productResp = data;
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
  if (!productResp) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productResp },
  };
};

export default Warranty;
