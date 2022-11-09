/*
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
declare function isObject(value: any): boolean
/**
 * 验证手机号码
 * phone 手机号
 */
declare function isPhone(phone: number | string): boolean
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
declare function urlParse(url: string): {
  [x: string]: string
}
/**
 * 处理unix时间戳，转换为可阅读时间格式
 */
declare function timezoneToDate(timezone: number, format?: string): string
declare function isEmail(value: string): boolean
/**
 * 判断是否 十六进制颜色值.
 * 输入形式可为 #fff000 #f00
 *
 * @param   String  color   十六进制颜色值
 * @return  Boolean
 */
declare function isHexColor(color: string): boolean
/**
 * RGB 颜色值转换为 十六进制颜色值.
 * r, g, 和 b 需要在 [0, 255] 范围内
 *
 * @return  String          类似#ff00ff
 * @param r
 * @param g
 * @param b
 */
declare function rgbToHex(r: number, g: number, b: number): string
/**
 * Transform a HEX color to its RGB representation
 * @param {string} hex The color to transform
 * @returns The RGB representation of the passed color
 */
declare function hexToRGB(hex: string): string
declare function is(val: unknown, type: string): boolean
declare function isDef<T = unknown>(val?: T): val is T
declare function isUnDef<T = unknown>(val?: T): val is T
declare function isEmpty<T = unknown>(val: T): val is T
declare function isDate(val: unknown): val is Date
declare function isNull(val: unknown): val is null
// export function isNullAndUnDef(val: unknown): val is null | undefined {
//   return isUnDef(val) && isNull(val)
// }
declare function isNullOrUnDef(val: unknown): val is null | undefined
declare function isNumber(val: unknown): val is number
declare function isPromise<T = unknown>(val: unknown): val is Promise<T>
declare function isString(val: unknown): val is string
// eslint-disable-next-line @typescript-eslint/ban-types
declare function isFunction(val: unknown): val is Function
declare function isBoolean(val: unknown): val is boolean
declare function isRegExp(val: unknown): val is RegExp
declare function isArray(val: any): val is Array<any>
// export function isWindow(val: any): val is Window {
//   return typeof window !== 'undefined' && is(val, 'Window')
// }
// export function isElement(val: unknown): val is Element {
//   return isObject(val) && !!val.tagName
// }
declare function isMap(val: unknown): val is Map<any, any>
declare const isServer: boolean
declare const isClient: boolean
declare function isUrl(path: string): boolean
declare function isFalsey(value: unknown): boolean
export {
  isObject,
  isPhone,
  urlParse,
  timezoneToDate,
  isEmail,
  isHexColor,
  rgbToHex,
  hexToRGB,
  is,
  isDef,
  isUnDef,
  isEmpty,
  isDate,
  isNull,
  isNullOrUnDef,
  isNumber,
  isPromise,
  isString,
  isFunction,
  isBoolean,
  isRegExp,
  isArray,
  isMap,
  isServer,
  isClient,
  isUrl,
  isFalsey
}
