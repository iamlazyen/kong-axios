import { buildURL } from '../../src/helpers/url'

describe('helpers:url', function() {
  describe('buildRUL is ok', function() {
    test('support no params', () => {
      expect(buildURL('/test')).toBe('/test')
    })

    test('support object', () => {
      expect(buildURL('/test', { a: 1, b: 2 })).toBe('/test?a=1&b=2')
    })

    test('support array', () => {
      expect(buildURL('/test', { a: [1, 2] })).toBe('/test?a[]=1&a[]=2')
    })

    test('null and undefined', () => {
      expect(buildURL('/test', { a: null, b: undefined })).toBe('/test')
    })

    test('hash must clear', () => {
      expect(buildURL('/test#abc', { a: 1 })).toBe('/test?a=1')
    })

    test('when has ?', () => {
      expect(buildURL('/test?a=1', { b: 2 })).toBe('/test?a=1&b=2')
    })

    test('support Date', () => {
      const date = new Date()
      expect(buildURL('/test', { a: date })).toBe(
        `/test?a=${date.toISOString()}`
      )
    })
  })
})
