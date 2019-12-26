import Core from './core/index';
import assets, { Assets } from './string/assets';
import Code from './string/Code';
import IsUtils from './boolean/index';
import Format from './number/Format';
import Plugins from './plugins/index';

// 打包处理 start ====================
(function webpackUniversalModuleDefinition(root: any, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof exports === 'object')
		exports["feHelper"] = factory();
	else
		root["feHelper"] = factory();
})(global, function() {

  const  feHelper = {

    // ================================================================================
  // 核心功能.
  // ================================================================================

    core: Core,

    SimpleEventEmitter: Core.SimpleEventEmitter,

    /**
     * 资源相关的处理.
     */
    assets: Assets,

    /**
     * 编码相关处理.
     *
     * @static
     * @memberof feHelper
     */
    code: Code,

    /**
     * isFn 方法功能集.
     *
     * @static
     * @memberof feHelper
     */
    isUtils: IsUtils,


    /** 格式化 */
    fromat: Format,

    /** 插件集合 */
    plugins: Plugins,
    
  }
  return feHelper;
})
// 打包处理 end ====================

export default feHelper;



