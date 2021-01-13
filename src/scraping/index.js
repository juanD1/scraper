const puppeteer = require("puppeteer");
const {
  getName,
  getPrice,
  getQuantity,
  getImg,
  getIsAvailable,
  getAllImages,
} = require("./utils");

async function configureBrowser(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

async function getProductInfo(page) {
  const name = await getName(page);
  const price = await getPrice(page);
  const quantity = await getQuantity(page);
  const img = await getImg(page);
  const allImages = await getAllImages(page);
  const isAvailable = getIsAvailable(price, quantity);

  return { name, price, quantity, img, allImages, isAvailable };
}

async function startTracking(url) {
  const page = await configureBrowser(url);
  const product = await getProductInfo(page);
  return product;
}

module.exports = startTracking;
