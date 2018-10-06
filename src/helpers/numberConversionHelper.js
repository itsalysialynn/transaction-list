import round from 'lodash/round'

const addCommas = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default {
  toCurrency: (amount) => {
    if (!amount || amount === '') { return null }
    if (isNaN(amount)) { return 0.00 }
    if (amount < 0) { return `($${addCommas(round(amount, 2).toFixed(2).replace('-',''))})` }
    return `$${addCommas(round(amount, 2).toFixed(2))}`
  },
}
