import {
  transformRequestData,
  transformResponseData
} from '../../src/helpers/data'

describe('data', function() {
  describe('data:transformRequestData', function() {
    test('Data is String', () => {
      expect(transformRequestData({ a: 1 })).toBe('{"a":1}')
    })
    test('data is String', () => {
      expect(transformRequestData('a=1')).toBe('a=1')
    })
  })

  describe('data: transformResponseData', function() {
    test('data has transform', () => {
      let aStr = '{"a": 2}'
      expect(transformResponseData(aStr)).toEqual({ a: 2 })
    })
  })
})
