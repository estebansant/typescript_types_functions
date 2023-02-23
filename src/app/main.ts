import { faker } from "@faker-js/faker";
import { addProduct, products }  from "./products/product.services";

for(let i = 0; i < 50; i++){
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  });
};

console.log(products);
