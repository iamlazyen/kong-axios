import { transformRequestData } from '../../src/helpers/data'

describe('data', function() {
  describe('data:transformRequestData', function() {
    test('Data is String', () => {
      expect(transformRequestData({ a: 1 })).toBe('{"a":1}')
    })
    test('data is String', () => {
      expect(transformRequestData('a=1')).toBe('a=1')
    })
  })
})
