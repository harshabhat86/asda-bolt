export function precisionRound(number, precision, opts = {}) {
  const { round } = opts
  const factor = 10 ** precision
  if (round === 'down') {
    return Math.floor(number * factor) / factor
  }
  if (round === 'up') {
    return Math.ceil(number * factor) / factor
  }
  return Math.round(number * factor) / factor
}

export function createPriceLabel(price) {
  let transformed = price
  if (typeof price === 'string') {
    transformed = price.replace(/£/g, '')
    transformed = !Number.isNaN(parseFloat(transformed))
      ? precisionRound(parseFloat(transformed), 2) : price
  }
  if (typeof transformed !== 'number') {
    return price
  }

  return `£${precisionRound(transformed, 2).toFixed(2)}`
}

export const priceLabelToNumber = (pricelabel = '') => {
  let price = pricelabel
  if (!price) return 0
  if (typeof price === 'number') return price
  price = price.replace(/[-£,$]/g, '')
  if (price.indexOf('p') > -1) {
    price = price.replace(/p/gi, '')
    price = Math.round(price)
    price = price.length === 1 ? `0${price}` : price
    price = `0.${price}`
  }
  return !Number.isNaN(parseFloat(price)) ? parseFloat(price) : 0
}
