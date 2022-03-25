<template>
  <div class="layout">
    <NavModel></NavModel>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeadModel from "./HeadModel.vue";
import NavModel from "./NavModel.vue";
import ContentModel from "./ContentModel.vue";
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "",
  components: {
    HeadModel,
    NavModel,
    ContentModel,
  },
  setup() {
    const store = useMainStore();
    const { username } = storeToRefs(store);
    store.getUserInfo();
    setTimeout(() => {
      // username.value = "233";
      // store.username = "sada";
    }, 5000);
  },
});
</script>
<style lang="postcss">
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>
