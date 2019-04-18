import Core from './Core/index';

import assets, { Assets } from './assets';
import Code from './Code';
import IsUtils from './IsUtis/index';
import Format from './Format';
import Plugins from './plugins/index';

/**
 * 常用工具合集.
 */
const  jsUtilsHelper = {
  /**
   * 核心功能.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  core: Core,

  /**
   * 资源相关的处理.
   */
  assets: Assets,

  /**
   * 编码相关处理.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  code: Code,

  /**
   * isFn 方法功能集.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  isUtils: IsUtils,


  /** 格式化 */
  fromat: Format,

  /** 插件集合 */
  plugins: Plugins,
  
}

console.log('对象吗', jsUtilsHelper);

// 打包处理 start ====================
(function webpackUniversalModuleDefinition(root: any, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof exports === 'object')
		exports["jsUtilsHelper"] = factory();
	else
		root["jsUtilsHelper"] = factory();
})(global, function() {
  return jsUtilsHelper;
})
// 打包处理 end ====================

export default jsUtilsHelper;



