<script setup lang="ts">
defineProps<{ stars: number; reviews: number }>()

</script>

<template>
    <div class="Stars">
        <div>Stars {{ stars }}</div>
        <div>Reviews {{ reviews }}</div>
    </div>
</template>

<style scoped></style>