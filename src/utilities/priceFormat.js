const priceFormat = (price) => `${Number.parseFloat(price).toFixed(2).replace(/\./, ",")} $`;

export {
  priceFormat
}