import React from 'react';

import type { GetStaticProps, NextPage } from 'next';

import { getAllProducts } from '../api';
import ShopFooter from '../components/ShopFooter';
import ShopItem from '../components/ShopItem';
import ShopNavbar from '../components/ShopNavbar';
import ShopSidebar from '../components/ShopSidebar';
import { ShopProps } from '../types';

const Shop: NextPage<ShopProps> = ({ productResp }) => (
  <>
    <ShopNavbar />
    <div className="bg-gray-300 flex flex-row pt-4 space-x-4 pb-5">
      <ShopSidebar />
      <ShopItem productResp={productResp} />
    </div>
    <ShopFooter />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  let productResp: ShopProps;
  try {
    const { data } = await getAllProducts();
    productResp = data;
  } catch (err: any) {
    productResp = err.response.data;
  }
  return {
    props: { productResp },
    revalidate: 60 * 5,
  };
};

export default Shop;
