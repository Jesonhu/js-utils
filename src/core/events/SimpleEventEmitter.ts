import HashEvent from './HashObject';

interface ISimpleEventEmitterListeners {
  /** 事件处理函数 */
  listener: Function,
  /** 事件处理函数的 this 指向 */
  scope?: any
}

/**
 * 简单的事件监听与派发.
 * 
 * @author Jesonhu(github)
 * @create 2019/12/23
 * @update 2019/12/23
 * 
 * @desc 与 `Event` 区别是功能简单, 
 * 只有事件: 监听，派发，移除功能.
 * 
 * @desc: 使用场景，需要时间监听和派发功能简单，且非常在意代码体积大小的.
 * 
 * @tips 当前事件处理类也只用于自定义事件的处理，Dom 事件, 如 on('click', callback) 请直接使用 dom 原生事件处理.
 */
export class SimpleEventEmitter extends HashEvent {
  constructor() {
    super();
  }

  public $_listeners: any = {}

  /** 
   * 事件监听 
   * 
   * @param {String} type 监听的事件标识.
   * @param {Function} callback 事件监听的处理函数.
   * @param {Any} scope 事件处理函数中 this 的指向.
   */
  public on(type: string, callback: Function, scope: any = null) {
    this.$_listeners[type] = this.$_listeners[type] = [];
    const listeners: ISimpleEventEmitterListeners[] = this.$_listeners[type];
    listeners.push( { listener: callback, scope } );
  }

  /**
   * 移除事件监听.
   * @param {String} type 监听的事件标识.
   * @param {Function} callback 事件监听的处理函数.
   */
  public off(type: string, callback: Function) {
    const listeners = this.$_listeners[type];
    
    if (!Array.isArray(listeners)) return;

    const index = this.__findIndex(type, callback);
    if (index === -1) return;
    listeners.splice(index, 1);
  }

  /**
   * 触发指定监听事件.
   * @param {String} type 监听的事件标识.
   * @param {Any} eventData 可选，事件派发时附加的数据.
   */
  public trigger(type: string, eventData: any = null) {
    const listeners = this.$_listeners[type];
    if (!Array.isArray(listeners)) return;
    listeners.forEach(item => {
      const callback = item['callback'];
      if (callback && callback instanceof Function) callback(); 
    });
  }

  private __findIndex(type: string, callback: Function): number {
    const listeners = this.$_listeners[type];
    let index = -1;
    for (let i = 0, len = listeners.length; i < len; i++) {
      if (listeners[i]['callback'] === callback) {
        index = i;
        break;
      }
    }
    return index;
  }
}

export default SimpleEventEmitter;