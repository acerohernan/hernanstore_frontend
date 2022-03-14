import React, { useEffect } from "react";
import Announcement from "../components/announcement";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Products from "../components/products";
import Slider from "../components/slider";
import { useAppDispatch } from "../redux/hooks";
import { getProducts } from "../redux/reducers/product";

function HomeScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomeScreen;
