<template>
    <div class="posts-container">
    <h2 :class="{'dark-theme': isDark, 'light-theme': !isDark}">Что нового в мире биткоина</h2>
   <h2 v-if="isLoading">Loading</h2>
    <div v-else class="art-container">
    <article class="news-card" :class="{'dark-theme': isDark, 'light-theme': !isDark}" v-for="post in defaultPosts" :key="post.id">
        <h3 :class="{'dark-theme': isDark, 'light-theme': !isDark}">{{ post.title }}</h3>
        <div>{{ post.body }}</div>
        <div class="art-footer" :class="{'dark-theme': isDark, 'light-theme': !isDark}">
            <p>Новость №{{ post.id }}</p>
            <p>{{ post.userId }}</p>
        </div>
    </article>
    </div>
    <button v-if="defaultPostsPage < 20" @click="showMorePosts" class="btn-more" >Показать еще 10 постов</button>
    <button v-else-if="defaultPostsPage === 20 "  @click="showAllPosts" class="btn-more">Показать все</button>
    <button v-else @click="minimazePosts" class="btn-more">Свернуть все посты</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
//props
defineProps<{
  isDark?: boolean;
}>();

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}
const posts = ref<IPost[]>([])
const error = ref<string | null>(null)
const defaultPostsPage = ref(10)
const isLoading = ref(false)
const getPosts = async () => {
    isLoading.value=true
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    if (!response) {
        throw new Error ('Посты не обнаружены')
    }
    
    posts.value = await response.json()
}
catch (e:unknown) {
    if (e instanceof Error) {
        error.value = e.message
    }
    else {
        error.value = 'OOoooops'
    }
}
finally {
   isLoading.value = false
}
}
getPosts()

const defaultPosts = computed(()=> {
    return posts.value.slice(0, defaultPostsPage.value)
})
const showMorePosts =()=> {
    defaultPostsPage.value += 10
}
const showAllPosts =()=> {
   defaultPostsPage.value=posts.value.length
}
const minimazePosts = ()=> {
    defaultPostsPage.value=10
}



</script>

<style scoped>
h2 {
    display: flex;
    align-items: end;
    padding: 15px;
    background-color: blueviolet;
    border-radius: 15px;
    color: white;
    margin: 0 auto;
}
h2.dark-theme {
    background-color: transparent;
    color: black;
    font-weight: bold;
    margin: unset;
}
.posts-container {
    display: flex;
    flex-direction: column;
}

.art-container {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}
.news-card {
    margin-top: 30px;
    width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: whitesmoke;
    color: black;
    border: 1px solid transparent;
    border-radius: 15px;
    box-shadow: 0 4px  8px blueviolet;
    transition: transform 0.3s ease;
}
.news-card:hover {
     transform: translateY(-5px)
}
.news-card.dark-theme {
    background-color: white;
    box-shadow: 0 4px 16px yellow;

}
.art-footer {
    padding: 10px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(230, 227, 227);
    border-radius: 10px;

}
.art-footer.dark-theme {
    background-color: black;
    color: yellowgreen;
    font-weight: 700;
}
h3 {
    padding: 7px;
    font-weight: 500;
    color: white;
    background-color: blueviolet;
    border-radius: 5px;
}
h3.dark-theme {
    background-color: transparent;
    color: black

}
.btn-more {
    display: flex;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    border-radius: 5px;
    border: solid 1px transparent;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
}
.btn-more:hover {
    background-color: whitesmoke
}

</style>