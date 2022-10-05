import React from 'react';

import { NextPage } from 'next';

import ShopCart from '../components/ShopCart';
import ShopFooter from '../components/ShopFooter';
import ShopNavbar from '../components/ShopNavbar';

const Cart: NextPage = () => (
  <>
    <ShopNavbar />
    <ShopCart />
    <ShopFooter />
  </>
);

export default Cart;
