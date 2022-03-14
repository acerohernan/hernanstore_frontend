import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../config";
import { ProductState } from "../models/product";

const initialState: ProductState = {
  status: "",
  items: [],
};

/* Get Products Thunk */
export const getProducts = createAsyncThunk<any, void>(
  "product/get",
  async () => {
    const response = await fetchData().get("/api/products");
    const dataResponse = (await response).data;
    return dataResponse;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "getProducts_loading";
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = "getProducts_rejected";
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.status = "getProducts_success";
      state.items = payload;
    });
  },
});

export default productSlice.reducer;
