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

期间遇到的一些问题：

1. Q:Cannot access 'xxx' before initialization

   A:这种就是遇到了循环依赖的问题，解除循环依赖即可。[ESM 虽然支持循环依赖，但也有限制](https://github.com/vitejs/vite/issues/4430#issuecomment-979013114)。
