import { Navigate, useRoutes } from "react-router-dom";
import CartScreen from "../views/cart";

//Pages
import HomeScreen from "../views/home";
import LoginScreen from "../views/login";
import ProductScreen from "../views/product";
import ProductListScreen from "../views/productList";
import SignUpScreen from "../views/signup";

const RouterStore: React.FC = (): JSX.Element => {
  const rtg = useRoutes([
    {
      path: "",
      element: <HomeScreen />,
    },
    {
      path: "login",
      element: <LoginScreen />,
    },
    {
      path: "signup",
      element: <SignUpScreen />,
    },
    {
      path: "cart",
      element: <CartScreen />,
    },
    {
      path: "products",
      element: <ProductListScreen />,
    },
    {
      path: "products/:id",
      element: <ProductScreen />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <>{rtg}</>;
};

export default RouterStore;
