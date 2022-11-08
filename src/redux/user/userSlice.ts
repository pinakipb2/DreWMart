import { PayloadAction } from '@reduxjs/toolkit';

const { createSlice } = require('@reduxjs/toolkit');

interface userInitialState {
  id: string
  firstName: string
  lastName: string
  emailId: string
  phoneNumber: string
  address: string
  walletAddress: string
}

const initialState: userInitialState = {
  id: '',
  firstName: '',
  lastName: '',
  emailId: '',
  phoneNumber: '',
  address: '',
  walletAddress: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addWalletAddress: (state: userInitialState, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    login: (state: userInitialState, action: PayloadAction<userInitialState>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.emailId = action.payload.emailId;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.walletAddress = action.payload.walletAddress;
    },
    logout: () => initialState,
  },
});

export const { addWalletAddress, login, logout } = userSlice.actions;
export default userSlice.reducer;
