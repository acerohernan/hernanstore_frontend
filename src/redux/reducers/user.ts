import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../config";
import { UserState } from "../models/user";

const initialState: UserState = {
  status: "",
  token: "",
  username: "",
  email: "",
  isLogin: false,
};

/* Login Thunk */

interface LoginPayload {
  username: string;
  password: string;
}

export const userLogin = createAsyncThunk<any, LoginPayload>(
  "user/login",
  async (user) => {
    const response = await fetchData().post("/api/auth/login", user);
    const dataResponse = (await response).data;
    console.log(dataResponse);
    return dataResponse;
  }
);

/* Signup Thunk */

interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

export const userSignup = createAsyncThunk<any, SignupPayload>(
  "user/signup",
  async (user) => {
    const response = await fetchData().post("/api/auth/register", user);
    const dataResponse = (await response).data;
    return dataResponse;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state: UserState) => {
      state.isLogin = false;
      state.username = "";
      state.email = "";
      state.token = "";
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    /* User Login Status */
    builder.addCase(userLogin.pending, (state) => {
      state.status = "userLogin_loading";
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.status = "userLogin_rejected";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.status = "userLogin_success";
      state.token = payload.accessToken;
      state.username = payload.username;
      state.email = payload.email;
      state.isLogin = true;
    });

    /* User Signup Status */
    builder.addCase(userSignup.pending, (state) => {
      state.status = "userSignup_loading";
    });
    builder.addCase(userSignup.rejected, (state) => {
      state.status = "userSignup_rejected";
    });
    builder.addCase(userSignup.fulfilled, (state) => {
      state.status = "userSignup_success";
    });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
