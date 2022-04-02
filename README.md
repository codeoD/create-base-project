## 介绍

一个基于 vite 和 vue3 及其他现代 web 技术的工程基础架构。

## 安装使用

> vite 需要[Node.js](https://nodejs.org/en/)版本 >= 12.0.0

本项目目前仅支持 vue-ts 模板，后续提供其他模板的支持，部分代码参考 vite 模板仓库。

```powershell
# npm 6.x
npm init bp@latest my-vue-app --template vue-ts

# npm 7+, 需要额外的双横线：
npm init bp@latest my-vue-app -- --template vue-ts

# yarn
yarn create bp my-vue-app --template vue-ts

# pnpm
pnpm create bp my-vue-app -- --template vue-ts
```

## 实现功能及采用技术

1. 封装请求

   异步请求采用浏览器 API [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)实现，封装实现统一的接口请求和错误处理，以及对不同网络状态的响应。

2. 封装路由

   基于 vue-router 实现对路由的封装

3. 封装菜单

4. 封装登录

5. 全局状态管理

   全局状态管理使用[pinia](https://pinia.vuejs.org/),其提供组合式 APi 的同时对 TS 的支持更好，是 Vue 官方推荐的状态管理工具，而 Vuex 将不再引入新功能。

6. CSS 处理

   本工程使用 postcss 作为基础工具引入多个插件以支持新的 CSS 特性以及尚在草案当中的 CSS 嵌套。

7. 代码检查及风格

   使用 eslint 进行代码检查，使用 prettier 格式化代码。

   安装 eslint prettier 等依赖，prettier 建议使用精确安装（--save-exact），然后以 eslint 为基础进行配置。prettier 的配置尽量通过配置文件[.prettierrc](https://prettier.io/docs/en/configuration.html)书写，因为如 prettier-vscode 的编辑器扩展会读取 prettier 配置文件里的内容，但不会从 ESLint 读取配置，这将导致不一样的体验。

   [相关阅读](https://typescript-eslint.io/docs/linting/)

8. 提交规范

   使用[husky](https://typicode.github.io/husky/#/)及[lint-staged](https://github.com/okonet/lint-staged#configuration)

   类似 husky 的替代品 simple-git-hooks

   vue[核心库](https://github.com/vuejs/core)使用的是[yorkie](https://www.npmjs.com/package/yorkie)，基于 husky 的分支，当时的 husky 在 lerna monorepo 的应用当中存在一些问题，新版本的 husky 已经不存在此[问题（v6+）](https://github.com/typicode/husky/issues/677#issuecomment-873395214)

---

## 期间遇到的一些问题：

1. Q: Cannot access 'xxx' before initialization

   A: 这种就是遇到了循环依赖的问题，解除循环依赖即可。[ESM 虽然支持循环依赖，但也有限制](https://github.com/vitejs/vite/issues/4430#issuecomment-979013114)。

2. Q: Cannot find module 'estree' or its corresponding type declarations.

   A: 缺少 estree 的类型声明文件，需要安装@types/estree

3. Q: 如何将打包后代码转换为 ES5

   A: 默认情况下，Vite 的目标浏览器是指能够 支持原生 ESM script 标签 和 支持原生 ESM 动态导入的。esbuild 暂不支持转换成 ES5 的语法，因此 vite 的 build.target 最低只能是 es2015， 同时也不包含任何 polyfill。[详细信息](https://vitejs.cn/guide/build.html#browser-compatibility) [esbuild](https://esbuild.github.io/content-types/#javascript)
   但是利用插件你可以做到对传统浏览器的支持，[@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

4. Q: 如何利用 babel 针对新特性引入 polyfill

   A: 安装插件@rollup/plugin-babel，在 vite 配置中提供如下配置

   ```js
   import { getBabelOutputPlugin } from "@rollup/plugin-babel";
   // ...
   export default {
     // ...
     build: {
       rollupOptions: {
         plugins: [
           getBabelOutputPlugin({
             configFile: "./.babelrc.json",
             // 或者使用内联配置
           }),
         ],
       },
     },
   };
   ```

   `.babelrc.json`中如下配置

   ```json
   {
     "presets": [
       [
         "@babel/preset-env",
         {
           "corejs": {
             "version": 3.8
           },
           "useBuiltIns": "usage"
         }
       ]
     ]
   }
   ```
