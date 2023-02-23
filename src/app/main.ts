import { faker } from "@faker-js/faker";
import { addProduct, products, updateProduct, findProducts }  from "./products/product.services";

for(let i = 0; i < 50; i++){
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid(),
  });
};

console.log(products);
const product1 = products[0];
updateProduct(product1.id, {
  title: 'New title',
  stock: 80,
})

findProducts({
  stock: 10,
  color: 'red',
})
