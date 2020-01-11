import { transformRequestHeaders } from '../../src/helpers/headers'

describe('headers', function() {
  describe('headers:transformRequestHeaders', function() {
    const headers = {}
    test('normalizeHeaders is Ok', () => {
      expect(transformRequestHeaders({ a: 1 }, headers)).toEqual({
        'Content-type': 'application/json;charset=utf-8'
      })
    })
  })
})
