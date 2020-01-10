export function isObject(val: any): val is Object {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}
