function isEmpty(arr: any[]): boolean;
function isEmpty(str: string): boolean;

/**
 * 判断指定对象是否为空.
 * 可以判断字符串和数组.
 * @param {(any[]|string)} data
 * @returns {boolean}
 */
function isEmpty (data: any[]|string): boolean {
  return data.length == 0 ? true : false;
}

export default isEmpty