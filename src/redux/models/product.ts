export interface ProductState {
  items: IProduct[];
  status: string;
}

export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  img: string;
  size: string[];
  color: string[];
  price: string;
  categories: string[];
}

export interface IProductCart extends IProduct {
  quantity: number;
}
