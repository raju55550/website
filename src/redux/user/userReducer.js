import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
      isLoggedIn: true,
    }),
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
