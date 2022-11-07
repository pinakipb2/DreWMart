// import { PayloadAction } from '@reduxjs/toolkit';

// import { Prod } from '../../types';

const { createSlice } = require('@reduxjs/toolkit');

interface userInitialState {
  emailId: string
  walletAddress: string
}

const initialState: userInitialState = {
  emailId: '',
  walletAddress: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
