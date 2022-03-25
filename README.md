1. 封装请求

   异步请求采用浏览器 API [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)实现，封装实现统一的接口请求和错误处理，以及对不同网络状态的响应。

2. 封装路由

3. 封装菜单

4. 封装登录

5. 全局状态管理

   全局状态管理使用[pinia](https://pinia.vuejs.org/),其提供组合式 APi 的同时对 TS 的支持更好，是 Vue 官方推荐的状态管理工具，而 Vuex 将不再引入新功能。

6. CSS 处理

   本工程使用 postcss 作为基础工具引入多个插件以支持新的 CSS 特性以及尚在草案当中的 CSS 嵌套。

7. web components： 参考 ant design

期间遇到的一些问题：

1. Q:Cannot access 'xxx' before initialization

   A:这种就是遇到了循环依赖的问题，解除循环依赖即可。[ESM 虽然支持循环依赖，但也有限制](https://github.com/vitejs/vite/issues/4430#issuecomment-979013114)。

2.
