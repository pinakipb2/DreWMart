import { PayloadAction } from '@reduxjs/toolkit';

const { createSlice } = require('@reduxjs/toolkit');

interface adminInitialState {
  id: string
  walletAddress: string
}

const initialState: adminInitialState = {
  id: '',
  walletAddress: '',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addWalletAddress: (state: adminInitialState, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    login: (state: adminInitialState, action: PayloadAction<adminInitialState>) => {
      state.id = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
    },
    logout: () => initialState,
  },
});

export const { addWalletAddress, login, logout } = adminSlice.actions;
export default adminSlice.reducer;
