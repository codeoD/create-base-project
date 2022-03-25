import { defineStore, acceptHMRUpdate } from "pinia";
import UserAPI from "../services/user";

export const useMainStore = defineStore({
  id: "main",
  state: () => {
    return {
      username: "",
      sex: 0,
    };
  },
  actions: {
    async getUserInfo() {
      const { execute } = UserAPI.getUserInfo();
      const { username, sex } = await execute();
      this.sex = sex;
      this.username = username;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
