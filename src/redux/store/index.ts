import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "../reducers/cart";
import productSlice from "../reducers/product";
import userSlice from "../reducers/user";

const reducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  product: productSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
