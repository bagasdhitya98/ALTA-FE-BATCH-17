const priceCheck = (
  products: string[],
  productPrices: number[],
  productSold: string[],
  soldPrice: number[]
): number => {
  const priceMap: { [key: string]: number } = {};

  for (let i = 0; i < products.length; i++) {
    priceMap[products[i]] = productPrices[i];
  }

  let errorCount = 0;

  for (let j = 0; j < productSold.length; j++) {
    const product = productSold[j];
    const expectedPrice = priceMap[product];

    if (expectedPrice !== undefined && expectedPrice !== soldPrice[j]) {
      errorCount++;
    }
  }

  return errorCount;
};

const products: string[] = ["eggs", "milk", "cheese"];
const productPrices: number[] = [2.89, 3.29, 5.79];
const productSold: string[] = ["eggs", "eggs", "cheese", "milk"];
const soldPrice: number[] = [2.89, 2.99, 5.97, 3.29];

const errors: number = priceCheck(
  products,
  productPrices,
  productSold,
  soldPrice
);
console.log("There are", errors, "errors in pricing.");
