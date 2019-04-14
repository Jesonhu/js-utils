import Core from './Core/index';
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
    static core: typeof Core;
    /**
     * 资源相关的处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    static assets: {
        addBatchBaseUrl: typeof import("./assets").addBatchBaseUrl;
        addBaseUrl: typeof import("./assets").addBaseUrl;
        getImgNearColor: typeof import("./assets").getImgNearColor;
        addRichTextImgUrl: typeof import("./assets").addRichTextImgUrl;
    };
    /**
     * 编码相关处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    static code: typeof Code;
    /**
     * isFn 方法功能集.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    static isUtils: typeof IsUtils;
    /** 插件集合 */
    static plugins: typeof Plugins;
}
