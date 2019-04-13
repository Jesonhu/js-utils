// 返回never的函数必须存在无法达到的终点
export default function coreError(msg) {
    throw new Error(msg);
}
