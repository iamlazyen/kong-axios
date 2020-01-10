import { isDate, isObject } from '../../src/helpers'

describe('helpers:index', () => {
  describe('type jude is ok', function() {
    test('isDate is ok', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate({})).toBeFalsy()
      expect(isDate(Date.now())).toBeFalsy()
    })

    test('isObject is ok', () => {
      expect(isObject({})).toBeTruthy()
      expect(isObject(new Date())).toBeFalsy()
      expect(isObject(null)).toBeFalsy()
    })
  })
})
