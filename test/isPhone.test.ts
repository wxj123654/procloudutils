import { isPhone } from '../src'
import { expect, test } from '@jest/globals'

test('17764553764 is phone', () => {
  expect(isPhone(17764553764)).toBe(true)
})

test('177645537641 is not phone', () => {
  expect(isPhone(177645537641)).toBe(false)
})

test("'abcas' is not phone", () => {
  expect(isPhone('abcas')).toBe(false)
})
