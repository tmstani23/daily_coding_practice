/*
 * You get an array of product objects. Each one looks like:
 *   { name: 'Mug', priceCents: 1250 }
 *
 * Produce the price of each product in dollars, in the same order as the input.
 *
 * pricesInDollars([{ name: 'Mug', priceCents: 1250 }, { name: 'Pen', priceCents: 999 }])
 *   -> [12.5, 9.99]
 * pricesInDollars([{ name: 'Hat', priceCents: 500 }]) -> [5]
 * pricesInDollars([]) -> []
 *
 * The input array and the objects in it must come out unchanged.
 */

function pricesInDollars(products) {
  return products.map((product) => {
    let price = product.priceCents / 100;

    return price;
  });
}

module.exports = pricesInDollars;

console.log(
  pricesInDollars([
    { name: "Mug", priceCents: 1250 },
    { name: "Pen", priceCents: 999 },
  ]),
); // [12.5, 9.99]
