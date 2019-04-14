/**
 * 获取与给定颜色相近的颜色值.
 *
 * @param {RGB} rgb 源颜色的值.
 * @return {string} 与源接近的颜色值
 *
 * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
 */
export declare function getImgNearColor(rgb: any): string;
export declare function addBatchBaseUrl(arr: [], key: string, baseUrl: string): [];
export declare function addBatchBaseUrl(arr: [], baseUrl: string): [];
/**
 * 单个资源添加基础域.
 *
 * @export
 * @param {string} sourceUrl 需要添加基础域的字符串.
 * @param {string} baseUrl 基础域
 * @returns {string}  添加域后的字符串.
 */
export declare function addBaseUrl(sourceUrl: string, baseUrl: string): string;
/**
 * 富文本字符串中图片添加基础域.
 *
 * @export
 * @param {string} richTextStr 富文本字符串
 * @param {string} baseUrl 需要添加的基础域.
 * @returns 添加基础域后的字符串.
 */
export declare function addRichTextImgUrl(richTextStr: string, baseUrl: string): string;
declare const _default: {
    /**
     * 资源批量添加`前缀`.
     *
     * @param {string} baseUrl 前缀字符串
     * @param {string|array|object} source 需要添加前缀的资源
     * @param {[string]} key 如果资源是对象，对象的键对应值
     * @return
     */
    addBatchBaseUrl: typeof addBatchBaseUrl;
    /**
     * 单个资源添加基础域.
     *
     * @export
     * @param {string} sourceUrl 需要添加基础域的字符串.
     * @param {string} baseUrl 基础域
     * @returns {string}  添加域后的字符串.
     */
    addBaseUrl: typeof addBaseUrl;
    /**
     * 获取与给定颜色相近的颜色值.
     *
     * @param {RGB} rgb 源颜色的值.
     * @return {string} 与源接近的颜色值
     *
     * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
     */
    getImgNearColor: typeof getImgNearColor;
    /**
     * 富文本字符串中图片添加基础域.
     *
     * @export
     * @param {string} richTextStr 富文本字符串
     * @param {string} baseUrl 需要添加的基础域.
     * @returns 添加基础域后的字符串.
     */
    addRichTextImgUrl: typeof addRichTextImgUrl;
};
export default _default;
export declare class Assets {
    static addBatchBaseUrl: typeof addBatchBaseUrl;
}
