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
