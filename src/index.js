// import EventDispatcher from './must';
const Date = require('./date');

// 期待使用方式
// 浏览器中：
// new window.cTools.Time() // 返回实际处理类

/**
 * `JavaScript` 常用工具集合
 */
const cTools = {
  Date: Date
}


// 导出处理
// ??? webpack 浏览器环境不执行
// @see [jQuery方式](https://gitee.com/weblife/jquery-code-understand/blob/master/src/slim/01_%E6%A8%A1%E5%9D%97%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%BC%E5%87%BA%E5%A4%84%E7%90%86.js)
// 支持 CommonJS 方式导出
// if (typeof module === 'object' && typeof module.exports === 'object') {
//   module.exports = cTools;
// } else { // 浏览器环境
//   window.cTools = cTools;
// }

window.cTools = cTools;