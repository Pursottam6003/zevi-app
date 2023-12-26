/*
import { faker } from "@faker-js/faker";
// var faker: any = {}
import { typeOfData } from "./type";

const brands: string[] = [...Array(10)].map(() => faker.company.name());

export const data: typeOfData[] = [...Array(250)].map(() => ({
  id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
  brandName: brands[faker.helpers.rangeToNumber({ min: 0, max: 9 })],
  price: faker.helpers.rangeToNumber({ min: 300, max: 5000 }),
  discount: faker.helpers.rangeToNumber({ min: 5, max: 40 }),
  rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  noOfRatings: faker.helpers.rangeToNumber({ min: 120, max: 500 }),
  trendingPercentage: faker.datatype.float({
    min: 10,
    max: 100,
    precision: 0.01,
  }),
  suggestionPercentage: faker.datatype.float({
    min: 10,
    max: 100,
    precision: 0.01,
  }),
  image: faker.image.imageUrl(180, 240, "clothes"),
  favourite: false,
}));

*/

/*

import { faker } from "@faker-js/faker";
import { typeOfData } from "./type";

const brands: string[] = [...Array(10)].map(() => faker.company.name());

export const data: typeOfData[] = [...Array(250)].map(() => ({
  id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
  brandName: brands[faker.helpers.rangeToNumber({ min: 0, max: 9 })],
  price: faker.helpers.rangeToNumber({ min: 300, max: 5000 }),
  discount: faker.helpers.rangeToNumber({ min: 5, max: 40 }),
  rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  noOfRatings: faker.helpers.rangeToNumber({ min: 120, max: 500 }),
  trendingPercentage: faker.datatype.float({
    min: 10,
    max: 100,
    precision: 0.01,
  }),
  suggestionPercentage: faker.datatype.float({
    min: 10,
    max: 100,
    precision: 0.01,
  }),

  // image: faker.image.people(180, 240, true),

  // image: faker.image.url(180,240,true),
  // image : faker.image.url()
  // image: (faker.image.city(180, 240, true) ?| faker.image.people(180, 240, true)),
  image: faker.image.urlLoremFlickr({ category: "clothing" }),
  // faker.image.food(width ?: number = 640, height ?: number = 480, randomize ?: boolean = false) : string,
  // faker.image.food() // 'https://loremflickr.com/640/480/food'
  // faker.image.food(1234, 2345) // 'https://loremflickr.com/1234/2345/food'
  // faker.image.food(1234, 2345, true) // 'https://loremflickr.com/1234/2345/food?lock=56789'
  // favourite: false,
  favourite: true,
}));



/*
import { faker } from "@faker-js/faker";
import { typeOfData } from "./type";

const brands: string[] = [...Array(10)].map(() => faker.company.name());

export const data: typeOfData[] = [...Array(250)].map(() => {
  const categories = ["people", "city", "fashion", "business"];
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomCategoryIndex];

  const imageCategories: Record<string, string[]> = {
    people: ["people.jpg", "people.jpg", "people.jpg"],
    city: ["city.jpg", "city.jpg", "city.jpg"],
    fashion: ["fashion.jpg", "fashion.jpg", "fashion.jpg"],
    business: ["business.jpg", "business.jpg", "business.jpg"],
  };
  const images = imageCategories[randomCategory];
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomImageIndex];

  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    brandName: brands[faker.helpers.rangeToNumber({ min: 0, max: 9 })],
    price: faker.helpers.rangeToNumber({ min: 300, max: 5000 }),
    discount: faker.helpers.rangeToNumber({ min: 5, max: 40 }),
    rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
    noOfRatings: faker.helpers.rangeToNumber({ min: 120, max: 500 }),
    trendingPercentage: faker.datatype.float({
      min: 10,
      max: 100,
      precision: 0.01,
    }),
    suggestionPercentage: faker.datatype.float({
      min: 10,
      max: 100,
      precision: 0.01,
    }),
    image: randomImage,
    favourite: faker.datatype.boolean(),
  };
});

*/