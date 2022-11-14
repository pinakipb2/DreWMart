import axios from 'axios';

import { Prod } from '../types';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer token' },
});

export const getAllProducts = () => API.get('/product/all-products');
export const getSingleProduct = (productID: string) => API.get(`/product/single-product/${productID}`);
export const buyProducts = (walletAddress: string, products: Prod[]) => {
  const cart = products.map(({ id, amount }) => ({ productId: id, quantity: amount }));
  return API.post('/ecommerce/buy-products', { walletAddress, cart });
};
export const getProductHistory = (walletAddress: string) => API.get(`/ecommerce/get-orders/${walletAddress}`);
export const claimWarranty = (productID: string, walletAddress: string) => API.post('/ecommerce/claim-warranty', { id: productID, walletAddress });
export const getWarrantyInfo = (productID: string, walletAddress: string) => API.get(`/ecommerce/warranty-info/${walletAddress}/${productID}`);

export const registerUser = (data: { firstName: string; lastName: string; emailId: string; phoneNumber: string; address: string; walletAddress: string; }) => API.post('/user/register-user', data);
export const loginUser = (data: { emailId: string; walletAddress: string; }) => API.post('/user/login-user', data);

export const addAdmin = (data: { name: string; walletAddress: string; }) => API.post('/admin/add-admin', data);
export const loginAdmin = (data: { walletAddress: string; }) => API.post('/admin/login', data);

export const fetchAllAdmins = () => API.get('/admin/all-admins');

export const addRetailer = (data: { name: string; walletAddress: string; }) => API.post('/retailer/add-retailer', data);
export const loginRetailer = (data: { walletAddress: string; }) => API.post('/retailer/login', data);
export const fetchAllRetailers = () => API.get('/retailer/all-retailers');
export const getInventory = (data: { walletAddress: string; }) => API.post('/retailer/inventory', data);
export const getSoldProducts = (data: { walletAddress: string; }) => API.post('/retailer/get-sold-products', data);
export const sellProductToUser = (data: { id: string; soldTo: string; walletAddress: string; }) => API.post('/retailer/sell-product', data);

export const fetchAllCoupons = () => API.get('/coupon/all-coupons');
export const resetDrewToken = (data: { walletAddress: string }) => API.post('/retailer/reset-tokens', data);
export const redeemCoupon = (data: { retailerId: string; couponItemsId: string; }) => API.post('/coupon/redeem-coupon', data);
export const fetchAllCouponsByRetailer = (retailerId: string) => API.get(`/coupon/get-coupons/${retailerId}`);
