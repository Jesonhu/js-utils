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
     * 获取与给定颜色相近的颜色值.
     *
     * @param {RGB} rgb 源颜色的值.
     * @return {string} 与源接近的颜色值
     *
     * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
     */
    getImgNearColor: typeof getImgNearColor;
};
export default _default;
