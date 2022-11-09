;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.index = {})))
})(this, function (exports) {
  'use strict'

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
  function isObject$1(value) {
    const type = typeof value
    return value != null && (type === 'object' || type === 'function')
  }

  /**
   * 验证手机号码
   * phone 手机号
   */
  function isPhone(phone) {
    const reg = /^1(3|4|5|6|7|8|9)\d{9}$/
    if (reg.test(String(phone))) {
      return true
    } else {
      return false
    }
  }

  /**
   * 解析url参数
   * @example ?id=12345&a=b
   * @return Object {id:12345,a:b}
   */
  function urlParse(url) {
    const obj = {}
    const reg = /[?&][^?&]+=[^?&]+/g
    const arr = url.match(reg)
    if (arr) {
      arr.forEach(item => {
        const tempArr = item.substring(1).split('=')
        const key = decodeURIComponent(tempArr[0])
        const val = decodeURIComponent(tempArr.splice(1).join('='))
        obj[key] = val
      })
    }
    return obj
  }

  /**
   * 处理unix时间戳，转换为可阅读时间格式
   */
  function timezoneToDate(timezone, format) {
    let _format = format || 'yyyy-MM-dd hh:mm:ss'
    const _timezone =
      String(timezone).length === 10 ? timezone * 1000 : timezone
    const d = new Date(_timezone)
    const o = {
      'M+': d.getMonth() + 1,
      'd+': d.getDate(),
      'h+': d.getHours(),
      'm+': d.getMinutes(),
      's+': d.getSeconds(),
      'q+': Math.floor((d.getMonth() + 3) / 3),
      S: d.getMilliseconds()
    }
    if (/(y+)/.test(_format))
      _format = _format.replace(
        RegExp.$1,
        (d.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    for (const k in o)
      if (new RegExp('(' + k + ')').test(_format))
        _format = _format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? String(o[k])
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
    return _format
  }

  // 电子邮箱
  const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  function isEmail(value) {
    return email.test(value)
  }

  /**
   * 判断是否 十六进制颜色值.
   * 输入形式可为 #fff000 #f00
   *
   * @param   String  color   十六进制颜色值
   * @return  Boolean
   */
  function isHexColor(color) {
    const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/
    return reg.test(color)
  }
  /**
   * RGB 颜色值转换为 十六进制颜色值.
   * r, g, 和 b 需要在 [0, 255] 范围内
   *
   * @return  String          类似#ff00ff
   * @param r
   * @param g
   * @param b
   */
  function rgbToHex(r, g, b) {
    // tslint:disable-next-line:no-bitwise
    const hex = ((r << 16) | (g << 8) | b).toString(16)
    return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
  }
  /**
   * Transform a HEX color to its RGB representation
   * @param {string} hex The color to transform
   * @returns The RGB representation of the passed color
   */
  function hexToRGB(hex) {
    let sHex = hex.toLowerCase()
    if (isHexColor(hex)) {
      if (sHex.length === 4) {
        let sColorNew = '#'
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1))
        }
        sHex = sColorNew
      }
      const sColorChange = []
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)))
      }
      return 'RGB(' + sColorChange.join(',') + ')'
    }
    return sHex
  }

  const toString = Object.prototype.toString
  function is(val, type) {
    return toString.call(val) === `[object ${type}]`
  }
  function isDef(val) {
    return typeof val !== 'undefined'
  }
  function isUnDef(val) {
    return !isDef(val)
  }
  function isObject(val) {
    return val !== null && is(val, 'Object')
  }
  function isEmpty(val) {
    if (isArray(val) || isString(val)) {
      return val.length === 0
    }
    if (val instanceof Map || val instanceof Set) {
      return val.size === 0
    }
    if (isObject(val)) {
      return Object.keys(val).length === 0
    }
    return false
  }
  function isDate(val) {
    return is(val, 'Date')
  }
  function isNull(val) {
    return val === null
  }
  // export function isNullAndUnDef(val: unknown): val is null | undefined {
  //   return isUnDef(val) && isNull(val)
  // }
  function isNullOrUnDef(val) {
    return isUnDef(val) || isNull(val)
  }
  function isNumber(val) {
    return is(val, 'Number')
  }
  function isPromise(val) {
    return (
      is(val, 'Promise') &&
      // isObject(val) &&
      isFunction(val.then) &&
      isFunction(val.catch)
    )
  }
  function isString(val) {
    return is(val, 'String')
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  function isFunction(val) {
    return typeof val === 'function'
  }
  function isBoolean(val) {
    return is(val, 'Boolean')
  }
  function isRegExp(val) {
    return is(val, 'RegExp')
  }
  function isArray(val) {
    return val !== undefined && Array.isArray(val)
  }
  // export function isWindow(val: any): val is Window {
  //   return typeof window !== 'undefined' && is(val, 'Window')
  // }
  // export function isElement(val: unknown): val is Element {
  //   return isObject(val) && !!val.tagName
  // }
  function isMap(val) {
    return is(val, 'Map')
  }
  const isServer = typeof window === 'undefined'
  const isClient = !isServer
  function isUrl(path) {
    const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/
    return reg.test(path)
  }
  const falsey = [null, undefined, false, 0, NaN, '']
  function isFalsey(value) {
    return (
      falsey.filter(item => item === value).length > 0 || Number.isNaN(value)
    )
  }

  exports.hexToRGB = hexToRGB
  exports.is = is
  exports.isArray = isArray
  exports.isBoolean = isBoolean
  exports.isClient = isClient
  exports.isDate = isDate
  exports.isDef = isDef
  exports.isEmail = isEmail
  exports.isEmpty = isEmpty
  exports.isFalsey = isFalsey
  exports.isFunction = isFunction
  exports.isHexColor = isHexColor
  exports.isMap = isMap
  exports.isNull = isNull
  exports.isNullOrUnDef = isNullOrUnDef
  exports.isNumber = isNumber
  exports.isObject = isObject$1
  exports.isPhone = isPhone
  exports.isPromise = isPromise
  exports.isRegExp = isRegExp
  exports.isServer = isServer
  exports.isString = isString
  exports.isUnDef = isUnDef
  exports.isUrl = isUrl
  exports.rgbToHex = rgbToHex
  exports.timezoneToDate = timezoneToDate
  exports.urlParse = urlParse
})
