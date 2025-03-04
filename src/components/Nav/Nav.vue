<script setup lang="ts">
import User from '../People/User.vue';

const user:User = {
  userId:1,
  name: "John Doe",
  email: "johndoe@email.com",
  photoUrl: "/img/user_thumbnail.jpg"

}
</script>

<template>
<nav>
  <ul>
    <li>
      <RouterLink to="/">
        <img src="/icons/LOGO.svg"/>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/people/1">
        <User :user="user"></User>
      </RouterLink>
    </li>
  </ul>
</nav>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.5rem;
}


</style>