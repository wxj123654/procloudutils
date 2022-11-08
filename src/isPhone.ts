/**
 * 验证手机号码
 * phone 手机号
 */
export function isPhone(phone: number | string) {
  const reg = /^1(3|4|5|6|7|8|9)\d{9}$/
  if (reg.test(String(phone))) {
    return true
  } else {
    return false
  }
}
