/**
 * 编码处理对象.
 *
 * @see [简单明了区分escape、encodeURI和encodeURIComponent](https://www.cnblogs.com/season-huang/p/3439277.html)
 * @see [一张图看懂encodeURI、encodeURIComponent、decodeURI、decodeURIComponent的区别](https://www.cnblogs.com/shuiyi/p/5277233.html)
 * @see [live-demo](https://codepen.io/Jesonhu/pen/yzBdvW)
 */
export default class Code {
    /**
     * 对编码后的 `URI` 进行`解码`.
     *
     * @param {string} str 需要解码的字符串
     * @return {string} 解码后的字符串
     */
    static deCode(str: string): string;
    /**
     * 把字符串作为`URI`进行编码.
     *
     * @param {string} str 需要编码的字符串|URIstring.
     * @return {string} 编码后的字符串
     */
    static enCode(str: string): string;
}
