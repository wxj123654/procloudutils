/**
 * 处理unix时间戳，转换为可阅读时间格式
 */

export function timezoneToDate(timezone: number, format?: string) {
  let _format = format || 'yyyy-MM-dd hh:mm:ss'
  const _timezone = String(timezone).length === 10 ? timezone * 1000 : timezone
  const d = new Date(_timezone)
  const o: { [key in string]: number } = {
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
