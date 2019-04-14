interface ILoadMoreConfig {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    maxPageIndex: number;
}
export default class LoadMore {
    constructor(config: any);
    /** 配置. */
    private config;
    /** 默认(第一次)请求的页码. */
    private PAGE_INIT_INDEX;
    /** 是否是第一次加载标记.(完成一次加载更多操作后就会被标记为 false) */
    private isFirstLoadMore;
    private _pageIndex;
    private _pageSize;
    private _pageCount;
    private _maxPageIndex;
    init(config: any): void;
    initData(config: ILoadMoreConfig): void;
    pageCount: number;
    readonly pageIndex: number;
    calculateMaxPageIndex(): void;
    /** 完成一次加载更多了 */
    loadMoreFinish(): void;
    /**
     * 检查是否可以加载更多.
     * 当前的页码小于最大页码时返回: true,
     * 大于最大页码时返回：false.
     *
     * @memberof LoadMore
     */
    isCanLoadMore(): boolean;
}
export {};
