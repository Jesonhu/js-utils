import assets from './assets/index';
import core from './core/index';
import Code from './Code';

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
  static core = core

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
}