import React from 'react';

import { NextPage } from 'next';

import OrderHistory from '../components/OrderHistory';
import ShopFooter from '../components/ShopFooter';
import ShopNavbar from '../components/ShopNavbar';

const Orders: NextPage = () => (
  <>
    <ShopNavbar />
    <OrderHistory />
    <ShopFooter />
  </>
);

export default Orders;
