/**
 * 编码处理对象.
 *
 * @see [简单明了区分escape、encodeURI和encodeURIComponent](https://www.cnblogs.com/season-huang/p/3439277.html)
 * @see [一张图看懂encodeURI、encodeURIComponent、decodeURI、decodeURIComponent的区别](https://www.cnblogs.com/shuiyi/p/5277233.html)
 * @see [live-demo](https://codepen.io/Jesonhu/pen/yzBdvW)
 */
var Code = /** @class */ (function () {
    function Code() {
    }
    /**
     * 对编码后的 `URI` 进行`解码`.
     *
     * @param {string} str 需要解码的字符串
     * @return {string} 解码后的字符串
     */
    Code.deCode = function (str) {
        // @see [`js unicode` 转中文]https://www.jb51.net/article/113158.htm
        // @see [escape()/unescape()](http://www.w3school.com.cn/jsref/jsref_unescape.asp)
        // @see [encodeURI()/decodeURI()](http://www.w3school.com.cn/jsref/jsref_decodeURI.asp)
        // 'a\u123' => 'a%u123';
        str = str.replace(/\\/g, '%');
        return decodeURIComponent(str);
    };
    /**
     * 把字符串作为`URI`进行编码.
     *
     * @param {string} str 需要编码的字符串|URIstring.
     * @return {string} 编码后的字符串
     */
    Code.enCode = function (str) {
        // @see [encodeURI](http://www.w3school.com.cn/jsref/jsref_encodeuri.asp)
        // let res = [];
        // for (let i = 0, length = str.length; i < length; i++) {
        // @example '00543e'.slice(-4) ==> '543e'
        // @example '好' ==> '00597d'.slice(-4) ==> '597d'
        // res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        // }
        // return "\\u"+res.join("\\u");
        return encodeURIComponent(str);
    };
    return Code;
}());
export default Code;
