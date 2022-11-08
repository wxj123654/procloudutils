import { isObject } from '../src';
import {expect, test} from '@jest/globals';

test("{} is object",() => {
  expect(isObject({})).toBe(true)
})

test("123 is not object",() => {
  expect(isObject(123)).toBe(false)
})

test("[1,2,3] is object",() => {
  expect(isObject([1,2,3])).toBe(true)
})

test("Function is object",() => {
  expect(isObject(Function)).toBe(true)
})

test("null is object",() => {
  expect(isObject(null)).toBe(false)
})