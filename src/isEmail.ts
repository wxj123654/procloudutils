// 电子邮箱
const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export function isEmail(value: string) {
  return email.test(value)
}
