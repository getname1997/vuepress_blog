# cli 初始化
```
  npm init -y // 初始化npm
  npm i commander download-git-repo ora handlebars -s
  commander 命令行工具
  download-git-repo 下载git代码
  figlet  命令行工具 字体变大
  clear 清空命令行
  chalk  命令行颜色
  ora 进度条
  open 打开浏览器
   // 版本写死 
  “chalk”: “^4.1.2”,
  “ora”: “^5.1.0”,

```

## 更改package

```
// 添加 
{
  "bin": {
    "ks" : "./bin/ks.js"
  }
  
}
 

```
