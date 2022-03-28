<template>
  <div class="content-model">
    <HeadModel></HeadModel>
    <div class="content-layout">
      <main>
        <router-view></router-view>
      </main>
      <div class="footer">@2022 lee</div>
    </div>
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
  & .content-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    & main {
      flex: 1;
    }
    & .footer {
      text-align: center;
    }
  }
}
</style>
