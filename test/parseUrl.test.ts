import { urlParse } from "../src";
import {expect, test} from '@jest/globals';

test("urlParse test1",() => {
  expect(urlParse("https://example.com?code=1&name=zhangsan")).toEqual({code: "1",name: 'zhangsan'})
})

test("urlParse test2",() => {
  expect(urlParse("https://example.c")).toEqual({})
})