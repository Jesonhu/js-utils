import Core from '../Core/index';

const { extend } = Core;

/** 默认配置 */
const loadMoreDefaultConfig: ILoadMoreConfig = {
  /** 当前请求的页码 */
  pageIndex: 1,
  /** 每页最多显示的数量 */
  pageSize: 5,
  /** 总数量 */
  pageCount: 0,
  /** 最大请求的页码数 */
  maxPageIndex: 1,
}

interface ILoadMoreConfig {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  maxPageIndex: number;
}

export default class LoadMore {
  constructor(config: any) {
    this.init(config);
  }
  
  /** 配置. */
  private config: ILoadMoreConfig 
  /** 默认(第一次)请求的页码. */
  private PAGE_INIT_INDEX: number = 1
  /** 是否是第一次加载标记.(完成一次加载更多操作后就会被标记为 false) */
  private isFirstLoadMore: boolean = true;
  private _pageIndex: number
  private _pageSize: number
  private _pageCount: number
  private _maxPageIndex: number

  init(config: any): void {
    this.initData(config);
  }
  
  initData(config: ILoadMoreConfig): void {
    this.config = extend(loadMoreDefaultConfig, this.config);
    this._pageIndex = this.config.pageIndex;
    this._pageSize = this.config.pageSize;
    this._pageCount = this.config.pageCount;

    delete this.config;

    this.calculateMaxPageIndex();
  }
  
  set pageCount(value) {
    this._pageCount = value;
    this.calculateMaxPageIndex();
  }
  get pageCount(): number {
    return this._pageCount;
  }
  get pageIndex(): number {
    return this._pageIndex;
  }
  calculateMaxPageIndex(): void {
    const pageCount = this._pageCount;
    const pageSize = this._pageSize;
    const pageInitIndex = this.PAGE_INIT_INDEX;

    let maxPageIndex = Math.ceil(pageCount / pageSize);

    // 处理 pageCount = 0 的情况.
    this._maxPageIndex = (maxPageIndex === 0 ? pageInitIndex : maxPageIndex);
  }
  /** 完成一次加载更多了 */
  loadMoreFinish(): void {
    // 第一次加载更多完成.
    if (this.isFirstLoadMore) {
      this.isFirstLoadMore = false;
      return;
    }

    this._pageIndex++;
    if (this._pageIndex > this._maxPageIndex) {
      this._pageIndex = this._maxPageIndex;
    }
  }
  /**
   * 检查是否可以加载更多.
   * 当前的页码小于最大页码时返回: true,
   * 大于最大页码时返回：false.
   *
   * @memberof LoadMore
   */
  isCanLoadMore(): boolean {

    // 第一次无论如何都可以加载更多.
    if (this.isFirstLoadMore) {
      return true;
    }

    return this._pageIndex < this._maxPageIndex ? true : false;
  }
}