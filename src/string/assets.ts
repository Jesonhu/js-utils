/**
 * 获取与给定颜色相近的颜色值.
 * 
 * @param {RGB} rgb 源颜色的值.
 * @return {string} 与源接近的颜色值
 * 
 * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
 */
export function getImgNearColor(rgb: any) {
  const r = (rgb & 0x00ff0000) >> 16;
  const g = (rgb & 0x0000ff00) >> 8;
  const b = (rgb & 0x000000ff);
  return `rgb(${r}, ${g}, ${b})`;
}


export function addBatchBaseUrl(arr: [], key: string, baseUrl: string): [];
export function addBatchBaseUrl(arr: [], baseUrl: string): [];
/**
 * 资源批量添加`前缀`.
 * 
 * @param {array} source 需要添加前缀的资源数组
 * @param {[string]} key 如果资源数组每项是对象，key为需要添加前缀的对象所在的键值; 每项如果是字符串，key 相当于 baseUrl
 * @param {string} baseUrl 基础域(需要补充的前缀域)
 * @return 
 */
export function addBatchBaseUrl<T>(source: T[], key: string, baseUrl?: string): T[] {
  if (source.length === 0) {
    throw Error('source arr at lease has one item');
  };
  
  let resArr: T[] = [];

  // 第三个参数不存在
  if (!baseUrl) {
    const _baseUrl = key;
    source.forEach((item: any) => {
      const _item: any = `${_baseUrl}/${item}`;
      resArr.push(_item);
    })
    return resArr;
  }

  source.forEach((item: any) => {
    item[key] = `${baseUrl}${item[key]}`
  })
  return source;
}

/**
 * 单个资源添加基础域.
 *
 * @export
 * @param {string} sourceUrl 需要添加基础域的字符串.
 * @param {string} baseUrl 基础域
 * @returns {string}  添加域后的字符串.
 */
export function addBaseUrl(sourceUrl: string, baseUrl: string): string {
  return `${baseUrl}/${sourceUrl}`;
}

/**
 * 富文本字符串中图片添加基础域.
 *
 * @export
 * @param {string} richTextStr 富文本字符串
 * @param {string} baseUrl 需要添加的基础域.
 * @returns 添加基础域后的字符串.
 */
export function addRichTextImgUrl(richTextStr: string, baseUrl: string): string {
  const str = richTextStr;
  return str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, `<img src="${baseUrl}$1" />`);
}

export default {
  /**
   * 资源批量添加`前缀`.
   * 
   * @param {string} baseUrl 前缀字符串
   * @param {string|array|object} source 需要添加前缀的资源
   * @param {[string]} key 如果资源是对象，对象的键对应值
   * @return 
   */
  addBatchBaseUrl,
  /**
   * 单个资源添加基础域.
   *
   * @export
   * @param {string} sourceUrl 需要添加基础域的字符串.
   * @param {string} baseUrl 基础域
   * @returns {string}  添加域后的字符串.
   */
  addBaseUrl,

  /**
   * 获取与给定颜色相近的颜色值.
   * 
   * @param {RGB} rgb 源颜色的值.
   * @return {string} 与源接近的颜色值
   * 
   * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
   */
  getImgNearColor,

  /**
   * 富文本字符串中图片添加基础域.
   *
   * @export
   * @param {string} richTextStr 富文本字符串
   * @param {string} baseUrl 需要添加的基础域.
   * @returns 添加基础域后的字符串.
   */
  addRichTextImgUrl
}


export class Assets {
  static addBatchBaseUrl = addBatchBaseUrl
}

