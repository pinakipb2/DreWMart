import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getAllProducts, getSingleProduct } from '../../api';
import ProductDetail from '../../components/ProductDetail';
import ShopFooter from '../../components/ShopFooter';
import ShopNavbar from '../../components/ShopNavbar';
import { ProductDetailType, ProductError, ProductResp, SingleProductProps } from '../../types';

const SingleProduct: NextPage<ProductDetailType> = ({ productResp, allProducts }) => (
  <>
    <ShopNavbar />
    <ProductDetail productResp={productResp} allProducts={allProducts} />
    <ShopFooter />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths;
  try {
    const { data } = await getAllProducts();
    paths = data.map((product: ProductResp) => ({
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
  let productResp: SingleProductProps;
  let allProducts: ProductResp[] | ProductError;
  try {
    const { data } = await getSingleProduct(productID);
    const resp = await getAllProducts();
    productResp = data;
    allProducts = resp.data;
  } catch (err: any) {
    productResp = err.response.data;
    allProducts = err.response.data;
  }
  return {
    props: { productResp, allProducts },
    revalidate: 60 * 5,
  };
};

export default SingleProduct;
