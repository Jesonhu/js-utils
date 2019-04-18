// ====================
// 获取指定目录下面的文件(目前仅支持两层文件夹筛选).
// 
// @update 2019/03/13
// ====================
const path = require('path')
const fs = require('fs')

const getSonDirectory = (path) => {
  // @see http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options
  const files = fs.readdirSync(path)
  let resStr = ''
  
  files.forEach(name => {
    const filePath = PATH + '/' + name;
    const stat = fs.lstatSync(filePath);
    const isDirectory = stat.isDirectory();

    // 第二层的文件夹判断.
    if (isDirectory) {
      const innerFiles = fs.readdirSync(filePath);
      innerFiles.forEach(innerName => {
        const htmlFileName = innerName.replace('.html', '');
        const formatOnlinePath = `${filePath}/${innerName}`.replace('./', 'aaa/')
        resStr += `+ [${htmlFileName}](${filePath}/${innerName})\n`;
      });
    }
  })

  console.log(resStr)
  return resStr
}

const PATH = './demo'
const BASE_URL = ''
getSonDirectory(PATH)