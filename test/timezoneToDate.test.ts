import { timezoneToDate } from "../src";
import {expect, test} from '@jest/globals';

test("unixToDate test1",() => {
  const time = new Date()
  time.setFullYear(2022)
  time.setMonth(10) // 月份从0开始
  time.setDate(8)
  time.setHours(13)
  time.setMinutes(50)
  time.setSeconds(20)
  expect(timezoneToDate(time.getTime())).toBe("2022-11-08 13:50:20")
})