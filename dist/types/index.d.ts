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
    static core: {
        coreError: typeof import("./core/error").default;
    };
    /**
     * 资源相关的处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    static assets: {
        addBatchBaseUrl: typeof import("./assets/index").addBatchBaseUrl;
        getImgNearColor: typeof import("./assets/index").getImgNearColor;
    };
    /**
     * 编码相关处理.
     *
     * @static
     * @memberof JsUtilsHelper
     */
    static code: typeof Code;
}
