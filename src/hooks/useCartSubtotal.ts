import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

export const useCartSubtotal = () => {
  const [subtotal, setSubtotal] = useState(0);

  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    let value = 0;

    items.forEach((item) => {
      value = value + Number(item.price) * item.quantity;
    });

    setSubtotal(value);
  }, [items]);

  return subtotal;
};
