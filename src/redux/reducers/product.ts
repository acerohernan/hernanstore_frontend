import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        _id: "622f580a121e0852a1be1a5f",
        title: "Relax T-shirt",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        categories: ["t-shirt", "man"],
        size: ["S", "M", "L"],
        color: ["yellow"],
        price: { $numberInt: "35" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647269898426" } },
        updatedAt: { $date: { $numberLong: "1647269898426" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5880121e0852a1be1a61",
        title: "Cool Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://i.ibb.co/YZC6n90/coat1.png",
        categories: ["jacket", "man"],
        size: ["M", "L", "XL"],
        color: ["yellow"],
        price: { $numberInt: "65" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270016059" } },
        updatedAt: { $date: { $numberLong: "1647270016059" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5918121e0852a1be1a66",
        title: "Fresh Dress",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://www.pngplay.com/wp-content/uploads/6/Dress-Clothes-PNG-Clipart-Background.png",
        categories: ["dress", "women"],
        size: ["XS", "S"],
        color: ["black"],
        price: { $numberInt: "45" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270168511" } },
        updatedAt: { $date: { $numberLong: "1647270168511" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5983121e0852a1be1a68",
        title: "Minimalist Bag",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        categories: ["bag", "women"],
        size: ["Unique"],
        color: ["white"],
        price: { $numberInt: "25" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270275110" } },
        updatedAt: { $date: { $numberLong: "1647270275110" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f59c1121e0852a1be1a6a",
        title: "Animal Hat",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        categories: ["hat", "man", "women"],
        size: ["Unique"],
        color: ["gray"],
        price: { $numberInt: "15" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270337272" } },
        updatedAt: { $date: { $numberLong: "1647270337272" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5a70121e0852a1be1a6f",
        title: "Women Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        categories: ["jacket", "women"],
        size: ["XS", "S", "M"],
        color: ["gray"],
        price: { $numberInt: "49" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270512056" } },
        updatedAt: { $date: { $numberLong: "1647270512056" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5ad5121e0852a1be1a71",
        title: "Colorfull Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://i.ibb.co/J39QRFz/coat3.png",
        categories: ["jacket", "women", "man"],
        size: ["XS", "S", "M", "L", "XL"],
        color: ["Unique"],
        price: { $numberInt: "69" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270613875" } },
        updatedAt: { $date: { $numberLong: "1647270613875" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5b00121e0852a1be1a73",
        title: "Nice Short",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://i.ibb.co/kqj2pPD/short1.png",
        categories: ["short", "man"],
        size: ["S", "M"],
        color: ["yellow"],
        price: { $numberInt: "29" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270656367" } },
        updatedAt: { $date: { $numberLong: "1647270656367" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: "622f5b24121e0852a1be1a75",
        title: "Formal Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
        img: "https://i.ibb.co/P9H4SJJ/coat6.png",
        categories: ["jacket", "man"],
        size: ["S", "M", "L", "XL"],
        color: ["brown"],
        price: { $numberInt: "59" },
        inStock: true,
        createdAt: { $date: { $numberLong: "1647270692873" } },
        updatedAt: { $date: { $numberLong: "1647270692873" } },
        __v: { $numberInt: "0" },
      },
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
