/**
 * 字符串是否为空.
 * 
 * @param {string} str
 * @return {boolean} `是为空`返回`true`; 否则返回`false`
 */
const isStrEmpty = (str) => {
  if (typeof str !== 'string') return;
  str.length == 0 ? true : false; 
}

export default isStrEmpty