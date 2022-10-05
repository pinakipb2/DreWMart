import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getProductHistory, getWarrantyInfo } from '../../api';
import ShopFooter from '../../components/ShopFooter';
import ShopNavbar from '../../components/ShopNavbar';
import WarrantyDetail from '../../components/WarrantyDetail';
import { ProductError, Store } from '../../types';

const Warranty: NextPage<{ productResp: Store }> = ({ productResp }) => (
  <>
    <ShopNavbar />
    <WarrantyDetail productResp={productResp} />
    <ShopFooter />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  let paths;
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productID = context.params?.productID as string;
  const addr: string = '0x165CD37b4C644C2921454429E7F9358d18A45e14';
  let productResp: Store | ProductError;
  try {
    const { data } = await getWarrantyInfo(productID, addr);
    console.log(data);
    productResp = data;
  } catch (err: any) {
    productResp = err.response.data;
    console.log(err);
  }
  return {
    props: { productResp },
    revalidate: 5,
  };
};

export default Warranty;
