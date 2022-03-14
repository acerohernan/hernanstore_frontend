import { IProductCart } from "./product";

export interface CartState {
  items: IProductCart[];
  status: "";
}
