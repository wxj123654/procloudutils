import { isEmail } from '../src';
import {expect, test} from '@jest/globals';

test("1942584650@qq.com is email",() => {
  expect(isEmail("1942584650@qq.com")).toBe(true)
})

test("1942584650@qq is not email",() => {
  expect(isEmail("1942584650@qq")).toBe(false)
})

