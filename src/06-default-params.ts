export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

// 0 === false
// '' === false
// false === false

const product1 = createProduct(1, true, 34);
const product2 = createProduct(2);
const product3 = createProduct(3, false, 0);
const product4 = createProduct(4, true, 100);
const product5 = createProduct(5, false);
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);
