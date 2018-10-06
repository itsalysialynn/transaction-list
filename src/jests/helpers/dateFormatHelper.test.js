import dateFormatHelper from '../../helpers/dateFormatHelper'

/* global describe, it, expect */

describe('dateFormatHelper', () => {
  const date = '2017-08-28T17:35:00.000-07:00'

  describe('default', () => {
    it('should display a MMM Do, YYYY format', () => {
      expect(dateFormatHelper.default(date)).toEqual('Aug 28th, 2017')
    })
  })
})
