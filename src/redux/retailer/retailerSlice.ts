import { PayloadAction } from '@reduxjs/toolkit';

const { createSlice } = require('@reduxjs/toolkit');

interface retailerInitialState {
  id: string
  walletAddress: string
}

const initialState: retailerInitialState = {
  id: '',
  walletAddress: '',
};

const retailerSlice = createSlice({
  name: 'retailer',
  initialState,
  reducers: {
    addWalletAddress: (state: retailerInitialState, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    login: (state: retailerInitialState, action: PayloadAction<retailerInitialState>) => {
      state.id = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
    },
    logout: () => initialState,
  },
});

export const { addWalletAddress, login, logout } = retailerSlice.actions;
export default retailerSlice.reducer;
