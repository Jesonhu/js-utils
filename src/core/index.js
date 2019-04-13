// const isStrEmpty = require('./isStrEmpty');
const code = require('./code');
const assets = require('./assets');

// const CONSOLE_STYLE = {
//   notice: "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
//   sucess: "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff"
// }
// console.log('%c 11 %c 22 ', CONSOLE_STYLE.notice, CONSOLE_STYLE.sucess);

const Util = {
  code: code,
  assets: assets,

  /**
   * 判断由对象构成的数组中是否存在重复
   * 
   * @param {array} source 需要判断的源数组
   * @param {object} item 判断的对象
   * @param {string} key 判断对象的`键`
   * @return {boolean} 如果存在重复的返回: `true`, 否则返回：`false`
   * 
   * @example
   * ```
   * const mockArr = [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3}]
   * isRepeat(mockArr, {x: 1, y: 4}, 'x')
   * // => true
   * 
   * isRepeat(mockArr, {x: 5, y: 5}, 'x')
   * // => false
   * 
   * isRepeat(mockArr, {x: 1, y: 4}, 'y')
   * // => false
   * 
   * isRepeat(mockArr, {x: 5, y: 5}, 'y')
   * // => false
   * ```
   */
  isRepeat(source, item, key) {
    if (!Array.isArray(source)) {
      throw Error('isRepeat Arguments[1] Must Be a Array');
      return;
    };
    let _isRepeat = false;
    for (let i = 0, length = source.length; i < length; i++) {
      if (source[i][key] === item[key]) {
        _isRepeat = true;
      }
    }
    return _isRepeat;
  }
}

module.exports = Util;