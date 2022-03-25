<template>
  <div class="content-model">
    <HeadModel></HeadModel>
    <main class="main-content">
      <router-view></router-view>
      <!-- <slot name="route"></slot> -->
      <div>@2022 lee</div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeadModel from "./HeadModel.vue";
export default defineComponent({
  name: "",
  components: {
    HeadModel,
  },
});
</script>
<style lang="postcss">
.content-model {
  display: flex;
  width: 0;
  flex: auto;
  flex-direction: column;
  & .main-content {
    flex: 1;
  }
}
</style>
