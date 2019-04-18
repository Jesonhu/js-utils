export default class Format {
    /**
     * 格式为`百分比方式`
     *
     * @param {number} now 当前值.
     * @param {number} total 总值.
     * @return {string} 百分比后的字符串.
     *
     * @example
     * getPercentNumber(2, 5)
     * // => '40'
     */
    static getPercent(now: number, total: number): string;
}
