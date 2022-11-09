import { isHexColor, hexToRGB, rgbToHex } from '../src'
import { expect, test } from '@jest/globals'

test('#ff0000 is hexColor', () => {
  expect(isHexColor('#ff0000')).toBe(true)
})

test('#ff00000 is not hexColor', () => {
  expect(isHexColor('#ff00000')).toBe(false)
})

test('#ff0000 to rgbColor', () => {
  expect(hexToRGB('#ff0000')).toBe('RGB(255,0,0)')
})

test('RGB255,0,0) to hexColor', () => {
  expect(rgbToHex(255, 0, 0)).toBe('#ff0000')
})
