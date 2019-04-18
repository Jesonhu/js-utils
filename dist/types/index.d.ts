import Core from './Core/index';
import { Assets } from './assets';
import Code from './Code';
import IsUtils from './IsUtis/index';
import Format from './Format';
import Plugins from './plugins/index';
/**
 * 常用工具合集.
 */
declare const jsUtilsHelper: {
    /**
     * 核心功能.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    core: typeof Core;
    /**
     * 资源相关的处理.
     */
    assets: typeof Assets;
    /**
     * 编码相关处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    code: typeof Code;
    /**
     * isFn 方法功能集.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    isUtils: typeof IsUtils;
    /** 格式化 */
    fromat: typeof Format;
    /** 插件集合 */
    plugins: typeof Plugins;
};
export default jsUtilsHelper;
