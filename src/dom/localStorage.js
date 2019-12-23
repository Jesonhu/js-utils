const _ = require('lodash');

const LOG_STYLE = {
  success: 'background:green;color:#fff;padding: 0px 10px; border-radius:3px;',
  info: 'background:#EA980A;color:#fff;padding: 0px 10px; border-radius:3px;'
}

/**
 * 本地存储功能封装.
 * 
 * @attr {Fn} getLocal 获取本地存储的值
 * @attr {Fn} setLocal 设置本地存储的值
 * @attr {Fn} removeLocal 删除本地存储的某个值
 * 
 * @desc [只能保存为字符串类型的值](https://blog.csdn.net/weixin_40279966/article/details/79176520)
 */
const STORAGE_USER_KEY = 'USER_INFO'

// @see [MDN-localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
const localStorage = {
  /**
   * 设置指定键的本地存储值.
   * 
   * @param {string} key 本地存储的键
   * @param {any} res 键对应的值
   * @param {[boolean]} isSaveOldData 可选，判断是增加值还是替换为新的值(false：替换)
   * 
   * @desc 没有第三个参数或者第三个参数为false,则覆盖本地存储的该条记录
   * @desc 第三个参数为true,则添加一个字段进去
   */
  setLocal (key, value, isAddData = false) {

    // 使用默认的键 `USER_INFO`
    // `key` 为`字符串`并且非``的时候才使用参数`key`
    if (typeof key !== 'string' || key.length === 0) {
      key = STORAGE_USER_KEY;
    }
    
    // 增加或者内容替换为新的值
    // 如果`value`值为对象，判断是增加值还是替换值
    // 如果`value`不为对象，就替换为新的值
    if (isAddData) {
      let oldDataStr = this.getLocal(key);

      // `value`是对象
      if (_.isObject(value)) {
        let newObj = {};
        const oldValueJson = JSON.parse(oldDataStr);
        // @see [Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        Object.assign(newObj, oldValueJson, value);
        window.localStorage.setItem(key, JSON.stringify(newObj));
      } else {
        window.localStorage.setItem(key, value);
      }
      // @see [console.log 设置样式](https://www.jianshu.com/p/71a44ddf438e)
      console.log('%c set local opeartion', LOG_STYLE.success);
      return;
    }

    // `value`是对象
    if (_.isObject(value)) {
      // window.localStorage.setItem('tom', {name: 'tom'});
      // 如果值为`对象`, `setItem()`会自动处理，值为`[object Object]`
      // 需要将对象先转为字符串
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
    console.log('%c set local opeartion', LOG_STYLE.success);
  },

  /**
   * 获取键对应的本地存储值.
   * 
   * @param {string} key 如果不填此参数，默认获取 `STORAGE_USER_KEY` 的值
   * @return {string} 返回键对应的值类型永远为字符串
   * 
   * @see https://blog.csdn.net/weixin_40279966/article/details/79176520
   * @desc 由于存储的时候都会存储为`字符串`类型的值，这里获取的值也全部为`字符串`类型的值
   */
  getLocal (key = STORAGE_USER_KEY) {
    console.log('%c get local opeartion', LOG_STYLE.success);
    /** 键对应的值 */
    const value = window.localStorage.getItem(key);
    return value;
  },

  /**
   * 清除指定键的本地存储的值
   * 
   * @param {[string]} key 可选，默认本地存储的键 'USER_INFO'
   */
  removeLocal (key = STORAGE_USER_KEY) {
    if (_.isString(key)) {
      window.localStorage.removeItem(key);
    } else {
      console.log('%c key must be a string', LOG_STYLE.success);
      return;
    }
    console.log('%c remove local opeartion', LOG_STYLE.success);
  }
}

module.exports = localStorage;