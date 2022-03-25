<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./pages/login/Main.vue";
import MainLayout from "./layouts/Main.vue";
</script>

<template>
  <!-- <HelloWorld></HelloWorld> -->
  <!-- <Login></Login> -->
  <MainLayout></MainLayout>
  <!-- <router-view></router-view> -->
</template>

<style>
@import url(/public/reset.css);
#app {
  height: 100vh;
}
</style>
