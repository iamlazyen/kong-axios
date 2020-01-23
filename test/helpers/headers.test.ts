import {
  parseHeaders,
  transformRequestHeaders
} from '../../src/helpers/headers'

describe('headers', function() {
  describe('headers:transformRequestHeaders', function() {
    const headers = {}
    test('normalizeHeaders is Ok', () => {
      expect(transformRequestHeaders({ a: 1 }, headers)).toEqual({
        'Content-type': 'application/json;charset=utf-8'
      })
    })
  })

  describe('headers: parseHeaders', function() {
    test('should parse headers', () => {
      const parsed = parseHeaders(
        'Content-Type: application/json\r\n' +
          'Connection: keep-alive\r\n' +
          'Transfer-Encoding: chunked\r\n' +
          'Date: Tue, 21 May 2019 09:23:44 GMT\r\n' +
          ':aa\r\n' +
          'key:'
      )
      expect(parsed['content-type']).toBe('application/json')
      expect(parsed['connection']).toBe('keep-alive')
    })

    test('parse headers is empty', () => {
      expect(parseHeaders('')).toEqual({})
    })
  })
})
