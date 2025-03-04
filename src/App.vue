<script setup lang="ts">
import Nav from './components/Nav/Nav.vue';
</script>

<template>
  <div class="appWrapper">
    <Nav></Nav>
    <RouterView />
  </div>
</template>

<style scoped>

.appWrapper {
  max-width: 80rem;
  margin:0 auto;
  padding:0 1rem;
}
</style>
