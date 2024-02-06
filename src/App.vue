<script setup>
import NavigationBar from './components/organisms/NavigationBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="flex-grow w-full min-w-full pt-12">
    <header class="">
      <NavigationBar />
    </header>
    <RouterView class="pt-16 bg-darkBlue" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
