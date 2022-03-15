import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  useRef,
  RefObject,
} from "react";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Products from "../components/products";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProducts } from "../redux/reducers/product";
import "../styles/views/productList.scss";

function ProductListScreen() {
  const { items, status } = useAppSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState(items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (status === "getProducts_success") {
      setFilteredProducts(items);
    }
  }, [status]);

  const colorSelectRef: RefObject<any> = useRef(null);
  const sizeSelectRef: RefObject<any> = useRef(null);

  const handleFilterByColor: ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.currentTarget.value.toLocaleLowerCase();
    sizeSelectRef.current.value = "All Size";

    if (value !== "all color") {
      const newItems = items.filter((item) =>
        item.color.join().includes(value)
      );

      return setFilteredProducts(newItems);
    }

    if (value === "all color") {
      setFilteredProducts(items);
    }
  };

  const handleFilterBySize: ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.currentTarget.value;
    colorSelectRef.current.value = "All Color";

    if (value !== "All Size") {
      const newItems = items.filter((item) => item.size.join().includes(value));

      return setFilteredProducts(newItems);
    }

    if (value === "All Size") {
      setFilteredProducts(items);
    }
  };

  const handleSortByPrice: ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.currentTarget.value;
    colorSelectRef.current.value = "All Color";
    sizeSelectRef.current.value = "All Size";

    /* if (value === "Price (asc)") {
      const newItems = items.sort((a, b) => {
        if (Number(a.price) > Number(b.price)) {
          return 1;
        }

        if (Number(b.price) > Number(a.price)) {
          return -1;
        }

        return 0;
      });
      return console.log(newItems);
    }

    if (value === "Price (desc)") {
      const newItems = items.sort((a, b) => Number(b.price) - Number(a.price));
      return console.log(newItems);
    }

    if (value === "Random") {
      setFilteredProducts(items);
    } */
  };

  return (
    <div className="app__product_list">
      <Navbar />
      <Announcement />
      <h1 className="app__product_list-title">All Products</h1>
      <div className="app__product_list-filter_container">
        <div className="app__product_list-filter">
          <span className="app__product_list-filter_text">
            Filter Products:
          </span>
          <select
            className="app__product_list-filter_select"
            onChange={handleFilterByColor}
            defaultValue="All Color"
            ref={colorSelectRef}
          >
            <option>All Color</option>
            <option>White</option>
            <option>Gray</option>
            <option>Black</option>
            <option>Yellow</option>
            <option>Brown</option>
          </select>
          <select
            className="app__product_list-filter_select"
            defaultValue="All Size"
            onChange={handleFilterBySize}
            ref={sizeSelectRef}
          >
            <option>All Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="app__product_list-filter">
          <span className="app__product_list-filter_text">Sort Products:</span>
          <select
            className="app__product_list-filter_select"
            defaultValue="Newest"
            onChange={handleSortByPrice}
          >
            <option>Random</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products products={filteredProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductListScreen;
