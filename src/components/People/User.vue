<script setup lang="ts">
defineProps<{user:User}>();

</script>

<template>
  <div class="User">
    <div class="avatar">
      <img v-if="user.photoUrl" :src="user.photoUrl"/>
      <svg v-else width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 14.9333C15.3237 14.9333 18.6667 11.5904 18.6667 7.46667C18.6667 3.34294 15.3237 0 11.2 0C7.07627 0 3.73333 3.34294 3.73333 7.46667C3.73333 11.5904 7.07627 14.9333 11.2 14.9333ZM11.2 28H22.4C22.4 21.8144 17.3856 16.8 11.2 16.8C5.01441 16.8 0 21.8144 0 28H11.2Z" fill="white"/>
      </svg>

    </div>
    <div class="username">{{ user.name }}</div>
  </div>
</template>

<style scoped>
  .User {
    display: flex;
    gap:0.5rem;
    align-items:center;
    font-family: Helvetica
  }

  .avatar {
    height:2.5rem;
    width:2.5rem;
    background:#d9d9d9;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
  }

  img {
    width:100%;
  }

  .username {
    font-size: 1rem;
  }
</style>