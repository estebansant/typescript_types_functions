import { addProduct }  from "./products/product.services";

addProduct({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 75,
  category: {
    id: 13,
    name: 'c1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});
