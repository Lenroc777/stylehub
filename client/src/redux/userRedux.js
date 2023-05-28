import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userRequest } from "../requestMethods";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logout: (state)=>{
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});


export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure } = userSlice.actions;

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const response = await userRequest.post("/auth/register", userData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export default userSlice.reducer;
