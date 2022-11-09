import {
  isEmpty,
  isDef,
  isUnDef,
  isNull,
  isDate,
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
} from '../src'
import { expect, test } from '@jest/globals'

test('[] is empty', () => {
  expect(isEmpty([])).toBe(true)
})

test('[1] is not empty', () => {
  expect(isEmpty([1])).toBe(false)
})

test('{} is not empty', () => {
  expect(isEmpty({})).toBe(true)
})

test('{1:2} is not empty', () => {
  expect(isEmpty({ 1: 2 })).toBe(false)
})

const map = new Map()
map.set('1', '2')
test('map is not empty', () => {
  expect(isEmpty(map)).toBe(false)
})

const map2 = new Map()
test('map is empty', () => {
  expect(isEmpty(map2)).toBe(true)
})

const set = new Set()
test('set is empty', () => {
  expect(isEmpty(set)).toBe(true)
})

const set2 = new Set()
set2.add(1)
test('set2 is empty', () => {
  expect(isEmpty(set2)).toBe(false)
})
let a: string
test('a is undefined', () => {
  expect(isDef<string>(a)).toBe(false)
})
const b = '123'
test('b is defined', () => {
  expect(isDef<string>(b)).toBe(true)
})

const c = '123'
test('c is not undefined', () => {
  expect(isUnDef<string>(c)).toBe(false)
})

let d: string
test('d is undefined', () => {
  expect(isUnDef<string>(d)).toBe(true)
})

test('null is null', () => {
  expect(isNull(null)).toBe(true)
})

test('{} is not null', () => {
  expect(isNull({})).toBe(false)
})

test('{} is not Date', () => {
  expect(isDate({})).toBe(false)
})

test('new Date() is Date', () => {
  expect(isDate(new Date())).toBe(true)
})

test('null is isNullOrUnDef', () => {
  expect(isNullOrUnDef(null)).toBe(true)
})

test('undefined is isNullOrUnDef', () => {
  expect(isNullOrUnDef(undefined)).toBe(true)
})

test('{} is not isNullOrUnDef', () => {
  expect(isNullOrUnDef({})).toBe(false)
})

test('1 is Number', () => {
  expect(isNumber(1)).toBe(true)
})

test('{} is not Number', () => {
  expect(isNumber({})).toBe(false)
})
const p = new Promise<number>(resolve => {
  resolve(1)
})

test('new Promise() is Promise ', () => {
  expect(isPromise<number>(p)).toBe(true)
})

test('{} is not Promise ', () => {
  expect(isPromise({})).toBe(false)
})

test('"1231233" is string', () => {
  expect(isString('1231233')).toBe(true)
})

test('1231233 is not string', () => {
  expect(isString(1231233)).toBe(false)
})

test('NaN is not string', () => {
  expect(isString(NaN)).toBe(false)
})

function fn() {
  console.log('fn')
}
test('fn is Function', () => {
  expect(isFunction(fn)).toBe(true)
})

const arrayFn = () => {
  return 1
}
test('arrayFn is Function', () => {
  expect(isFunction(arrayFn)).toBe(true)
})

test('{} is not Function', () => {
  expect(isFunction({})).toBe(false)
})

test('true is Boolean', () => {
  expect(isBoolean(true)).toBe(true)
})

test('false is Boolean', () => {
  expect(isBoolean(false)).toBe(true)
})

test('"" is not Boolean', () => {
  expect(isBoolean('')).toBe(false)
})

test('/1/ is RegExp', () => {
  expect(isRegExp(/1/)).toBe(true)
})

test('"" is not RegExp', () => {
  expect(isBoolean('')).toBe(false)
})

test('[] is Array', () => {
  expect(isArray([])).toBe(true)
})

test('"" is not Array', () => {
  expect(isArray('')).toBe(false)
})
const m1 = new Map()
test('m1 is Map', () => {
  expect(isMap(m1)).toBe(true)
})

test('{} is not Map', () => {
  expect(isMap({})).toBe(false)
})

test('test env is not server', () => {
  expect(isServer).toBe(true)
})

test('test env is not client', () => {
  expect(isClient).toBe(false)
})

test('https://www.baidu.com/# is url', () => {
  expect(isUrl('https://www.baidu.com/#')).toBe(true)
})

test('https://ww is url', () => {
  expect(isUrl('https://ww')).toBe(false)
})

test('ftp://ww is not url', () => {
  expect(isUrl('ftp://ww')).toBe(false)
})
test('null is falsey', () => {
  expect(isFalsey(null)).toBe(true)
})

test('undefined is falsey', () => {
  expect(isFalsey(undefined)).toBe(true)
})
test('false is falsey', () => {
  expect(isFalsey(false)).toBe(true)
})

test('0 is falsey', () => {
  expect(isFalsey(0)).toBe(true)
})

test('NaN is falsey', () => {
  expect(isFalsey(NaN)).toBe(true)
})

test('"" is falsey', () => {
  expect(isFalsey('')).toBe(true)
})

test('1 is not falsey', () => {
  expect(isFalsey(1)).toBe(false)
})
