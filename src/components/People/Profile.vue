<script setup lang="ts">
//import { useRoute } from 'vue-router';
import { mockUser } from './mockData';
import { ref } from 'vue';
import Stars from './Review/Stars.vue';
// defineProps<{user:User}>();
interface UserDetail extends User {
    bio: string,
    stars: number,
    reviews: number,
}
//const route = useRoute();

const user = ref<UserDetail>({
    userId: 0,
    name: "",
    email: "",
    photoUrl: "",
    bio: "",
    stars: 0,
    reviews: 0,
});

async function loadUserInfo() {
    //route.params.userId
    user.value = {
        ...mockUser,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente delectus reprehenderit explicabo debitis exercitationem. Voluptatibus suscipit provident, ullam a soluta tempora minus? Maxime aut blanditiis animi, molestias maiores magnam!",
        photoUrl: "/img/user_full.jpg",
        stars: 4.3,
        reviews: 10,
    };
}

loadUserInfo()

</script>

<template>
    <article>
        <section class="profileCard">
            <div class="userInfo">
                <img class="profilePic" :src="user.photoUrl" alt="profile picture">
                <div>
                    <h1>{{ user.name }}</h1>
                    <p>{{ user.email }}</p>
                    <p>{{ user.bio }}</p>
                    <Stars :stars="user.stars" :reviews="user.reviews"></Stars>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="items">Items</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="trades">Trades</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="reviews">Reviews</RouterLink>
                    </li>
                </ul>
            </nav>
        </section>
        <section>
            <RouterView></RouterView>
        </section>
    </article>
</template>

<style scoped>
.profileCard {
    display: grid;
    /* grid-template-columns: 17.5rem 1fr; */
    gap: 2.5rem;
    background: rgba(255, 255, 255, 0.25);
    padding: 2rem;
    border-radius: 0.5rem;
}

.userInfo {
    display: flex;
    gap: 2.5rem;
}

img.profilePic {
    width: 100%;
    max-height: 17.5rem;
    max-width: 17.5rem;
    /* height:17.5rem; */
    object-fit: cover;
    border-radius: 0.5rem;

}

ul {
    display: flex;
    gap: 2rem;
    font-size: 2rem;
    font-family: 'Montserrat'
}
</style>