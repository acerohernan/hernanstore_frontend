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
    return [
      {
      _id: "cfa5d55b-de50-4e08-b3c1-24d44a3415ab",
      name: "Casaca de cuero",
      code: "010101",
      category: "Casacas",
      price: 30,
      stars: 30,
      description: "Esta es una descripción test",
      image_url: "https://lavanderia-peru.com/wp-content/uploads/2021/03/mantenimiento-de-cuero-lavanderia-el-solar.jpg"}
    ];
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
