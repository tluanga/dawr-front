import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {login} from '../../api/auth.api'


export const createLoginToken = createAsyncThunk("Login", (payload) => {
  try {
    // const response=create(params)
    return login(payload)
   
  } catch (err) {
    return err;
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
   isLoggedIn:false,
   user:null
  },
  reducers: {
    clear: (state) =>
      (state = {
        isLoggedIn:false,
        user:null

      }),
  },
  extraReducers: {
    [createLoginToken.fulfilled]: (state, action) => (state ={
        isLoggedIn:true,
        user:action.payload
    }),
    [createLoginToken.rejected]: (state) =>
      (state = {
        isLoggedIn: "rejected",
        user: "null",
      }),
  },
});

export const loginSelector = (state) => state.login;

export const { clear } = loginSlice.actions;

export default loginSlice.reducer;
