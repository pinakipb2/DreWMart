import React from 'react';

import { NextPage } from 'next';

import CustomerProfile from '../components/CustomerProfile';
import ShopFooter from '../components/ShopFooter';
import ShopNavbar from '../components/ShopNavbar';

const Profile: NextPage = () => (
  <>
    <ShopNavbar />
    <CustomerProfile />
    <ShopFooter />
  </>
);

export default Profile;
