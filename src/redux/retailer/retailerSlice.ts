import { PayloadAction } from '@reduxjs/toolkit';

const { createSlice } = require('@reduxjs/toolkit');

interface retailerInitialState {
  id: string
  walletAddress: string
  drewTokens: number
}

const initialState: retailerInitialState = {
  id: '',
  walletAddress: '',
  drewTokens: 0
};

const retailerSlice = createSlice({
  name: 'retailer',
  initialState,
  reducers: {
    addWalletAddress: (state: retailerInitialState, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    updateDrewTokens: (state: retailerInitialState, action: PayloadAction<number>) => {
      state.drewTokens = action.payload;
    },
    login: (state: retailerInitialState, action: PayloadAction<retailerInitialState>) => {
      state.id = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
      state.drewTokens = action.payload.drewTokens;
    },
    logout: () => initialState,
  },
});

export const { addWalletAddress, updateDrewTokens, login, logout } = retailerSlice.actions;
export default retailerSlice.reducer;
