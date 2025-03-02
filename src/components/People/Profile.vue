<script setup lang="ts">
defineProps<{user:User}>();

</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>

<style scoped>

</style>