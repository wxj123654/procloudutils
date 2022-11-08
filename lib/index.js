(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

  /*
  * isObject({})
  * // => true
  *
  * isObject([1, 2, 3])
  * // => true
  *
  * isObject(Function)
  * // => true
  *
  * isObject(null)
  * // => false
  */
  function isObject(value) {
      const type = typeof value;
      return value != null && (type === 'object' || type === 'function');
  }

  /**
   * 验证手机号码
   * phone 手机号
  */
  function isPhone(phone) {
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg.test(String(phone))) {
          return true;
      }
      else {
          return false;
      }
  }

  /**
   * 解析url参数
   * @example ?id=12345&a=b
   * @return Object {id:12345,a:b}
   */
  function urlParse(url) {
      let obj = {};
      let reg = /[?&][^?&]+=[^?&]+/g;
      let arr = url.match(reg);
      if (arr) {
          arr.forEach((item) => {
              let tempArr = item.substring(1).split("=");
              let key = decodeURIComponent(tempArr[0]);
              let val = decodeURIComponent(tempArr.splice(1).join("="));
              obj[key] = val;
          });
      }
      return obj;
  }

  /**
   * 处理unix时间戳，转换为可阅读时间格式
   */
  function timezoneToDate(timezone, format) {
      let _format = format || "yyyy-MM-dd hh:mm:ss";
      let _timezone = String(timezone).length === 10 ? timezone * 1000 : timezone;
      const d = new Date(_timezone);
      const o = {
          "M+": d.getMonth() + 1,
          "d+": d.getDate(),
          "h+": d.getHours(),
          "m+": d.getMinutes(),
          "s+": d.getSeconds(),
          "q+": Math.floor((d.getMonth() + 3) / 3),
          "S": d.getMilliseconds(),
      };
      if (/(y+)/.test(_format))
          _format = _format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (const k in o)
          if (new RegExp("(" + k + ")").test(_format))
              _format = _format.replace(RegExp.$1, RegExp.$1.length === 1 ? String(o[k]) : ("00" + o[k]).substr(("" + o[k]).length));
      return _format;
  }

  // 电子邮箱
  const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  function isEmail(value) {
      return email.test(value);
  }

  exports.isEmail = isEmail;
  exports.isObject = isObject;
  exports.isPhone = isPhone;
  exports.timezoneToDate = timezoneToDate;
  exports.urlParse = urlParse;

}));
