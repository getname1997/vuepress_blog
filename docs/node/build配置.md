## 打包配置



~~~
// nest-cli.json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,// 是否删除
    "watchAssets": true, // 是否监听文件改变
    "assets":[
      "**/.env.*","**/*.env"
   ]
  }
}




~~~

