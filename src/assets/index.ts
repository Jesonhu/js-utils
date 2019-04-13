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
 * @param {string} baseUrl 前缀字符串
 * @param {string|array|object} source 需要添加前缀的资源
 * @param {[string]} key 如果资源是对象，对象的键对应值
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
   * 获取与给定颜色相近的颜色值.
   * 
   * @param {RGB} rgb 源颜色的值.
   * @return {string} 与源接近的颜色值
   * 
   * @see [RGB颜色表示方法，red = (rgb & 0x00ff0000) >> 16是什么意思？](https://blog.csdn.net/nannan_smile/article/details/26755619)
   */
  getImgNearColor
}

