import Core from './Core/index';

import assets from './assets';
import Code from './Code';
import IsUtils from './IsUtis/index';
import Plugins from './plugins/index';

/**
 * 常用工具合集.
 */
export default class JsUtilsHelper {
  /**
   * 核心功能.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  static core = Core

  /**
   * 资源相关的处理.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  static assets = assets

  /**
   * 编码相关处理.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  static code = Code

  /**
   * isFn 方法功能集.
   *
   * @static
   * @memberof JsUtilsHelper
   */
  static isUtils = IsUtils

  /** 插件集合 */
  static plugins = Plugins
}

// 打包处理 start ====================
(function webpackUniversalModuleDefinition(root: any, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof exports === 'object')
		exports["jsUtilsHelper"] = factory();
	else
		root["jsUtilsHelper"] = factory();
})(window, function() {
  return JsUtilsHelper;
})
// 打包处理 end ====================