import numberConversionHelper from '../../helpers/numberConversionHelper'

describe('numberConversionHelper', () => {
  describe('toCurrency', () => {
    it('should ignore nulls', () => {
      expect(numberConversionHelper.toCurrency(null)).toEqual(null)
    })

    it('should interpret NaN as zero', () => {
      expect(numberConversionHelper.toCurrency('asdf')).toEqual(0)
    })

    it('should round numbers', () => {
      expect(numberConversionHelper.toCurrency('1234.5678')).toEqual('$1234.57')
    })

    it('should remove dashes and format in negative numbers', () => {
      expect(numberConversionHelper.toCurrency('-16372.63')).toEqual('($16372.63)')
    })

    it('should format in positive numbers', () => {
      expect(numberConversionHelper.toCurrency('89.45')).toEqual('$89.45')
    })
  })
})

