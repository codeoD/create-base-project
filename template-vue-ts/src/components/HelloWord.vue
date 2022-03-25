<template>
  <div>welcome to use base-project scaffold</div>
</template>
<script lang="ts">
import { defineComponent, h, reactive } from "vue";
import jsonplaceholder from "../services/jsonplaceholder";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    async function test() {
      const { execute, abort } = jsonplaceholder.getResource(10001);
      setTimeout(() => abort(), 50);
      console.log(await execute());
      const { id: createdId } = await jsonplaceholder
        .createResource({
          title: "created by user",
          body: "some info",
          userId: 11,
        })
        .execute();
      jsonplaceholder.deleteResource(createdId).execute();
    }
    test();
    return {};
  },
  methods: {
    handleDirData() {},
  },
});
</script>
<style lang="postcss"></style>
