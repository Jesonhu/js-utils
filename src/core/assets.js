const _ = require('lodash');
/**
 * 资源处理功能对象
 */
const assets = {
  /**
   * 资源添加`前缀`.
   * 
   * @param {string} baseUrl 前缀字符串
   * @param {string|array|object} source 需要添加前缀的资源
   * @param {[string]} key 如果资源是对象，对象的键对应值
   * @return 
   */
  addHeadUrl(baseUrl, source, key) {
    const { isString, isArray } = _;
    let newSource;

    if (isString(source)) {
      newSource = `//${baseUrl}${source}`;
    } else if (isArray(source)) {
      // 传了`key`
      if (key) {
        if (source.length > 0) {
          source.forEach((item, index) => {
            source[index][key] = `//${baseUrl}${item}`;
          });
        }
      } else {
        if (source.length > 0) {
          source.forEach((item, index) => {
            source[index] = `//${baseUrl}${item}`;
          });
        }
      }
      newSource = source;
    } else if (source[key]) { // 是一个对象 `{key: xxx}`
      source[key] = `//${baseUrl}${source[key]}`;
      newSource = source;
    }

    return newSource;
  },

  /**
   * 获取与图片颜色相近的颜色值.
   * 
   * @param {RGB} rgb 源颜色的值.
   * @return {string} 与源接近的颜色值
   * 
   * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
   */
  getImgNearColor(rgb) {
    const r = (rgb & 0x00ff0000) >> 16;
    const g = (rgb & 0x0000ff00) >> 8;
    const b = (rgb & 0x000000ff);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

module.exports = assets;