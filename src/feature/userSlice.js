import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
  username: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: JSON.parse(localStorage.getItem('userState')) || initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
      state.loggedIn = action.payload.loggedIn;
      localStorage.setItem('userState', JSON.stringify(state));
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.username = null;
      state.loggedIn = false;
      localStorage.removeItem('userState');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selector = (state) => state.user;
export default userSlice.reducer;
