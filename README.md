## koa2 + ts 起手式项目结构

- `package.json`已包含部分需安装插件
- `.eslintrc.js`已经配置好相关检测，但并没有配合`husky`做`commit`检查及修复



```shell
# 安装依赖
npm i

# 开启服务器，配合 nodemon，ts-node 做好监测 src/ 下 .ts 文件修改热更新
npm run dev

# 打包
npm run build
```



*Tips:*

- 可以通过`process.env.NODE_ENV`来判断是`development`还是`production`环境

