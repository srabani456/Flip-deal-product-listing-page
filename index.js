let express = require('express');
let { resolve } = require('path');
let cors = require('cors');

let app = express();
app.use(cors());
let port = 3000;

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

//sort by rating high to low
function sortedByRating(products1, products2) {
  return products2.rating - products1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortedByRating);
  res.json(sortedProducts);
});

//sort by price high to low
function sortByPriceHighToLow(products1, products2) {
  return products2.price - products1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByPriceHighToLow);
  res.json(sortedProducts);
});

//sort by price low to high
function sortByPriceLowToHigh(products1, products2) {
  return products1.price - products2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByPriceLowToHigh);
  res.json(sortedProducts);
});

//Filter the products based on the RAM option
function filterByRam(ele, ram) {
  return ele === ram;
}
app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let productsFilterbyRam = products.filter((ele) => filterByRam(ele.ram, ram));
  res.json(productsFilterbyRam);
});

// Filter the products based on the ROM option
function filterByRom(ele, ram) {
  return ele === ram;
}
app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let productsFilterbyRom = products.filter((ele) => filterByRom(ele.rom, rom));
  res.json(productsFilterbyRom);
});
//Filter the products based on the brand option
function filterByBrand(ele, brandName) {
  if (!ele) return false;
  let ele1 = ele.toLowerCase();
  let brand = brandName.toLowerCase();
  return ele1 === brand;
}
app.get('/products/filter/brand', (req, res) => {
  let brandName = req.query.brandName;
  let filterByBrandName = products.filter((ele) =>
    filterByBrand(ele.brand, brandName)
  );
  res.json(filterByBrandName);
});

//filter the products based on the os option
function filterByOs(ele,os) {
  if (!ele) return false;
  let ele1 = ele.toLowerCase();
  let os1 = os.toLowerCase();
  return ele1 === os1;
}
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let filterByOsName = products.filter((ele) =>filterByOs(ele.os,os));
  res.json(filterByOsName);
});

//filter the products based on the price option
function filterByPrice(ele,price) {
  return ele === price;
}
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let filterByPriceName = products.filter((ele) =>filterByPrice(ele.price,price));
  res.json(filterByPriceName);
});

//Send original array of products
app.get('/products',(req,res)=>{
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
