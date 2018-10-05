import round from 'lodash/round'

export default {
  toCurrency: (amount) => {
    if (!amount || amount === '') { return null }
    if (isNaN(amount)) { return 0.00 }
    if (amount < 0) { return `($${round(amount.replace("-",""), 2).toFixed(2)})` }
    return `$${round(amount, 2).toFixed(2)}`
  },
}
