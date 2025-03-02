<script setup lang="ts">
import { useRoute } from 'vue-router';

// defineProps<{user:User}>();
const route = useRoute();


</script>

<template>
  <div>
    Profile {{ route.params.userId }}
  </div>
</template>

<style scoped>

</style>