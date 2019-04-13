import assets from './assets/index';
import core from './core/index';
import Code from './Code';
/**
 * 常用工具合集.
 */
var JsUtilsHelper = /** @class */ (function () {
    function JsUtilsHelper() {
    }
    /**
     * 核心功能.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    JsUtilsHelper.core = core;
    /**
     * 资源相关的处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    JsUtilsHelper.assets = assets;
    /**
     * 编码相关处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    JsUtilsHelper.code = Code;
    return JsUtilsHelper;
}());
export default JsUtilsHelper;
