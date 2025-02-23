<script setup lang="ts">
const props = defineProps<{user:User}>();

</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>

<style scoped>

</style>