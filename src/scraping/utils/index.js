async function getName(page) {
  const name = await page.evaluate(() => {
    const element = document.getElementById("productTitle").innerHTML;
    const name = element.replace(/(\r\n|\n|\r)/gm, "");
    return name;
  });
  return name;
}

async function getPrice(page) {
  const price = await page.evaluate(() => {
    const element = document.getElementById("priceblock_ourprice");
    if (element) {
      const currentPrice = Number(element.innerHTML.replace(/[^0-9.-]+/g, ""));
      return currentPrice;
    }
    return undefined;
  });
  return price;
}

async function getQuantity(page) {
  const quantity = await page.evaluate(() => {
    const element = document.getElementById("quantity");
    const quantity = element ? element.options.length : undefined;
    return quantity;
  });
  return quantity;
}

async function getImg(page) {
  const img = await page.evaluate(() => {
    const img = document.getElementById("landingImage");
    const src = img.currentSrc;
    return src;
  });
  return img;
}

function getIsAvailable(price, quantity) {
  if (price && quantity) return true;
  return false;
}

async function getAllImages(page) {
  const allImages = await page.evaluate(() => {
    const containerImgs = document.getElementById("altImages");
    const arrayElementImgs = containerImgs.querySelectorAll("img");

    const allImges = [];
    for (let lement of arrayElementImgs) {
      allImges.push(lement.currentSrc);
    }
    const allLinksImages = allImges.slice(1, allImges.length);

    return allLinksImages;
  });
  return allImages;
}

// async function getIsFreeShipping(page) {
//   const isFreeShipping = await page.evaluate(() => {
//     const element = document.querySelectorAll(
//       "#exports_desktop_qualifiedBuybox_tlc_feature_div span"
//     )[0];
//     const isFreeShipping = element.innerText.includes("GRATIS");
//     return isFreeShipping;
//   });
//   return isFreeShipping;
// }

module.exports = {
  getName,
  getPrice,
  getQuantity,
  getImg,
  getIsAvailable,
  getAllImages,
};
