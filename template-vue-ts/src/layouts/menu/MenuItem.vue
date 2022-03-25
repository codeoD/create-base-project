<template>
  <li class="menu-item">
    <span>{{ text }}</span>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    text: String,
  },
});
</script>
<style lang="postcss" scoped>
.menu-item {
  height: 40px;
  line-height: 40px;
  margin-bottom: 8px;
  &:hover {
    color: #1890ff;
  }
}
</style>
