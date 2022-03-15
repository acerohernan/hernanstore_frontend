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
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    price: "",
  });

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

  const handleSelectFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (!e.currentTarget.value.includes("All")) {
      setFilters({
        ...filters,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }

    if (e.currentTarget.value.includes("All")) {
      setFilters({
        ...filters,
        [e.currentTarget.name]: "",
      });
    }
  };

  useEffect(() => {
    let newProducts = [...items];

    if (filters.color) {
      newProducts = newProducts.filter((product) =>
        product.color.join().includes(filters.color.toLocaleLowerCase())
      );
    }

    if (filters.size) {
      newProducts = newProducts.filter((product) =>
        product.size.join().includes(filters.size)
      );
    }

    if (filters.price === "Price (asc)") {
      newProducts.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));
    }

    if (filters.price === "Price (desc)") {
      newProducts.sort((a, b) => (Number(a.price) < Number(b.price) ? 1 : -1));
    }

    setFilteredProducts(newProducts);
  }, [filters, items]);

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
            onChange={handleSelectFilter}
            name="color"
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
            name="size"
            onChange={handleSelectFilter}
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
            name="price"
            onChange={handleSelectFilter}
          >
            handleSelectFilter
            <option value="All price">Random</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      {filteredProducts.length === 0 &&
      (filters.size || filters.color || filters.price) ? (
        <div className="app__product_list-no_products">
          <img
            src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg"
            alt="no-products"
            className="app__product_list-no_products-img"
          />
          <p className="app__product_list-no_products-text">
            Oh! Seems that the product that your search does not exists.
          </p>
          <button
            className="app__product_list-top_button"
            onClick={() =>
              setFilters({
                color: "",
                size: "",
                price: filters.price,
              })
            }
          >
            DELETE FILTERS
          </button>
        </div>
      ) : null}
      <Products products={filteredProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductListScreen;
