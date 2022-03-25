<template>
  <header
    style="height: 48px; line-height: 48px; background: transparent"
  ></header>
  <header class="ws-head">
    <div class="ws-head-content">
      <div>Web System</div>
      <div style="flex: 1 1 0%; height: 100%"></div>
      <div class="function-area">
        <!-- <span>{{ store.username }}</span> -->
        <span>退出</span>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useMainStore } from "../store";

export default defineComponent({
  name: "",
  setup() {
    // const store = useMainStore();
    return {
      // store,
    };
  },
});
</script>
<style lang="postcss" scoped>
.ws-head {
  position: fixed;
  width: 100%;
  background: #001529;
  color: #fff;
  top: 0;
  right: 0px;
  height: 48px;
  border-bottom: 1px solid pink;
  & .function-area {
    display: flex;
    gap: 8px;
  }
  & .ws-head-content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
}
</style>
