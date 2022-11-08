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
export { isObject, isPhone, urlParse, timezoneToDate, isEmail }
