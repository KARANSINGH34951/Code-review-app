import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    password: null,
    username: null,
    loggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
      state.loggedIn = action.payload.loggedIn;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.username = null;
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selector = (state) => state.user;
export default userSlice.reducer;
