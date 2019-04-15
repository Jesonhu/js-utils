// declare var global: Global;
// declare var __global;
// if (typeof global == 'undefined') {
//   var global: any = window;
// }
// if (typeof __global == 'undefined') {
//   var __global = global;
// }

/**
 * 顶级对象。框架内所有对象的基类，为对象实例提供唯一的hashCode值
 */
export interface IHashObject {
  /**
   * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
   */
  hashCode: number;
}

/**
 * @private
 * 哈希计数
 */
export let $hashCount: number = 1;

/**
 * 顶级对象。框架内所有对象的基类，为对象实例提供唯一的hashCode值。
 */
export class HashObject implements IHashObject {
  /**
   * 创建一个 HashObject 对象
   */
  public constructor() {
    this.$hashCode = $hashCount++;
  }

  /**
   * @private
   */
  $hashCode: number;
  /**
   * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
   */
  public get hashCode(): number {
    return this.$hashCode;
  }
}