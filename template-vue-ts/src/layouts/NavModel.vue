<template>
  <aside class="nav-model">
    <Menu></Menu>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./menu/Main.vue";

export default defineComponent({
  name: "",
  components: {
    Menu,
  },
  setup() {},
  render() {},
});
</script>
<style lang="postcss">
.nav-model {
  border-right: 1px solid pink;
  width: 208px;
  height: 100%;
  padding-top: 48px;
}
</style>
