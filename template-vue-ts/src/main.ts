import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";

const app = createApp(App);
app.use(createPinia()).use(router);
app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info);
};
app.mount("#app");
