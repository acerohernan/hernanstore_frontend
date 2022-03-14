import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartState } from "../models/cart";
import { IProduct, IProductCart } from "../models/product";

const initialState: CartState = {
  status: "",
  items: [],
};

/* Reducers */
interface ProductAction {
  payload: IProduct;
}

const addToCartReducer = (state: CartState, { payload }: ProductAction) => {
  const itemIsAdded = state.items.find((item) => item._id === payload._id);

  if (itemIsAdded) {
    itemIsAdded.quantity += 1;
  }

  if (!itemIsAdded) {
    return { ...state, items: [...state.items, { ...payload, quantity: 1 }] };
  }
};

const removeFromCartReducer = (
  state: CartState,
  { payload }: ProductAction
) => {
  const itemToRemove = state.items.find((item) => item._id === payload._id);

  if (itemToRemove?.quantity === 1) {
    const filteredItems = state.items.filter(
      (item) => item._id !== payload._id
    );

    return {
      ...state,
      items: filteredItems,
    };
  }

  if (itemToRemove?.quantity && itemToRemove?.quantity !== 1) {
    itemToRemove.quantity -= 1;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: addToCartReducer,
    removeFromCart: removeFromCartReducer,
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
